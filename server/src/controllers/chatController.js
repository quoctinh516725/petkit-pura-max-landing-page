import chatService from '../services/chatService.js';

class ChatController {
  async handleMessage(req, res) {
    try {
      const { message, history } = req.body;
      if (!message) {
        return res.status(400).json({ error: 'Tin nhắn không được để trống.' });
      }
      
      const reply = await chatService.getChatReply(message, history);
      return res.status(200).json({ reply });
    } catch (err) {
      console.error('Error in chat controller:', err);
      return res.status(500).json({ error: err.message || 'Lỗi xử lý yêu cầu AI Chatbot.' });
    }
  }
}

export default new ChatController();
