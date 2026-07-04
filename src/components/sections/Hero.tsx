import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-36 pb-32 bg-brand-teal overflow-hidden">
      
      {/* Ambient template shapes/decorations */}
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-brand-yellow/10 blur-xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-24 h-24 rounded-full bg-brand-coral/20 blur-xl pointer-events-none" />

      {/* Decorative Cat Banners floating on both sides */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute left-0 bottom-0 w-24 sm:w-36 md:w-48 lg:w-56 z-20 pointer-events-none select-none"
      >
        <img src="/src/assets/Petkit/cat-banner-1.png" alt="Cat Banner Left" className="w-full h-auto" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute right-0 top-20 w-24 sm:w-36 md:w-48 lg:w-56 z-20 pointer-events-none select-none"
      >
        <img src="/src/assets/Petkit/cat-banner-2.png" alt="Cat Banner Right" className="w-full h-auto" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left Side Content */}
        <div className="lg:col-span-7 flex flex-col items-center text-center">
          
          {/* Badge */}
         

          {/* Headline - Serif Playfair Display font curved with SVG */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full mb-4 max-w-xl md:max-w-2xl mx-auto flex justify-center"
          >
            <h1 className="sr-only">Nhà sạch mèo thơm, Bát sạch Ngon Cơm</h1>
            <svg viewBox="0 0 600 200" className="w-full overflow-visible fill-white select-none">
              <path id="curve-line-1" d="M 20,90 Q 300,30 580,90" fill="none" />
              <path id="curve-line-2" d="M 20,165 Q 300,105 580,165" fill="none" />
              
              <text className="font-display font-black text-[54px]" textAnchor="middle">
                <textPath href="#curve-line-1" startOffset="50%">
                  Nhà sạch mèo thơm
                </textPath>
              </text>
              
              <text className="font-display font-black text-[54px]" textAnchor="middle">
                <textPath href="#curve-line-2" startOffset="50%">
                  Bát sạch <tspan fill="#ffc526">Ngon Cơm</tspan>
                </textPath>
              </text>
            </svg>
          </motion.div>
 
          {/* Subtext with highlight accents */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-white/80 mb-6 max-w-xl leading-relaxed font-sans text-center mx-auto"
          >
            Giải phóng <span className="font-black text-brand-yellow">100% sức lao động</span> với <span className="font-black text-white">Petkit Pura Max</span>. Hệ thống tự động lọc phân thông minh, xịt khử mùi chủ động Pura Air và bảo vệ mèo cưng tuyệt đối với <span className="font-black text-white">12 cảm biến an toàn</span>.
          </motion.p>
 
          {/* Actions with SVG path animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex flex-col sm:flex-row gap-6 items-center justify-center w-full"
          >
            <div className="relative group">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => {
                  const el = document.getElementById('consult-form');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="gap-2"
              >
                <span>Trải Nghiệm Ngay</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              {/* Dynamic Draw-in SVG Arrow in Brand Yellow */}
              <div className="absolute -bottom-16 left-6 hidden sm:block pointer-events-none">
                <svg width="100" height="50" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    d="M10 10C25 35 50 40 85 20" 
                    stroke="#ffc526" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeDasharray="4 4" 
                  />
                  <motion.path 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                    d="M72 18L85 20L80 32" 
                    stroke="#ffc526" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                </svg>
                <span className="absolute left-20 top-6 text-[10px] font-black text-brand-yellow uppercase tracking-widest font-mono rotate-12">
                  Ưu đãi lớn
                </span>
              </div>
            </div>
            
            <Button 
              variant="accent" 
              size="lg"
              onClick={() => {
                const el = document.getElementById('features');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Xem Tính Năng
            </Button>
          </motion.div>
        </div>

        {/* Right Side Content - Floating Overlapping Product Image */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[450px] aspect-square flex items-center justify-center"
          >
            <img 
              src="/src/assets/Petkit/hero-cat.png" 
              alt="Petkit Pura Max Smart Cat Litter Box" 
              className="w-full h-auto max-h-full object-contain relative z-10 hover:scale-103 transition-transform duration-700 filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
              fetchPriority="high"
            />
          </motion.div>
        </div>

      </div>

      {/* Fluid Organic Wave Divider to Section 2 (Deep Indigo / Dark Slate) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 translate-y-[1px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[64px] fill-brand-dark">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  );
};
