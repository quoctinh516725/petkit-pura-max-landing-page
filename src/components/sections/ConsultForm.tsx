import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Toast } from '../ui/Toast';
import { Sparkles, Send, Check, Loader2 } from 'lucide-react';

import { useAppSelector } from '../../store/hooks';

const PHONE_REGEX = /^(0[35789])[0-9]{8}$/;

interface FormErrors {
  name?: string;
  phone?: string;
}

export const ConsultForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [catsCount, setCatsCount] = useState('1');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const cartItems = useAppSelector((state) => state.cart.items);

  // Toast state
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVariant, setToastVariant] = useState<'success' | 'error' | 'info'>('success');

  const showToast = (message: string, variant: 'success' | 'error' | 'info') => {
    setToastMessage(message);
    setToastVariant(variant);
    setToastVisible(true);
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!name.trim() || name.trim().length < 2) {
      newErrors.name = 'Vui lòng nhập họ tên (tối thiểu 2 ký tự)';
    }

    if (!phone.trim()) {
      newErrors.phone = 'Vui lòng nhập số điện thoại';
    } else if (!PHONE_REGEX.test(phone.trim())) {
      newErrors.phone = 'Số điện thoại không hợp lệ (VD: 0901234567)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || '';
      const response = await fetch(`${apiUrl}/api/consult`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          catsCount,
          cartItems,
        }),
      });

      if (!response.ok) {
        throw new Error('Gửi yêu cầu thất bại');
      }

      setSubmitted(true);
      showToast(
        'Đăng ký thành công! Đội ngũ CSKH sẽ liên hệ bạn trong 15 phút.',
        'success'
      );
    } catch (err) {
      console.error(err);
      showToast('Có lỗi xảy ra khi lưu đăng ký tư vấn. Vui lòng thử lại sau.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  // Clear individual error on input change
  const handleNameChange = (value: string) => {
    setName(value);
    if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
  };

  const handlePhoneChange = (value: string) => {
    setPhone(value);
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
  };

  return (
    <section id="consult-form" className="relative py-28 bg-brand-coral overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="max-w-xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-white text-xs font-black uppercase mb-6 tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-brand-yellow" />
            <span>Ưu Đãi Độc Quyền Tháng Này</span>
          </div>

          <h2 className="sr-only">Đăng Ký Tư Vấn Ngay</h2>
          <svg viewBox="0 0 600 100" className="w-full max-w-xl mx-auto overflow-visible fill-white select-none mb-4">
            <path id="consult-curve" d="M 20,75 Q 300,20 580,75" fill="none" />
            <text className="font-display font-black text-[56px]" textAnchor="middle">
              <textPath href="#consult-curve" startOffset="50%">
                Đăng Ký Tư Vấn Ngay
              </textPath>
            </text>
          </svg>
          
          <p className="text-white/90 mb-12 max-w-md mx-auto text-sm md:text-base leading-relaxed">
            Nhận ngay Voucher giảm giá <span className="font-black text-brand-yellow">500.000đ</span>, quà tặng thảm bẫy cát chính hãng và đặc quyền bảo hành vàng <span className="font-black text-white">24 tháng</span> khi sở hữu Petkit Pura Max 2 hôm nay.
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
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Name Field */}
                <div>
                  <label htmlFor="form-name" className="block text-xs font-black text-brand-navy/60 uppercase tracking-widest mb-2 font-mono">Họ và tên của bạn</label>
                  <input
                    type="text"
                    id="form-name"
                    value={name}
                    onChange={(e) => handleNameChange(e.target.value)}
                    placeholder="Nguyễn Văn A"
                    className={`w-full px-4 py-3.5 rounded-2xl bg-slate-50 border text-brand-navy text-sm focus:outline-none transition duration-300 placeholder:text-slate-400 font-sans ${
                      errors.name ? 'border-red-400 focus:border-red-500' : 'border-slate-100 focus:border-brand-teal/40'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1.5 pl-1 font-sans">{errors.name}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="form-phone" className="block text-xs font-black text-brand-navy/60 uppercase tracking-widest mb-2 font-mono">Số điện thoại liên hệ</label>
                  <input
                    type="tel"
                    id="form-phone"
                    value={phone}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    placeholder="0901234567"
                    className={`w-full px-4 py-3.5 rounded-2xl bg-slate-50 border text-brand-navy text-sm focus:outline-none transition duration-300 placeholder:text-slate-400 font-sans ${
                      errors.phone ? 'border-red-400 focus:border-red-500' : 'border-slate-100 focus:border-brand-teal/40'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1.5 pl-1 font-sans">{errors.phone}</p>
                  )}
                </div>

                {/* Cats Count */}
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

                {/* Submit Button */}
                <div className="relative pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full justify-center gap-2"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Đang gửi...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Đăng Ký Nhận Voucher</span>
                      </>
                    )}
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

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        variant={toastVariant}
        isVisible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </section>
  );
};
