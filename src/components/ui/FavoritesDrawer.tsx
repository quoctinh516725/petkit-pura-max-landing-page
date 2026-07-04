import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ShoppingBag } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { toggleFavorite } from '../../store/slices/favoritesSlice';
import { addToCart } from '../../store/slices/cartSlice';
import { Button } from './Button';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({ isOpen, onClose }) => {
  const dispatch = useAppDispatch();
  const favoriteItems = useAppSelector((state) => state.favorites.items);

  const handleAddToCart = (item: any) => {
    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        variant: 'Standard Package',
      })
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="w-screen max-w-md bg-[#1b223c] border-l border-slate-800 text-slate-100 flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                  <h2 className="text-lg font-bold font-display text-white">Sản Phẩm Yêu Thích</h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-slate-800">
                {favoriteItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6 gap-4">
                    <div className="w-16 h-16 rounded-full bg-slate-900/50 flex items-center justify-center text-slate-500 border border-slate-800">
                      <Heart className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white font-display mb-1">Danh sách trống</h3>
                      <p className="text-xs text-slate-400 max-w-[240px]">Hãy thêm các gói phụ kiện/máy yêu thích vào danh sách để lưu giữ tiện lợi.</p>
                    </div>
                  </div>
                ) : (
                  favoriteItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 p-4 bg-slate-900/30 border border-slate-800/60 rounded-2xl items-center"
                    >
                      <div className="w-20 h-20 bg-white rounded-xl overflow-hidden shrink-0 p-2 flex items-center justify-center border border-slate-800/30">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-auto max-h-full object-contain"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-white truncate font-display">{item.name}</h4>
                        <div className="text-sm font-black text-brand-teal mt-1">
                          {item.price.toLocaleString('vi-VN')}đ
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 shrink-0">
                        <button
                          onClick={() => dispatch(toggleFavorite(item))}
                          className="text-red-500 hover:text-slate-400 p-1.5 hover:bg-slate-800/50 rounded-full self-end transition"
                          aria-label="Xóa khỏi yêu thích"
                        >
                          <Heart className="w-4.5 h-4.5 fill-current" />
                        </button>

                        <Button
                          variant="ghost"
                          onClick={() => handleAddToCart(item)}
                          className="border border-brand-teal/20 text-brand-teal hover:bg-brand-teal/5 py-1 px-2.5 rounded-lg text-[10px] font-bold flex items-center gap-1"
                        >
                          <ShoppingBag className="w-3 h-3" />
                          <span>Thêm giỏ</span>
                        </Button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
