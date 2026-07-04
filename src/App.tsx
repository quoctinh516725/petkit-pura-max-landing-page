import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from './components/sections/Header';
import { Hero } from './components/sections/Hero';
import { Comparison } from './components/sections/Comparison';
import { Features } from './components/sections/Features';
import { Safety } from './components/sections/Safety';
import { Specs } from './components/sections/Specs';
import { Social } from './components/sections/Social';
import { ConsultForm } from './components/sections/ConsultForm';
import { Footer } from './components/sections/Footer';

const App: React.FC = () => {
  // Simple state stubs for cart and favorites panel interaction
  const [cartCount] = useState(0);
  const [favoritesCount] = useState(0);

  const handleCartClick = () => {
    alert("Giỏ hàng sẽ được tích hợp bằng Redux Toolkit ở Phase 4!");
  };

  const handleFavoritesClick = () => {
    alert("Danh sách yêu thích sẽ được tích hợp bằng Redux Toolkit ở Phase 4!");
  };

  return (
    <div className="min-h-screen bg-brand-dark overflow-x-hidden text-slate-100 selection:bg-brand-cyan selection:text-brand-dark">
      <Helmet>
        <title>Petkit Pura Max - Máy Dọn Vệ Sinh Mèo Tự Động Thông Minh</title>
        <meta name="description" content="Khám phá Petkit Pura Max 2 thế hệ mới. Hệ thống dọn vệ sinh tự động, xịt khử mùi chủ động Pura Air và 12 cảm biến an toàn xSecure bảo vệ mèo cưng." />
        
        {/* Open Graph Tags for SEO */}
        <meta property="og:title" content="Petkit Pura Max - Máy Dọn Vệ Sinh Mèo Tự Động Thông Minh" />
        <meta property="og:description" content="Giải phóng đôi tay của bạn với Petkit Pura Max. Hệ thống dọn dẹp tự động và bảo vệ mèo cưng 24/7." />
        <meta property="og:image" content="/src/assets/Petkit/banner.webp" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Navigation Header */}
      <Header 
        onCartClick={handleCartClick}
        onFavoritesClick={handleFavoritesClick}
        cartCount={cartCount}
        favoritesCount={favoritesCount}
      />

      {/* Main Sections */}
      <Hero />
      <Comparison />
      <Features />
      <Safety />
      <Specs />
      <Social />
      <ConsultForm />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
