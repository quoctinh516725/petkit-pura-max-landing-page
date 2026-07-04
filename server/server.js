import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Initialize Supabase
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables! Check your server/.env file.');
}

const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');

// --- API Endpoints ---

// 1. Submit a new consultation request with cart details
app.post('/api/consult', async (req, res) => {
  try {
    const { name, phone, catsCount, cartItems } = req.body;

    if (!name || !phone || !catsCount) {
      return res.status(400).json({ error: 'Họ tên, số điện thoại và số lượng mèo là bắt buộc.' });
    }

    // Insert to Supabase table "consultations"
    const { data, error } = await supabase
      .from('consultations')
      .insert([
        {
          name,
          phone,
          cats_count: catsCount,
          cart_items: cartItems || []
        }
      ])
      .select();

    if (error) {
      console.error('Supabase insert error:', error);
      return res.status(500).json({ error: 'Không thể lưu dữ liệu đăng ký. Chi tiết: ' + error.message });
    }

    return res.status(201).json({ message: 'Đăng ký thành công!', data });
  } catch (err) {
    console.error('Server error in post consult:', err);
    return res.status(500).json({ error: 'Lỗi máy chủ nội bộ.' });
  }
});

// 2. Retrieve all consultations (for admin page)
app.get('/api/consultations', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('consultations')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase query error:', error);
      return res.status(500).json({ error: 'Không thể lấy dữ liệu đăng ký.' });
    }

    return res.status(200).json(data);
  } catch (err) {
    console.error('Server error in get consultations:', err);
    return res.status(500).json({ error: 'Lỗi máy chủ nội bộ.' });
  }
});

// 3. AI Chatbot proxy (Groq Llama 3.3 API)
app.post('/api/chat', async (req, res) => {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'GROQ_API_KEY is not configured on server' });
  }

  try {
    const { message, history } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Tin nhắn không được để trống.' });
    }

    const systemPrompt = `Bạn là trợ lý ảo tư vấn sản phẩm máy dọn vệ sinh mèo tự động PETKIT Pura Max 2 cho cửa hàng HeliPet.vn.

THÔNG TIN SẢN PHẨM:
- Tên: Petkit Pura Max 2 (thế hệ mới nhất 2025)
- Giá: 10.450.000đ (Standard), 10.950.000đ (Premium - bán chạy nhất), 11.950.000đ (Ultimate)
- Đang có voucher giảm 500.000đ khi đăng ký tư vấn

TÍNH NĂNG NỔI BẬT:
1. ShieldBase™: Chống rò rỉ nước tiểu 100%
2. Lưới lọc cát nam châm: Tự động tách phân, tái sử dụng cát sạch
3. Khử mùi 3 lớp Pura Air: Xịt khử mùi + sáp N50 + than hoạt tính
4. 12 cảm biến an toàn xSecure
5. Điều khiển qua App Petkit

THÔNG SỐ: 602x553x556mm, thùng rác 9L, <40dB, tối đa 3 mèo (<8kg/bé), cát vón cục 1.5-8mm.

QUY TẮC: Trả lời bằng tiếng Việt, ngắn gọn, súc tích (tối đa 2-3 câu hoặc danh sách ngắn). BẮT BUỘC định dạng bằng Markdown: sử dụng **in đậm** cho thông tin quan trọng (giá cả, voucher, thông số chính) và sử dụng dấu gạch đầu dòng (-) cho danh sách để thông tin trực quan, dễ đọc, tuyệt đối không viết khối dài. Luôn nhắc ngay voucher giảm **500k** đang có. KHÔNG tự bịa thông tin.`;

    const messages = [
      { role: 'system', content: systemPrompt },
      ...(history || []).slice(-10),
      { role: 'user', content: message }
    ];

    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages,
        temperature: 0.7,
        max_tokens: 500
      })
    });

    if (!groqRes.ok) {
      const errText = await groqRes.text();
      console.error('Groq API error on server:', errText);
      return res.status(502).json({ error: 'Lỗi phản hồi từ dịch vụ AI.' });
    }

    const data = await groqRes.json();
    const reply = data.choices?.[0]?.message?.content || 'Xin lỗi, mình không thể trả lời lúc này.';

    return res.status(200).json({ reply });
  } catch (err) {
    console.error('Server error in post chat:', err);
    return res.status(500).json({ error: 'Lỗi máy chủ nội bộ.' });
  }
});

app.listen(PORT, () => {
  console.log(`NodeJS Express server is running on http://localhost:${PORT}`);
});
