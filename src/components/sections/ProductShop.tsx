import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart, Gift, Sparkles } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addToCart } from '../../store/slices/cartSlice';
import { toggleFavorite } from '../../store/slices/favoritesSlice';
import { addViewedProduct } from '../../store/slices/viewedSlice';

interface ProductPack {
  id: string;
  name: string;
  price: number;
  image: string;
  variant: string;
  badge?: string;
  gifts: string[];
  desc: string;
}

export const ProductShop: React.FC = () => {
  const dispatch = useAppDispatch();
  const favoriteItems = useAppSelector((state) => state.favorites.items);
  const cartItems = useAppSelector((state) => state.cart.items);

  const products: ProductPack[] = [
    {
      id: 'pura-max-2-standard',
      name: 'Pura Max 2 Standard',
      price: 10450000,
      image: '/src/assets/Petkit/anh5.webp',
      variant: 'Standard Pack',
      desc: 'Bản tiêu chuẩn đầy đủ phụ kiện máy dọn, cáp nguồn và túi rác đi kèm.',
      gifts: ['1x Cuộn túi rác dự phòng'],
    },
    {
      id: 'pura-max-2-premium',
      name: 'Pura Max 2 Premium',
      price: 10950000,
      image: '/src/assets/Petkit/hero-cat.png',
      variant: 'Premium Pack',
      badge: 'Bán chạy nhất',
      desc: 'Giải pháp chống bám bẩn cát toàn diện cho mèo.',
      gifts: [
        '1x Thảm bẫy cát Petkit chính hãng',
        '2x Chai dung dịch khử mùi Pura Air',
        '1x Hộp sáp N50 triệt amoniac',
      ],
    },
    {
      id: 'pura-max-2-ultimate',
      name: 'Pura Max 2 Ultimate',
      price: 11950000,
      image: '/src/assets/Petkit/anh4.webp',
      variant: 'Ultimate Pack',
      badge: 'Ưu đãi 1 năm',
      desc: 'Trọn bộ chăm sóc khép kín đủ dùng trong suốt 1 năm không cần mua lẻ.',
      gifts: [
        '1x Thảm bẫy cát Petkit chính hãng',
        '6x Chai dung dịch khử mùi Pura Air',
        '4x Miếng sáp khử mùi N50',
        '3x Cuộn túi rác (đủ dùng 12 tháng)',
      ],
    },
  ];

  // Auto record viewed products on mount
  useEffect(() => {
    // Add best seller to viewed list as default
    const bestSeller = products[1];
    dispatch(
      addViewedProduct({
        id: bestSeller.id,
        name: bestSeller.name,
        price: bestSeller.price,
        image: bestSeller.image,
      })
    );
  }, [dispatch]);

  const handleProductHover = (product: ProductPack) => {
    dispatch(
      addViewedProduct({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      })
    );
  };

  return (
    <section id="shop" className="relative py-28 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-teal/20 bg-brand-teal/5 text-brand-teal text-xs font-black tracking-widest uppercase mb-6 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-yellow" />
            <span>Chọn Gói Ưu Đãi</span>
          </div>

          <h2 className="sr-only">Các Gói Sản Phẩm Petkit Pura Max 2</h2>
          <svg viewBox="0 0 600 180" className="w-full max-w-2xl mx-auto overflow-visible fill-white select-none mb-4">
            <path id="shop-curve-1" d="M 20,75 Q 300,15 580,75" fill="none" />
            <path id="shop-curve-2" d="M 20,145 Q 300,85 580,145" fill="none" />
            
            <text className="font-display font-black text-[56px]" textAnchor="middle">
              <textPath href="#shop-curve-1" startOffset="50%">
                Các Gói Sản Phẩm
              </textPath>
            </text>
            <text className="font-display font-black text-[56px]" textAnchor="middle">
              <textPath href="#shop-curve-2" startOffset="50%">
                <tspan fill="#ffc526">Ưu đãi độc quyền</tspan>
              </textPath>
            </text>
          </svg>
          <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Lựa chọn gói sản phẩm phù hợp nhất cho không gian và mèo cưng của bạn. Tự động áp dụng voucher giảm thêm 500k khi đặt lịch tư vấn.
          </p>
        </div>

        {/* Product Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {products.map((product) => {
            const isFavorite = favoriteItems.some((item) => item.id === product.id);
            const inCart = cartItems.some((item) => item.id === product.id && item.variant === product.variant);

            return (
              <motion.div
                key={product.id}
                onMouseEnter={() => handleProductHover(product)}
                className="flex"
              >
                <Card
                  hoverEffect={true}
                  className="bg-white text-brand-navy border-none flex flex-col justify-between w-full p-6 rounded-[2rem] shadow-xl relative overflow-visible"
                >
                  {product.badge && (
                    <span className="absolute -top-4 left-6 bg-brand-yellow text-brand-navy text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full shadow-md z-20 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 fill-current" />
                      {product.badge}
                    </span>
                  )}

                  <div>
                    {/* Image */}
                    <div className="w-full aspect-square rounded-2xl bg-brand-teal/5 border border-brand-teal/10 flex items-center justify-center p-6 mb-6 relative group overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-auto max-h-full object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.1)] group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Meta */}
                    <h3 className="text-xl font-bold font-display text-brand-navy mb-2 flex items-center justify-between gap-2">
                      <span>{product.name}</span>
                      <button
                        onClick={() =>
                          dispatch(
                            toggleFavorite({
                              id: product.id,
                              name: product.name,
                              price: product.price,
                              image: product.image,
                            })
                          )
                        }
                        className={`p-1.5 rounded-full hover:bg-slate-100 transition ${
                          isFavorite ? 'text-red-500' : 'text-slate-400'
                        }`}
                        aria-label="Thêm vào yêu thích"
                      >
                        <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                      </button>
                    </h3>

                    <div className="text-2xl font-black text-brand-teal mb-4 font-display">
                      {product.price.toLocaleString('vi-VN')}đ
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed mb-6">
                      {product.desc}
                    </p>

                    {/* Gifts List */}
                    <div className="border-t border-slate-100 pt-4 mb-6">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-600 mb-3">
                        <Gift className="w-4 h-4 text-brand-yellow" />
                        <span>Bộ quà tặng kèm:</span>
                      </div>
                      <ul className="space-y-2 text-[11px] text-left text-slate-600 pl-1">
                        {product.gifts.map((gift, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-brand-teal font-black select-none shrink-0">•</span>
                            <span>{gift}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Add to Cart CTA */}
                  <Button
                    variant={product.badge ? 'primary' : 'secondary'}
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image,
                          variant: product.variant,
                        })
                      )
                    }
                    className="w-full py-3.5 justify-center gap-2.5 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>{inCart ? 'Đã trong giỏ (+1)' : 'Thêm Vào Giỏ Hàng'}</span>
                  </Button>
                </Card>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* SVG Wave Divider to Section 6 (Social - brand-teal) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 translate-y-[1px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-brand-teal">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  );
};
