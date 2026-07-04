import type { VercelRequest, VercelResponse } from '@vercel/node';

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_MODEL = 'llama-3.3-70b-versatile';

const SYSTEM_PROMPT = `Bạn là trợ lý ảo tư vấn sản phẩm máy dọn vệ sinh mèo tự động PETKIT Pura Max 2 cho cửa hàng HeliPet.vn — đại lý chính hãng Petkit tại Việt Nam.

**THÔNG TIN SẢN PHẨM:**
- Tên: Petkit Pura Max 2 (thế hệ mới nhất 2025)
- Loại: Máy dọn vệ sinh mèo tự động hoàn toàn
- Giá gốc: 10.450.000đ (Gói Standard), 10.950.000đ (Gói Premium), 11.950.000đ (Gói Ultimate)
- Đang có voucher giảm 500.000đ khi đăng ký tư vấn trên Landing Page

**TÍNH NĂNG NỔI BẬT:**
1. Hệ thống ShieldBase™: Chống rò rỉ nước tiểu 100%, khay lót silicon kín hoàn toàn
2. Lưới lọc cát nam châm: Tự động tách phân và cát sạch, hạt cát được tái sử dụng
3. Khử mùi 3 lớp Pura Air: Xịt khử mùi chủ động + sáp N50 triệt amoniac + than hoạt tính
4. 12 cảm biến an toàn xSecure: Cảm biến hồng ngoại, cảm biến trọng lực, cảm biến chống kẹt — bảo vệ mèo tuyệt đối
5. Điều khiển qua App Petkit: Theo dõi sức khỏe mèo, lịch sử vệ sinh, cài đặt lịch dọn

**THÔNG SỐ KỸ THUẬT:**
- Kích thước: 602 x 553 x 556mm
- Dung tích thùng rác: 9 lít (đủ dùng 15 ngày cho 1 mèo)
- Trọng lượng: ~14kg
- Loại cát phù hợp: Cát vón cục (tofu, bentonite, hỗn hợp), hạt 1.5-8mm
- Số mèo tối đa: 3 bé mèo (dưới 8kg mỗi bé)
- Tiếng ồn: < 40dB (cực êm)

**GÓI SẢN PHẨM:**
1. Standard (10.450.000đ): Máy + phụ kiện chuẩn + 1 cuộn túi rác
2. Premium (10.950.000đ — BÁN CHẠY NHẤT): Máy + thảm bẫy cát + 2 chai Pura Air + sáp N50
3. Ultimate (11.950.000đ): Máy + thảm + 6 chai Pura Air + 4 sáp N50 + 3 cuộn túi rác (đủ 12 tháng)

**QUY TẮC TRẢ LỜI:**
- Trả lời bằng tiếng Việt, ngắn gọn, súc tích (tối đa 2-3 câu hoặc danh sách ngắn).
- BẮT BUỘC định dạng văn bản bằng Markdown: sử dụng **in đậm** cho thông tin quan trọng (như giá tiền, tính năng then chốt, dung tích) và sử dụng dấu gạch đầu dòng (-) cho danh sách để thông tin trực quan, dễ đọc, không viết khối văn bản dài liền tù tì.
- Khi khách hỏi giá, luôn nhắc ngay voucher giảm **500k** đang có.
- Gợi ý đăng ký tư vấn để giữ ưu đãi khi thích hợp.
- Nếu không biết, hãy chuyển tiếp đến CSKH. KHÔNG tự bịa thông tin.`;

interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'GROQ_API_KEY is not configured' });
  }

  try {
    const { message, history } = req.body as {
      message: string;
      history?: ChatMessage[];
    };

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Build messages array with system prompt + conversation history + new message
    const messages: ChatMessage[] = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...(history || []).slice(-10), // Keep last 10 messages for context window
      { role: 'user', content: message },
    ];

    const groqResponse = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages,
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!groqResponse.ok) {
      const errorData = await groqResponse.text();
      console.error('Groq API error:', errorData);
      return res.status(502).json({ error: 'Failed to get response from AI' });
    }

    const data = await groqResponse.json();
    const reply = data.choices?.[0]?.message?.content || 'Xin lỗi, mình không thể trả lời lúc này.';

    return res.status(200).json({ reply });
  } catch (error) {
    console.error('Chat API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
