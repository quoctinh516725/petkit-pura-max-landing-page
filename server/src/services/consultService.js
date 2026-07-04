import consultRepository from '../repositories/consultRepository.js';

class ConsultService {
  async registerConsult(data) {
    if (!data.name || !data.phone || !data.catsCount) {
      throw new Error('Thiếu thông tin đăng ký bắt buộc.');
    }
    // Logic nghiệp vụ bổ sung (ví dụ: Chuẩn hóa định dạng SĐT)
    const normalizedPhone = data.phone.trim();
    
    return consultRepository.create({
      name: data.name.trim(),
      phone: normalizedPhone,
      catsCount: data.catsCount,
      cartItems: data.cartItems
    });
  }

  async getAllConsultations() {
    return consultRepository.findAll();
  }
}

export default new ConsultService();
