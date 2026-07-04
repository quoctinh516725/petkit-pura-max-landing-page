import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Heart } from 'lucide-react';
import { LazyImage } from '../ui/LazyImage';

const sVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: (idx: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: idx * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

export const Social: React.FC = () => {
  const instagramPosts = [
    { image: "/src/assets/Petkit/anh9.webp", author: "@mimi_the_cat", likes: 231, caption: "Hoàng hoàng thượng mê tít cái nhà vệ sinh mới này rồi, sạch bong kin kít! #petkitpuramax #catsofinstagram" },
    { image: "/src/assets/Petkit/anh10.webp", author: "@bun_petstore", likes: 512, caption: "Đi làm cả ngày về phòng không còn tí mùi khai nào luôn, đáng đồng tiền bát gạo thực sự! #happypet #smarthome" },
    { image: "/src/assets/Petkit/anh11.webp", author: "@kiki_house", likes: 189, caption: "Cảm biến nhạy kinh khủng, cứ mèo tiến lại gần là tự động đứng im ngay lập tức, cực kỳ an tâm! #petkit" },
    { image: "/src/assets/Petkit/anh12.webp", author: "@pate_petshop", likes: 420, caption: "Nuôi 3 bé mèo dọn tay xỉu lên xỉu xuống, giờ có em này rảnh rang cả tuần chỉ việc xách túi rác đi vứt!" }
  ];

  return (
    <section className="relative py-28 bg-brand-teal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 relative">
          <h2 className="sr-only">Trải nghiệm thực tế</h2>
          <svg viewBox="0 0 600 100" className="w-full max-w-xl mx-auto overflow-visible fill-white select-none mb-4">
            <path id="social-curve" d="M 20,75 Q 300,20 580,75" fill="none" />
            <text className="font-display font-black text-[56px]" textAnchor="middle">
              <textPath href="#social-curve" startOffset="50%">
                Trải nghiệm thực tế
              </textPath>
            </text>
          </svg>
          <p className="text-white/90">
            Hàng ngàn gia đình nuôi mèo tại Việt Nam đã tin dùng để bảo vệ sức khỏe bé mèo và không gian sống.
          </p>

          {/* Yellow Handdrawn Style Arrow */}
          <div className="absolute -bottom-8 right-16 hidden lg:block pointer-events-none opacity-90">
            <svg width="100" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 30C30 10 70 10 90 25" stroke="#ffc526" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 4" />
              <path d="M78 22L90 25L84 13" stroke="#ffc526" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="absolute left-20 top-0 text-[10px] font-black text-brand-yellow uppercase tracking-widest font-mono rotate-12">
              Ảnh từ sen!
            </span>
          </div>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {instagramPosts.map((post, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={sVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="flex"
            >
              <Card className="bg-white text-brand-navy border-none p-5 rounded-[2rem] flex flex-col justify-between group shadow-lg w-full">
                
                {/* Polaroid Image */}
                <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4 border border-slate-100 bg-slate-50">
                  <LazyImage 
                    src={post.image} 
                    alt={post.author} 
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                    wrapperClassName="w-full h-full"
                  />
                </div>

                {/* Author & Likes */}
                <div className="flex items-center justify-between mb-3 px-1">
                  <span className="text-sm font-bold text-brand-teal font-sans">{post.author}</span>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-brand-coral stroke-none" />
                    {post.likes}
                  </span>
                </div>

                {/* Caption */}
                <p className="text-xs text-slate-600 leading-relaxed px-1">
                  {post.caption}
                </p>

              </Card>
            </motion.div>
          ))}
        </div>

      </div>

      {/* SVG Wave Divider to Section 7 (Form) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 translate-y-[1px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-brand-coral">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  );
};
