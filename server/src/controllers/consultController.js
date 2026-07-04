import consultService from '../services/consultService.js';

class ConsultController {
  async create(req, res) {
    try {
      const { name, phone, catsCount, cartItems } = req.body;
      const newConsult = await consultService.registerConsult({ name, phone, catsCount, cartItems });
      return res.status(201).json({ message: 'Đăng ký tư vấn thành công!', data: newConsult });
    } catch (err) {
      console.error('Error in consult controller:', err);
      return res.status(400).json({ error: err.message || 'Lỗi xử lý yêu cầu đăng ký.' });
    }
  }

  async getAll(req, res) {
    try {
      const list = await consultService.getAllConsultations();
      return res.status(200).json(list);
    } catch (err) {
      console.error('Error in consult controller (getAll):', err);
      return res.status(500).json({ error: 'Lỗi máy chủ khi lấy dữ liệu.' });
    }
  }
}

export default new ConsultController();
