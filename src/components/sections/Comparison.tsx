import React from 'react';
import { Card } from '../ui/Card';
import { Check, X, AlertTriangle, Sparkles } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <section id="comparison" className="relative py-28 bg-brand-dark overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4 font-display">
            Giải phóng đôi tay <br />
            Khỏi <span className="text-brand-yellow underline decoration-brand-coral decoration-wavy decoration-3 underline-offset-8">ám ảnh dọn dẹp</span>
          </h2>
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
              <div className="mt-8 border-t border-slate-700/30 pt-4 text-xs text-brand-coral/70 font-mono">
                → Đòi hỏi dọn tay liên tục hàng ngày
              </div>
            </Card>
          </div>

          {/* Petkit Pura Max (7 columns layout - Hero item) */}
          <div className="lg:col-span-7 flex">
            <Card hoverEffect={true} className="bg-white text-brand-navy border-none relative overflow-hidden flex flex-col justify-between w-full shadow-2xl p-8 rounded-[2rem]">
              
              <div>
                <h3 className="text-xl font-bold text-brand-teal flex items-center gap-2.5 mb-6 font-display">
                  <Sparkles className="w-5 h-5 text-brand-yellow fill-brand-yellow" />
                  Máy Vệ Sinh Petkit Pura Max
                </h3>
                
                <ul className="space-y-5 text-xs md:text-sm text-brand-navy">
                  <li className="flex items-start gap-3">
                    <div className="w-4.5 h-4.5 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>**Khử mùi Pura Air:** Phun sương tinh dầu thơm dập mùi lập tức ngay sau khi mèo dùng xong.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-4.5 h-4.5 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>**Dọn dẹp tự động:** Lồng quay thông minh gom chất thải vào hộp kín chỉ sau 3 phút.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-4.5 h-4.5 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>**Thảm bẫy cát đặc biệt:** Giữ lại 99% lượng cát vương từ chân mèo ra sàn.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-4.5 h-4.5 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>**Dung tích hộp rác 7L:** Yên tâm đi công tác/du lịch dài ngày lên tới 15 ngày.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 border-t border-slate-100 pt-4 text-xs text-brand-teal font-mono">
                ✓ Tiện lợi - Vô lo - Nâng tầm cuộc sống
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
