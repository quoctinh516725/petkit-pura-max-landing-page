import React from 'react';
import { Card } from '../ui/Card';

export const Specs: React.FC = () => {
  const specItems = [
    { label: "Dòng sản phẩm (Model)", value: "Pura Max 2 (Model P9902)" },
    { label: "Kích thước thiết bị", value: "620 x 538 x 552 mm" },
    { label: "Dung tích lồng xoay", value: "76 Lít (Phù hợp nhà nhiều mèo)" },
    { label: "Khay chứa chất thải", value: "7 Lít (Khép kín khử mùi, lưu trữ đến 15 ngày)" },
    { label: "Chiều cao lối vào", value: "20 cm (Thân thiện mèo chân ngắn, mèo già)" },
    { label: "Kết nối thông minh", value: "Wi-Fi 2.4GHz + Bluetooth" },
    { label: "Loại cát tương thích", value: "Cát đất sét, cát đậu nành, cát hỗn hợp hữu cơ" }
  ];

  return (
    <section id="specs" className="relative py-28 bg-brand-navy overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="sr-only">Thông Số Kỹ Thuật</h2>
          <svg viewBox="0 0 600 100" className="w-full max-w-xl mx-auto overflow-visible fill-white select-none mb-4">
            <path id="specs-curve" d="M 20,75 Q 300,20 580,75" fill="none" />
            <text className="font-display font-black text-[56px]" textAnchor="middle">
              <textPath href="#specs-curve" startOffset="50%">
                Thông Số Kỹ Thuật
              </textPath>
            </text>
          </svg>
          <p className="text-white/80">
            Thông tin chi tiết về kích thước và khả năng hoạt động của Petkit Pura Max 2.
          </p>
        </div>

        {/* Specs Bento (Asymmetric Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
          
          {/* Left: Product Image (5 columns) */}
          <div className="lg:col-span-5 flex justify-center">
            <Card hoverEffect={true} className="w-full max-w-[340px] aspect-square rounded-[3rem] p-0 border-8 border-white bg-white overflow-hidden shadow-2xl">
              <img 
                src="/src/assets/Petkit/anh5.webp" 
                alt="Petkit Pura Max 2 Technical Specs" 
                className="w-full h-full object-cover hover:scale-103 transition-transform duration-700"
                loading="lazy"
              />
            </Card>
          </div>

          {/* Right: Specs Table (7 columns) */}
          <div className="lg:col-span-7">
            <Card hoverEffect={false} className="bg-white text-brand-navy border-none p-6 sm:p-8 rounded-[2rem] shadow-xl">
              <table className="w-full text-xs sm:text-sm text-left text-brand-navy">
                <tbody>
                  {specItems.map((item, idx) => (
                    <tr 
                      key={idx} 
                      className={`border-b border-slate-100 ${idx === specItems.length - 1 ? 'border-b-0' : ''}`}
                    >
                      <td className="py-4 pr-4 font-bold text-brand-navy w-1/2 font-display">{item.label}</td>
                      <td className="py-4 text-slate-600 w-1/2">{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </div>

        </div>

      </div>

      {/* SVG Wave Divider to Section 6 (ProductShop - brand-dark) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 translate-y-[1px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-brand-dark">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  );
};
