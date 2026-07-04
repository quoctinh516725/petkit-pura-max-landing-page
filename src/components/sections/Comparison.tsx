import React from 'react';
import { Card } from '../ui/Card';
import { Check, X, AlertTriangle, Sparkles } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <section id="comparison" className="relative py-28 bg-brand-dark overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="sr-only">Giải phóng đôi tay, Khỏi ám ảnh dọn dẹp</h2>
          <svg viewBox="0 0 600 180" className="w-full max-w-xl mx-auto overflow-visible fill-white select-none mb-4">
            <path id="comp-curve-1" d="M 20,75 Q 300,15 580,75" fill="none" />
            <path id="comp-curve-2" d="M 20,145 Q 300,85 580,145" fill="none" />
            
            <text className="font-display font-black text-[46px]" textAnchor="middle">
              <textPath href="#comp-curve-1" startOffset="50%">
                Giải phóng đôi tay
              </textPath>
            </text>
            <text className="font-display font-black text-[46px]" textAnchor="middle">
              <textPath href="#comp-curve-2" startOffset="50%">
                Khỏi <tspan fill="#ffc526">ám ảnh dọn dẹp</tspan>
              </textPath>
            </text>
          </svg>
          <p className="text-slate-300 text-sm md:text-base">
            Nhìn lại sự khác biệt một trời một vực giữa chậu cát thông thường và hệ thống tự động hóa.
          </p>
        </div>

        {/* Comparison Bento Grid (Asymmetric) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Traditional Sandbox (4 columns layout) */}
          <div className="lg:col-span-5 flex">
            <Card hoverEffect={false} className="bg-[#1b223c]/40 border border-red-550/10 relative overflow-hidden flex flex-col justify-between w-full p-8 rounded-[2rem]">
              <div>
                <h3 className="text-lg font-bold text-brand-coral flex items-center gap-2 mb-6 font-display">
                  <AlertTriangle className="w-5 h-5" />
                  Khay Cát Truyền Thống
                </h3>
                
                <ul className="space-y-4 text-xs md:text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <X className="w-4 h-4 text-brand-coral shrink-0 mt-0.5" />
                    <span>Ám ảnh mùi hôi amoniac quanh phòng kín.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X className="w-4 h-4 text-brand-coral shrink-0 mt-0.5" />
                    <span>Xúc cát thủ công bụi bặm, mất vệ sinh.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X className="w-4 h-4 text-brand-coral shrink-0 mt-0.5" />
                    <span>Cát văng tung tóe ra nền nhà mỗi ngày.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X className="w-4 h-4 text-brand-coral shrink-0 mt-0.5" />
                    <span>Lo lắng không yên khi phải đi công tác xa.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 w-full aspect-[16/10] rounded-xl overflow-hidden border border-slate-700/50 bg-slate-900/30">
                <img 
                  src="/src/assets/Petkit/khaycat.png" 
                  alt="Khay cát truyền thống bừa bộn" 
                  className="w-full h-full object-cover opacity-60 hover:opacity-90 transition-opacity duration-300"
                  loading="lazy"
                />
              </div>

              <div className="mt-6 border-t border-slate-700/30 pt-4 text-xs text-brand-coral/70 font-mono">
                → Đòi hỏi dọn tay liên tục hàng ngày
              </div>
            </Card>
          </div>

          {/* Petkit Pura Max 2 (7 columns layout - Hero item) */}
          <div className="lg:col-span-7 flex">
            <Card hoverEffect={true} className="bg-white text-brand-navy border-none relative overflow-hidden flex flex-col justify-between w-full shadow-2xl p-8 rounded-[2rem]">
              
              <div className="flex flex-col md:flex-row gap-6 items-center h-full">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-teal flex items-center gap-2.5 mb-6 font-display">
                    <Sparkles className="w-5 h-5 text-brand-yellow fill-brand-yellow" />
                    Máy Vệ Sinh Petkit Pura Max 2
                  </h3>
                  
                  <ul className="space-y-5 text-xs md:text-sm text-brand-navy">
                    <li className="flex items-start gap-3">
                      <div className="w-4.5 h-4.5 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span><strong>Chống rò rỉ nước tiểu (ShieldBase):</strong> Cấu trúc lồng chắn khép kín liền mạch ngăn 100% tình trạng rò rỉ nước tiểu ra ngoài khe máy.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-4.5 h-4.5 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span><strong>Lưới lọc nam châm từ tính:</strong> Khớp nối nam châm đột phá giúp tháo dỡ lưới lọc cực kỳ nhanh gọn để làm sạch định kỳ.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-4.5 h-4.5 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span><strong>Đáy lồng cao su chống cào xước:</strong> Chất liệu siêu bền, chống bám dính tốt hơn, ngăn mèo cào rách làm thấm ngược nước tiểu.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-4.5 h-4.5 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span><strong>Hộp chứa 7L &amp; Khử mùi 3 lớp:</strong> Lưu trữ đến 15 ngày, triệt tiêu khí Amoniac bằng nắp kín, sáp N50 và xịt Pura Air.</span>
                    </li>
                  </ul>
                </div>

                <div className="w-full md:w-[220px] shrink-0 aspect-square rounded-2xl bg-brand-teal/5 border border-brand-teal/10 flex items-center justify-center p-4 relative overflow-hidden">
                  <img 
                    src="/src/assets/Petkit/hero-cat.png" 
                    alt="Petkit Pura Max 2" 
                    className="w-full h-auto max-h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,163,150,0.15)] hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="mt-8 border-t border-slate-100 pt-4 text-xs text-brand-teal font-mono w-full">
                ✓ Phiên bản nâng cấp tối tân - Giải pháp vô lo cho Sen và Hoàng Thượng
              </div>
            </Card>
          </div>

        </div>
      </div>

      {/* SVG Wave Divider to Section 3 (Features) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 translate-y-[1px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-brand-coral">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,28.35,95.38,62.83,165,71.2C217.79,77.53,268.3,66.28,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};
