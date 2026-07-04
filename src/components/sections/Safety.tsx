import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Scale, AlertTriangle } from 'lucide-react';
import { LazyImage } from '../ui/LazyImage';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' },
  }),
};

export const Safety: React.FC = () => {
  const sensors = [
    {
      icon: <Eye className="w-5 h-5 text-brand-teal" />,
      name: "Hồng Ngoại & Cảm Biến Nhiệt",
      desc: "Phát hiện bức xạ nhiệt cơ thể mèo cưng khi tiến gần cửa máy để tạm dừng quay ngay lập tức."
    },
    {
      icon: <Scale className="w-5 h-5 text-brand-teal" />,
      name: "Trọng Lượng Đa Mèo",
      desc: "Nhận biết chính xác mèo từ 1.5kg bước vào lồng quay và đồng bộ cân nặng riêng cho từng bé."
    },
    {
      icon: <Shield className="w-5 h-5 text-brand-teal" />,
      name: "Cảm Biến Chống Kẹt Lồng",
      desc: "Dừng quay khẩn cấp khi phát hiện bất kỳ lực cản cơ học nào ở rìa cửa lồng để bảo vệ chân bé."
    },
    {
      icon: <AlertTriangle className="w-5 h-5 text-brand-teal" />,
      name: "Báo Động Wifi Thời Gian Thực",
      desc: "Gửi cảnh báo tức thì về App PETKIT trên điện thoại kèm nhật ký hoạt động chi tiết mỗi giây."
    }
  ];

  return (
    <section id="safety" className="relative py-28 bg-brand-yellow overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Sensor Details (7 Columns) */}
          <div className="lg:col-span-7 text-left text-brand-navy">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-navy/20 bg-brand-navy/5 text-brand-navy text-xs font-black tracking-widest uppercase mb-6 backdrop-blur-sm">
              <Shield className="w-3.5 h-3.5" />
              <span>Bảo vệ xSecure 3 Lớp</span>
            </div>
            
            <h2 className="sr-only">Hệ thống 12 cảm biến, An toàn tuyệt đối</h2>
            <svg viewBox="0 0 600 180" className="w-full max-w-xl overflow-visible fill-brand-navy select-none mb-4 -ml-2">
              <path id="safety-curve-1" d="M 20,75 Q 300,15 580,75" fill="none" />
              <path id="safety-curve-2" d="M 20,145 Q 300,85 580,145" fill="none" />
              
              <text className="font-display font-black text-[56px]" textAnchor="middle">
                <textPath href="#safety-curve-1" startOffset="50%">
                  Hệ thống 12 cảm biến
                </textPath>
              </text>
              <text className="font-display font-black text-[56px]" textAnchor="middle">
                <textPath href="#safety-curve-2" startOffset="50%">
                  <tspan fill="#32889c">An toàn tuyệt đối</tspan>
                </textPath>
              </text>
            </svg>
            
            <p className="text-brand-navy/80 text-sm md:text-base mb-10 max-w-xl leading-relaxed">
              Giải quyết hoàn toàn nỗi sợ lớn nhất của người nuôi mèo về các dòng máy dọn vệ sinh tự động giá rẻ gây kẹt mèo. Hệ thống xSecure bảo vệ mèo cưng 24/7.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {sensors.map((sensor, idx) => (
                <motion.div
                  key={idx}
                  custom={idx}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  className="flex gap-4 p-5 rounded-2xl bg-white text-brand-navy border-none shadow-md"
                >
                  <div className="shrink-0 p-2.5 rounded-xl bg-brand-teal/5 border border-brand-teal/15 h-11 w-11 flex items-center justify-center">
                    {sensor.icon}
                  </div>
                  <div>
                    <h4 className="text-brand-navy font-bold text-sm mb-1.5 font-display">{sensor.name}</h4>
                    <p className="text-xs text-slate-650 leading-relaxed">{sensor.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Technical Image (5 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-[380px] aspect-[4/5] rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl bg-white"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              <LazyImage 
                src="/Petkit/anh4.webp" 
                alt="Hệ thống cảm biến an toàn Petkit Pura Max 2" 
                className="w-full h-full object-cover hover:scale-103 transition-transform duration-700"
                wrapperClassName="w-full h-full absolute inset-0"
              />
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <span className="text-xs font-mono text-brand-yellow uppercase tracking-widest block mb-1">Công nghệ xSecure</span>
                <span className="text-lg font-bold text-white font-display">Tự động dừng khi mèo lại gần cửa lồng 30cm</span>
              </div>
            </motion.div>
          </motion.div>

        </div>

      </div>

      {/* SVG Wave Divider to Section 5 (Specs) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 translate-y-[1px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-brand-navy">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,28.35,95.38,62.83,165,71.2C217.79,77.53,268.3,66.28,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};
