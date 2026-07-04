import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { LazyImage } from '../ui/LazyImage';
import { RefreshCw, ShieldAlert, Smartphone } from 'lucide-react';

const fVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (idx: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: idx * 0.1,
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="relative py-28 bg-brand-coral overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="sr-only">Cách mạng hóa trải nghiệm dọn dẹp</h2>
          <svg viewBox="0 0 600 180" className="w-full max-w-xl mx-auto overflow-visible fill-white select-none mb-4">
            <path id="features-curve-1" d="M 20,75 Q 300,15 580,75" fill="none" />
            <path id="features-curve-2" d="M 20,145 Q 300,85 580,145" fill="none" />
            
            <text className="font-display font-black text-[56px]" textAnchor="middle">
              <textPath href="#features-curve-1" startOffset="50%">
                Cách mạng hóa
              </textPath>
            </text>
            <text className="font-display font-black text-[56px]" textAnchor="middle">
              <textPath href="#features-curve-2" startOffset="50%">
                <tspan fill="#ffc526">trải nghiệm</tspan> dọn dẹp
              </textPath>
            </text>
          </svg>
          <p className="text-white/90">
            Ứng dụng công nghệ lõi mang đến cuộc sống rảnh tay, sạch sẽ và an toàn.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Cell 1: Large Bento (Spans 2 columns) */}
          <motion.div
            custom={0}
            variants={fVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-2 flex"
          >
            <Card className="flex flex-col justify-between group h-full w-full bg-white text-brand-navy border-none p-8 rounded-[2rem] shadow-xl">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-brand-teal/5 border border-brand-teal/10">
                    <RefreshCw className="w-6 h-6 text-brand-teal" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy font-display">Lưới Lọc Cát Nam Châm Khử Mùi</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 max-w-xl">
                  Cơ chế xoay sàng lọc phân thông minh của Pura Max 2 được nâng cấp với <strong>tấm lưới lọc nam châm hít từ tính</strong> đột phá, cho phép tháo rời nhanh chóng trong 1 giây để chùi rửa định kỳ mà không sợ gãy chốt.
                </p>
              </div>
              <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden border-4 border-slate-100 bg-white">
                <LazyImage 
                  src="/Petkit/anh1.webp" 
                  alt="Tự động sàng lọc phân mèo" 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                  wrapperClassName="w-full h-full flex items-center justify-center"
                />
              </div>
            </Card>
          </motion.div>

          {/* Cell 2: Small Bento 1 */}
          <motion.div
            custom={1}
            variants={fVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-1 flex"
          >
            <Card className="flex flex-col justify-between group h-full w-full bg-white text-brand-navy border-none p-8 rounded-[2rem] shadow-xl">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-brand-teal/5 border border-brand-teal/10">
                    <ShieldAlert className="w-6 h-6 text-brand-teal" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy font-display">Khử Mùi 3 Lớp Chuyên Sâu</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Sự kết hợp hoàn hảo giữa thiết kế nắp hộp phân khép kín, miếng sáp khử mùi N50 triệt tiêu Amoniac và bộ xịt phun sương tinh dầu diệt khuẩn tự động Pura Air.
                </p>
              </div>
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border-4 border-slate-100 bg-white">
                <LazyImage 
                  src="/Petkit/anh2.webp" 
                  alt="Bình xịt khử mùi Pura Air" 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  wrapperClassName="w-full h-full flex items-center justify-center"
                />
              </div>
            </Card>
          </motion.div>

          {/* Cell 3: Small Bento 2 */}
          <motion.div
            custom={2}
            variants={fVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-1 flex"
          >
            <Card className="flex flex-col justify-between group h-full w-full bg-white text-brand-navy border-none p-8 rounded-[2rem] shadow-xl">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-brand-teal/5 border border-brand-teal/10">
                    <Smartphone className="w-6 h-6 text-brand-teal" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy font-display">Theo Dõi Qua App</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Ghi nhận dữ liệu cân nặng chuẩn xác của từng bé mèo, lịch trình đi vệ sinh chi tiết qua kết nối Wi-Fi/Bluetooth để sớm phát hiện các dấu hiệu bệnh tiết niệu.
                </p>
              </div>
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border-4 border-slate-100 bg-white">
                <LazyImage 
                  src="/Petkit/anh3.webp" 
                  alt="Theo dõi sức khỏe mèo qua app" 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  wrapperClassName="w-full h-full flex items-center justify-center"
                />
              </div>
            </Card>
          </motion.div>

          {/* Cell 4: Small Bento 3 (Wide card) */}
          <motion.div
            custom={3}
            variants={fVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-2 flex"
          >
            <Card className="flex flex-col justify-between group h-full w-full bg-white text-brand-navy border-none p-8 rounded-[2rem] shadow-xl">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-brand-teal/5 border border-brand-teal/10">
                    <RefreshCw className="w-6 h-6 text-brand-teal" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy font-display">Đế Khép Kín Chống Rò Rỉ Nước Tiểu</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Công nghệ chắn nước tiểu thông minh <strong>ShieldBase</strong> cùng lớp lót cao su chống trầy xước siêu bền bỉ giúp khoang máy luôn khô ráo. Hộp chứa chất thải 7L kín mùi đảm bảo lưu trữ tới 15 ngày cho 1 bé mèo.
                </p>
              </div>
              <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden border-4 border-slate-100 bg-white">
                <LazyImage 
                  src="/Petkit/anh6.webp" 
                  alt="Dung tích hộp chứa chất thải lớn" 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                  wrapperClassName="w-full h-full flex items-center justify-center"
                />
              </div>
            </Card>
          </motion.div>

        </div>

      </div>

      {/* SVG Wave Divider to Section 4 (Safety) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 translate-y-[1px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-brand-yellow">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  );
};
