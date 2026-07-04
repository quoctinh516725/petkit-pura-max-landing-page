import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import type { IncomingMessage, ServerResponse } from 'http';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      {
        name: 'api-chat-proxy',
        configureServer(server) {
          // Local dev middleware that mimics the Vercel serverless function
          server.middlewares.use('/api/chat', async (req: IncomingMessage, res: ServerResponse) => {
            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.end(JSON.stringify({ error: 'Method not allowed' }));
              return;
            }

            const apiKey = env.GROQ_API_KEY || env.VITE_GROQ_API_KEY;
            if (!apiKey) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'GROQ_API_KEY not found in .env' }));
              return;
            }

            // Read request body
            let body = '';
            req.on('data', (chunk: Buffer) => { body += chunk.toString(); });
            req.on('end', async () => {
              try {
                const { message, history } = JSON.parse(body);

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
                  { role: 'user', content: message },
                ];

                const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${apiKey}`,
                  },
                  body: JSON.stringify({
                    model: 'llama-3.3-70b-versatile',
                    messages,
                    temperature: 0.7,
                    max_tokens: 500,
                  }),
                });

                if (!groqRes.ok) {
                  const errText = await groqRes.text();
                  console.error('Groq API error:', groqRes.status, errText);
                  res.statusCode = 502;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: `Groq API error: ${groqRes.status}` }));
                  return;
                }

                const data = await groqRes.json();
                const reply = data.choices?.[0]?.message?.content || 'Xin lỗi, mình không thể trả lời lúc này.';

                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ reply }));
              } catch (err) {
                console.error('Local chat proxy error:', err);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Internal server error' }));
              }
            });
          });
        },
      },
    ],
  };
});
