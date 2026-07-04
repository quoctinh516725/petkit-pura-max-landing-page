import React, { lazy, Suspense, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from './components/sections/Header';
import { Hero } from './components/sections/Hero';
import { useAppSelector } from './store/hooks';

// ─── Lazy-load all below-the-fold sections ──────────────────────────────────
// This splits each section into its own chunk, reducing initial bundle size
// and improving LCP / FCP scores significantly.
const Features     = lazy(() => import('./components/sections/Features').then(m => ({ default: m.Features })));
const Safety       = lazy(() => import('./components/sections/Safety').then(m => ({ default: m.Safety })));
const Specs        = lazy(() => import('./components/sections/Specs').then(m => ({ default: m.Specs })));
const ProductShop  = lazy(() => import('./components/sections/ProductShop').then(m => ({ default: m.ProductShop })));
const Social       = lazy(() => import('./components/sections/Social').then(m => ({ default: m.Social })));
const ConsultForm  = lazy(() => import('./components/sections/ConsultForm').then(m => ({ default: m.ConsultForm })));
const Footer       = lazy(() => import('./components/sections/Footer').then(m => ({ default: m.Footer })));
const CartDrawer   = lazy(() => import('./components/ui/CartDrawer').then(m => ({ default: m.CartDrawer })));
const FavoritesDrawer = lazy(() => import('./components/ui/FavoritesDrawer').then(m => ({ default: m.FavoritesDrawer })));
const ChatWidget   = lazy(() => import('./components/ui/ChatWidget').then(m => ({ default: m.ChatWidget })));

// Section skeleton fallback — lightweight placeholder while chunk loads
const SectionSkeleton: React.FC<{ height?: string }> = ({ height = 'h-64' }) => (
  <div className={`w-full ${height} bg-brand-dark animate-pulse`} aria-hidden="true" />
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
        {/* Dynamic SEO — supplements the static tags in index.html */}
        <title>Petkit Pura Max 2 - Máy Dọn Vệ Sinh Mèo Thông Minh Tự Động | HeliPet.vn</title>
        <meta name="description" content="Khám phá Petkit Pura Max 2 thế hệ mới 2025. Hệ thống dọn vệ sinh tự động chống rò rỉ nước tiểu ShieldBase, lưới lọc nam châm thông minh, khử mùi 3 lớp và 12 cảm biến an toàn xSecure. Giá từ 10.450.000đ." />
        <meta property="og:image" content="/og-image.webp" />
        <meta property="og:url" content="https://helipet.vn/" />
      </Helmet>

      {/* ── Critical path: Header + Hero render immediately (no lazy) ── */}
      <Header
        onCartClick={() => setIsCartOpen(true)}
        onFavoritesClick={() => setIsFavoritesOpen(true)}
        cartCount={cartCount}
        favoritesCount={favoritesCount}
      />
      <Hero />

      {/* ── Below-the-fold: lazy loaded with skeleton fallback ── */}
      <Suspense fallback={<SectionSkeleton height="h-[600px]" />}>
        <Features />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-[500px]" />}>
        <Safety />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-[500px]" />}>
        <Specs />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-[700px]" />}>
        <ProductShop />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-[500px]" />}>
        <Social />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-[600px]" />}>
        <ConsultForm />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-32" />}>
        <Footer />
      </Suspense>

      {/* ── Drawers & Chatbot — ultra-lazy (only rendered when opened) ── */}
      <Suspense fallback={null}>
        {isCartOpen && <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />}
      </Suspense>
      <Suspense fallback={null}>
        {isFavoritesOpen && <FavoritesDrawer isOpen={isFavoritesOpen} onClose={() => setIsFavoritesOpen(false)} />}
      </Suspense>

      <Suspense fallback={null}>
        <ChatWidget />
      </Suspense>
    </div>
  );
};

export default App;
