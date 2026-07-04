import prisma from '../config/database.js';

class ConsultRepository {
  async create(consultData) {
    return prisma.consultation.create({
      data: {
        name: consultData.name,
        phone: consultData.phone,
        catsCount: consultData.catsCount,
        cartItems: consultData.cartItems || [],
      },
    });
  }

  async findAll() {
    return prisma.consultation.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}

export default new ConsultRepository();
