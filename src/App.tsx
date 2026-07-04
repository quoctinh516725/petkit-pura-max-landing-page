import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Sparkles, RefreshCw } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Helmet>
        <title>Petkit Pura Max - Máy Dọn Vệ Sinh Mèo Thông Minh Tự Động</title>
        <meta name="description" content="Trang Landing Page giới thiệu máy dọn vệ sinh mèo tự động Petkit Pura Max thế hệ mới, tích hợp cảm biến an toàn và xịt khử mùi chủ động." />
      </Helmet>

      {/* Header Placeholder */}
      <header className="border-b border-slate-800 bg-brand-dark/80 backdrop-blur sticky top-0 z-50 py-4 px-6 flex justify-between items-center">
        <div className="text-xl font-bold text-brand-cyan tracking-wider font-sans">
          PETKIT PURA MAX
        </div>
        <div className="flex gap-4 text-sm text-slate-400">
          <span className="hover:text-brand-cyan cursor-pointer transition">Trang chủ</span>
          <span className="hover:text-brand-cyan cursor-pointer transition">Tính năng</span>
          <span className="hover:text-brand-cyan cursor-pointer transition">Thông số</span>
        </div>
      </header>

      {/* Main Content Placeholder */}
      <main className="flex-grow flex flex-col justify-center items-center px-4 py-20 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-cyan/20 bg-brand-cyan/5 text-brand-cyan text-sm mb-6 animate-pulse-slow">
          <Sparkles className="w-4 h-4" />
          <span>Thế Hệ Thứ Hai - Đã Có Sẵn Tại Việt Nam</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white font-sans tracking-tight leading-tight mb-6">
          Giải phóng đôi tay của bạn với <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-accent">Petkit Pura Max</span>
        </h1>
        
        <p className="text-lg text-slate-400 mb-10 max-w-2xl">
          Hệ thống dọn vệ sinh tự động thông minh, khử mùi chủ động vượt trội và 12 cảm biến an toàn bảo vệ mèo cưng 24/7.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl mb-12">
          <div className="p-6 rounded-2xl border border-slate-800 bg-brand-card/50 flex flex-col items-center">
            <RefreshCw className="w-8 h-8 text-brand-cyan mb-4" />
            <h3 className="text-white font-semibold mb-2">Tự Động Dọn Dẹp</h3>
            <p className="text-slate-400 text-sm text-center">Tự động quay sàng lọc cát sạch, gom chất thải vào hộp kín không mùi.</p>
          </div>
          <div className="p-6 rounded-2xl border border-slate-800 bg-brand-card/50 flex flex-col items-center">
            <Sparkles className="w-8 h-8 text-brand-cyan mb-4" />
            <h3 className="text-white font-semibold mb-2">Khử Mùi Chủ Động</h3>
            <p className="text-slate-400 text-sm text-center">Xịt khử mùi Pura Air thông minh loại bỏ amoniac và mùi hôi triệt để.</p>
          </div>
          <div className="p-6 rounded-2xl border border-slate-800 bg-brand-card/50 flex flex-col items-center">
            <Shield className="w-8 h-8 text-brand-cyan mb-4" />
            <h3 className="text-white font-semibold mb-2">An Toàn Tuyệt Đối</h3>
            <p className="text-slate-400 text-sm text-center">Hệ thống xSecure 12 cảm biến tự dừng máy ngay khi phát hiện mèo lại gần.</p>
          </div>
        </div>
      </main>

      {/* Footer Placeholder */}
      <footer className="border-t border-slate-900 bg-black/40 py-6 px-6 text-center text-sm text-slate-500">
        © 2026 Petkit Pura Max Landing Page. Xây dựng bởi AI Assistant.
      </footer>
    </div>
  );
}

export default App;
