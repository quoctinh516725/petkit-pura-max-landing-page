import React from 'react';
import { Check, X, Sparkles } from 'lucide-react';
import { Card } from '../ui/Card';
import { LazyImage } from '../ui/LazyImage';

export const Comparison: React.FC = () => {
  return (
    <section className="relative py-28 bg-brand-navy overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="sr-only">Tại Sao Nên Chọn Petkit Pura Max 2?</h2>
          <svg viewBox="0 0 600 100" className="w-full max-w-xl mx-auto overflow-visible fill-white select-none mb-4">
            <path id="comparison-curve" d="M 20,75 Q 300,20 580,75" fill="none" />
            <text className="font-display font-black text-[56px]" textAnchor="middle">
              <textPath href="#comparison-curve" startOffset="50%">
                Tại Sao Nên Chọn Pura Max 2?
              </textPath>
            </text>
          </svg>
          <p className="text-white/80">
            Sự khác biệt vượt trội giúp giải quyết hoàn toàn mọi bất tiện của phương pháp dọn vệ sinh truyền thống.
          </p>
        </div>

        {/* Comparison grid (Asymmetric 5-7 layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-stretch">
          
          {/* Traditional Litter Box (5 columns layout) */}
          <div className="lg:col-span-5 flex">
            <Card hoverEffect={false} className="bg-slate-900/40 text-slate-300 border border-slate-800/80 flex flex-col justify-between w-full p-8 rounded-[2rem]">
              <div>
                <h3 className="text-xl font-bold text-slate-400 flex items-center gap-2 mb-6 font-display">
                  <X className="w-5 h-5 text-brand-coral" />
                  Khay Cát Truyền Thống
                </h3>
                
                <ul className="space-y-4 text-xs md:text-sm">
                  <li className="flex items-start gap-2.5">
                    <X className="w-4 h-4 text-brand-coral shrink-0 mt-0.5" />
                    <span>Mùi hôi khai amoniac ám ảnh phòng kín 24/7.</span>
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
                <LazyImage 
                  src="/src/assets/Petkit/khaycat.webp" 
                  alt="Khay cát truyền thống bừa bộn" 
                  className="w-full h-full object-cover opacity-60 hover:opacity-90 transition-opacity duration-300"
                  wrapperClassName="w-full h-full"
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
                  <LazyImage 
                    src="/src/assets/Petkit/hero-cat.webp" 
                    alt="Petkit Pura Max 2" 
                    className="w-full h-auto max-h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,163,150,0.15)] hover:scale-105 transition-transform duration-500"
                    wrapperClassName="w-full h-full flex items-center justify-center"
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
