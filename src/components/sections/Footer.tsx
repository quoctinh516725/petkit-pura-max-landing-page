import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <div className="text-2xl font-black tracking-tight text-white font-display">
            PETKIT
          </div>
          <p className="text-sm text-white/70 leading-relaxed max-w-xs">
            Hệ sinh thái thiết bị thông minh chăm sóc thú cưng hàng đầu thế giới. Mang cuộc sống tiện nghi, sạch sẽ đến gia đình bạn.
          </p>
        </div>

        {/* Links Column */}
        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider font-display">Sản phẩm</h4>
          <ul className="flex flex-col gap-2.5 text-sm text-white/70">
            <li><a href="#features" className="hover:text-brand-yellow transition">Petkit Pura Max</a></li>
            <li><a href="#specs" className="hover:text-brand-yellow transition">Phụ kiện chính hãng</a></li>
            <li><a href="#safety" className="hover:text-brand-yellow transition">Hệ thống xSecure</a></li>
          </ul>
        </div>

        {/* Support Column */}
        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider font-display">Hỗ trợ</h4>
          <ul className="flex flex-col gap-2.5 text-sm text-white/70">
            <li><a href="#" className="hover:text-brand-yellow transition">Hướng dẫn sử dụng</a></li>
            <li><a href="#" className="hover:text-brand-yellow transition">Chính sách bảo hành</a></li>
            <li><a href="#" className="hover:text-brand-yellow transition">Câu hỏi thường gặp (FAQ)</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider font-display">Liên hệ</h4>
          <ul className="flex flex-col gap-2.5 text-sm text-white/70">
            <li>Hotline: 1900 8888</li>
            <li>Email: support@petkit.vn</li>
            <li>Showroom: TP. Hồ Chí Minh & Hà Nội</li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50">
        <span>© 2026 Petkit Việt Nam. Bản quyền được bảo lưu.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:underline hover:text-brand-yellow">Điều khoản dịch vụ</a>
          <a href="#" className="hover:underline hover:text-brand-yellow">Chính sách bảo mật</a>
        </div>
      </div>
    </footer>
  );
};
