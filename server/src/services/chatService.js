class ChatService {
  async getChatReply(message, history) {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      throw new Error('GROQ_API_KEY chưa được cấu hình trên server.');
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
      throw new Error('Lỗi phản hồi từ dịch vụ AI.');
    }

    const data = await groqRes.json();
    return data.choices?.[0]?.message?.content || 'Xin lỗi, mình không thể trả lời lúc này.';
  }
}

export default new ChatService();
