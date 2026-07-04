import React from 'react';
import { Card } from '../ui/Card';
import { RefreshCw, ShieldAlert, Smartphone } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="relative py-28 bg-brand-coral overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4 font-display">
            Cách mạng hóa <span className="text-brand-yellow">trải nghiệm</span> dọn dẹp
          </h2>
          <p className="text-white/90">
            Ứng dụng công nghệ lõi mang đến cuộc sống rảnh tay, sạch sẽ và an toàn.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Cell 1: Large Bento (Spans 2 columns) */}
          <Card className="lg:col-span-2 flex flex-col justify-between group h-full bg-white text-brand-navy border-none p-8 rounded-[2rem] shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-brand-teal/5 border border-brand-teal/10">
                  <RefreshCw className="w-6 h-6 text-brand-teal" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy font-display">Tự Động Sàng Lọc Phân</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 max-w-xl">
                Cảm biến trọng lượng phát hiện mèo rời đi, máy sẽ tự động quay lồng sàng lọc phân vón cục vào hộp rác kín mùi, giữ lại phần cát sạch hoàn toàn.
              </p>
            </div>
            <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden border-4 border-slate-100 bg-white">
              <img 
                src="/src/assets/Petkit/anh1.webp" 
                alt="Tự động sàng lọc phân mèo" 
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </Card>

          {/* Cell 2: Small Bento 1 */}
          <Card className="lg:col-span-1 flex flex-col justify-between group h-full bg-white text-brand-navy border-none p-8 rounded-[2rem] shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-brand-teal/5 border border-brand-teal/10">
                  <ShieldAlert className="w-6 h-6 text-brand-teal" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy font-display">Khử Mùi Chủ Động</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Xịt khử mùi thông minh tự động phun sương tinh dầu thơm khử sạch 99% mùi amoniac.
              </p>
            </div>
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border-4 border-slate-100 bg-white">
              <img 
                src="/src/assets/Petkit/anh2.webp" 
                alt="Bình xịt khử mùi Pura Air" 
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </Card>

          {/* Cell 3: Small Bento 2 */}
          <Card className="lg:col-span-1 flex flex-col justify-between group h-full bg-white text-brand-navy border-none p-8 rounded-[2rem] shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-brand-teal/5 border border-brand-teal/10">
                  <Smartphone className="w-6 h-6 text-brand-teal" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy font-display">Theo Dõi Qua App</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Nhận dữ liệu cân nặng và lịch trình đi vệ sinh chi tiết của mèo cưng trên app để phát hiện bất thường sức khỏe.
              </p>
            </div>
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border-4 border-slate-100 bg-white">
              <img 
                src="/src/assets/Petkit/anh3.webp" 
                alt="Theo dõi sức khỏe mèo qua app" 
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </Card>

          {/* Cell 4: Small Bento 3 (Wide card) */}
          <Card className="lg:col-span-2 flex flex-col justify-between group h-full bg-white text-brand-navy border-none p-8 rounded-[2rem] shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-brand-teal/5 border border-brand-teal/10">
                  <RefreshCw className="w-6 h-6 text-brand-teal" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy font-display">Hộp Rác Lớn 7L</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Hộp gom phân lớn 7L kín khí, lưu trữ chất thải lên tới 15 ngày cho một bé mèo, giúp chuyến công tác dài ngày của bạn trở nên thảnh thơi.
              </p>
            </div>
            <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden border-4 border-slate-100 bg-white">
              <img 
                src="/src/assets/Petkit/anh6.webp" 
                alt="Dung tích hộp chứa chất thải lớn" 
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </Card>

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
