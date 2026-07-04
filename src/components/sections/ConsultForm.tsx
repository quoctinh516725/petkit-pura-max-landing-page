import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Sparkles, Send, Check } from 'lucide-react';

export const ConsultForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [catsCount, setCatsCount] = useState('1');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    
    // Simulate webhook post
    console.log({ name, phone, catsCount });
    setSubmitted(true);
  };

  return (
    <section id="consult-form" className="relative py-28 bg-brand-coral overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="max-w-xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-white text-xs font-black uppercase mb-6 tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-brand-yellow" />
            <span>Ưu Đãi Độc Quyền Tháng Này</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4 font-display">
            Đăng Ký Tư Vấn Ngay
          </h2>
          
          <p className="text-white/95 mb-12 max-w-md mx-auto text-sm leading-relaxed">
            Nhận ngay Voucher giảm giá **500.000đ** kèm quà tặng thảm bẫy cát chính hãng khi mua Petkit Pura Max hôm nay.
          </p>

          <Card hoverEffect={false} className="bg-white text-brand-navy border-none p-8 text-left relative max-w-lg mx-auto rounded-[2rem] shadow-2xl">
            
            {submitted ? (
              <div className="py-8 text-center flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-brand-teal/10 border border-brand-teal/20 flex items-center justify-center text-brand-teal">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy font-display">Đăng Ký Thành Công!</h3>
                <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
                  Đội ngũ CSKH Petkit Việt Nam sẽ liên hệ lại với bạn trong vòng 15 phút để tư vấn và áp dụng voucher.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="form-name" className="block text-xs font-black text-brand-navy/60 uppercase tracking-widest mb-2 font-mono">Họ và tên của bạn</label>
                  <input
                    type="text"
                    id="form-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Nguyễn Văn A"
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-brand-navy text-sm focus:outline-none focus:border-brand-teal/40 transition duration-300 placeholder:text-slate-400 font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="form-phone" className="block text-xs font-black text-brand-navy/60 uppercase tracking-widest mb-2 font-mono">Số điện thoại liên hệ</label>
                  <input
                    type="tel"
                    id="form-phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder="0901234567"
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-brand-navy text-sm focus:outline-none focus:border-brand-teal/40 transition duration-300 placeholder:text-slate-400 font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="form-cats" className="block text-xs font-black text-brand-navy/60 uppercase tracking-widest mb-2 font-mono">Số lượng bé mèo nuôi</label>
                  <select
                    id="form-cats"
                    value={catsCount}
                    onChange={(e) => setCatsCount(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-brand-navy text-sm focus:outline-none focus:border-brand-teal/40 transition duration-300 font-sans"
                  >
                    <option value="1">1 Bé Mèo</option>
                    <option value="2">2 Bé Mèo</option>
                    <option value="3+">3 Bé Mèo trở lên</option>
                  </select>
                </div>

                <div className="relative pt-2">
                  <Button type="submit" variant="primary" className="w-full justify-center gap-2">
                    <Send className="w-4 h-4" />
                    <span>Đăng Ký Nhận Voucher</span>
                  </Button>
                  
                  {/* Decorative Handdrawn Style Arrow in Yellow */}
                  <div className="absolute -left-12 -bottom-16 hidden sm:block pointer-events-none opacity-80">
                    <svg width="80" height="50" viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 10C20 30 50 35 70 20" stroke="#ffc526" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 4" />
                      <path d="M58 21L70 20L63 32" stroke="#ffc526" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </form>
            )}

          </Card>
        </div>

      </div>
    </section>
  );
};
