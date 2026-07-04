import React, { useState, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from './components/sections/Header';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { Safety } from './components/sections/Safety';
import { Specs } from './components/sections/Specs';
import { ProductShop } from './components/sections/ProductShop';
import { Social } from './components/sections/Social';
import { ConsultForm } from './components/sections/ConsultForm';
import { Footer } from './components/sections/Footer';
import { CartDrawer } from './components/ui/CartDrawer';
import { FavoritesDrawer } from './components/ui/FavoritesDrawer';
import { useAppSelector } from './store/hooks';

// Lazy load ChatWidget for better LCP performance
const ChatWidget = lazy(() =>
  import('./components/ui/ChatWidget').then((mod) => ({ default: mod.ChatWidget }))
);

const App: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

  const cartItems = useAppSelector((state) => state.cart.items);
  const favoriteItems = useAppSelector((state) => state.favorites.items);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const favoritesCount = favoriteItems.length;

  return (
    <div className="min-h-screen bg-brand-dark overflow-x-hidden text-slate-100 selection:bg-brand-cyan selection:text-brand-dark">
      <Helmet>
        <title>Petkit Pura Max 2 - Máy Dọn Vệ Sinh Mèo Tự Động Thông Minh</title>
        <meta name="description" content="Khám phá Petkit Pura Max 2 thế hệ mới. Hệ thống dọn vệ sinh tự động chống rò rỉ nước tiểu ShieldBase, lưới lọc nam châm thông minh, khử mùi 3 lớp và 12 cảm biến an toàn xSecure." />
        
        {/* Open Graph Tags for SEO */}
        <meta property="og:title" content="Petkit Pura Max 2 - Máy Dọn Vệ Sinh Mèo Tự Động Thông Minh" />
        <meta property="og:description" content="Giải phóng đôi tay của bạn với Petkit Pura Max 2. Hệ thống dọn dẹp tự động chống rò rỉ nước tiểu và bảo vệ mèo cưng 24/7." />
        <meta property="og:image" content="/src/assets/Petkit/banner.webp" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Navigation Header */}
      <Header 
        onCartClick={() => setIsCartOpen(true)}
        onFavoritesClick={() => setIsFavoritesOpen(true)}
        cartCount={cartCount}
        favoritesCount={favoritesCount}
      />

      {/* Main Sections */}
      <Hero />
      <Features />
      <Safety />
      <Specs />
      <ProductShop />
      <Social />
      <ConsultForm />

      {/* Drawers (Cart & Favorites Slide-out Panels) */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <FavoritesDrawer isOpen={isFavoritesOpen} onClose={() => setIsFavoritesOpen(false)} />

      {/* AI Chatbot Widget (Lazy Loaded) */}
      <Suspense fallback={null}>
        <ChatWidget />
      </Suspense>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
