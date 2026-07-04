import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { updateQuantity, removeFromCart, clearCart } from '../../store/slices/cartSlice';
import { Button } from './Button';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckoutClick = () => {
    onClose();
    const el = document.getElementById('consult-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
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
                  <ShoppingBag className="w-5 h-5 text-brand-yellow" />
                  <h2 className="text-lg font-bold font-display text-white">Giỏ Hàng Của Bạn</h2>
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
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6 gap-4">
                    <div className="w-16 h-16 rounded-full bg-slate-900/50 flex items-center justify-center text-slate-500 border border-slate-800">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white font-display mb-1">Giỏ hàng trống</h3>
                      <p className="text-xs text-slate-400 max-w-[240px]">Hãy thêm gói máy vệ sinh Petkit Pura Max 2 vào giỏ để nhận ưu đãi.</p>
                    </div>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={`${item.id}-${item.variant}`}
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
                        <p className="text-[10px] font-mono text-brand-yellow uppercase tracking-wider mb-1.5">{item.variant}</p>
                        <div className="text-sm font-black text-brand-teal">
                          {item.price.toLocaleString('vi-VN')}đ
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-3 shrink-0">
                        <button
                          onClick={() => dispatch(removeFromCart({ id: item.id, variant: item.variant }))}
                          className="text-slate-500 hover:text-red-400 p-1 hover:bg-slate-800/50 rounded transition"
                          aria-label="Xóa sản phẩm"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>

                        <div className="flex items-center border border-slate-800 bg-slate-950/60 rounded-lg p-0.5 overflow-hidden">
                          <button
                            onClick={() =>
                              dispatch(
                                updateQuantity({
                                  id: item.id,
                                  variant: item.variant,
                                  quantity: item.quantity - 1,
                                })
                              )
                            }
                            className="p-1 hover:bg-slate-800 text-slate-400 hover:text-white rounded transition"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-2.5 text-xs font-bold font-mono text-white min-w-[20px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              dispatch(
                                updateQuantity({
                                  id: item.id,
                                  variant: item.variant,
                                  quantity: item.quantity + 1,
                                })
                              )
                            }
                            className="p-1 hover:bg-slate-800 text-slate-400 hover:text-white rounded transition"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer Summary */}
              {cartItems.length > 0 && (
                <div className="p-6 border-t border-slate-800 bg-slate-950/40 space-y-4">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-sm">Tạm tính:</span>
                    <span className="text-xl font-black text-brand-yellow font-display">
                      {totalPrice.toLocaleString('vi-VN')}đ
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="ghost"
                      onClick={() => dispatch(clearCart())}
                      className="border border-slate-800 text-slate-400 hover:text-white py-3 px-4 rounded-xl text-xs flex items-center justify-center"
                    >
                      Xóa tất cả
                    </Button>
                    <Button
                      variant="primary"
                      onClick={handleCheckoutClick}
                      className="flex-1 py-3 justify-center text-xs font-bold rounded-xl"
                    >
                      Thanh Toán & Nhận Ưu Đãi
                    </Button>
                  </div>
                  <p className="text-[10px] text-center text-slate-500 leading-normal">
                    * Đội ngũ chăm sóc khách hàng sẽ liên hệ qua điện thoại để xác nhận đơn hàng và áp dụng voucher giảm 500k.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
