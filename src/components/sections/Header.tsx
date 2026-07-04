import React, { useState } from 'react';
import { ShoppingBag, Heart, Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

interface HeaderProps {
  onCartClick: () => void;
  onFavoritesClick: () => void;
  cartCount: number;
  favoritesCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  onCartClick,
  onFavoritesClick,
  cartCount,
  favoritesCount
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Trang chủ', href: '#home' },
    { label: 'Tính năng', href: '#features' },
    { label: 'An toàn', href: '#safety' },
    { label: 'Thông số', href: '#specs' },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        
        {/* Left Side: Mobile Menu Button / Desktop Nav Toggle */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 text-white hover:text-brand-yellow transition font-bold text-sm tracking-wider uppercase md:hidden"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            <span>Menu</span>
          </button>
          
          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-white font-bold">
            {menuItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="hover:text-brand-yellow transition duration-300 relative py-1 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-yellow transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
        </div>

        {/* Center: Brand Logo (Serif font display designed like Lovebug) */}
        <div className="flex flex-col items-center justify-center text-center select-none pt-2">
          <div className="relative">
            <svg viewBox="0 0 160 50" width="130" height="40" className="overflow-visible fill-white">
              <path id="header-logo-path" d="M 10,38 Q 80,18 150,38" fill="none" />
              <text className="font-display font-black text-2xl" textAnchor="middle">
                <textPath href="#header-logo-path" startOffset="50%">
                  PETKIT!
                </textPath>
              </text>
            </svg>
            <span className="text-[8px] font-sans text-white absolute right-1 top-1 font-normal">TM</span>
          </div>
          <div className="text-[8px] md:text-[9px] font-bold text-white/95 font-display -mt-1 leading-[1.2] tracking-wider">
            For The Love<br />Of Cats & Home
          </div>
        </div>

        {/* Right Side: Favorites, Cart & Action Buttons */}
        <div className="flex items-center gap-4">
          {/* Favorites Button */}
          <button 
            onClick={onFavoritesClick}
            className="relative p-2 text-white hover:text-brand-yellow transition duration-300"
            aria-label="Xem danh sách yêu thích"
          >
            <Heart className="w-5 h-5" />
            {favoritesCount > 0 && (
              <span className="absolute top-0 right-0 bg-brand-yellow text-brand-navy text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-black">
                {favoritesCount}
              </span>
            )}
          </button>

          {/* Cart Button */}
          <button 
            onClick={onCartClick}
            className="relative p-2 text-white hover:text-brand-yellow transition duration-300"
            aria-label="Mở giỏ hàng"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-brand-yellow text-brand-navy text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-black">
                {cartCount}
              </span>
            )}
          </button>

          {/* Quick Action Try/Buy Button */}
          <Button 
            variant="accent" 
            size="sm" 
            className="hidden sm:inline-flex"
            onClick={() => {
              const el = document.getElementById('consult-form');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Mua hàng
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-brand-teal px-6 py-4 flex flex-col gap-4">
          {menuItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-brand-yellow transition text-base py-2 block font-bold border-b border-white/5"
            >
              {item.label}
            </a>
          ))}
          <Button 
            variant="accent" 
            size="md" 
            className="w-full mt-2"
            onClick={() => {
              setIsMenuOpen(false);
              const el = document.getElementById('consult-form');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Nhận Ưu Đãi Ngay
          </Button>
        </div>
      )}
    </header>
  );
};
