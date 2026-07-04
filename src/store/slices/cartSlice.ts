import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  variant: string;
}

interface CartState {
  items: CartItem[];
}

const loadCartState = (): CartItem[] => {
  try {
    const serialized = localStorage.getItem('pura_max_cart');
    return serialized ? JSON.parse(serialized) : [];
  } catch (err) {
    return [];
  }
};

const initialState: CartState = {
  items: loadCartState(),
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
      const existing = state.items.find(
        item => item.id === action.payload.id && item.variant === action.payload.variant
      );
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem('pura_max_cart', JSON.stringify(state.items));
    },
    removeFromCart: (state, action: PayloadAction<{ id: string; variant: string }>) => {
      state.items = state.items.filter(
        item => !(item.id === action.payload.id && item.variant === action.payload.variant)
      );
      localStorage.setItem('pura_max_cart', JSON.stringify(state.items));
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; variant: string; quantity: number }>) => {
      const item = state.items.find(
        item => item.id === action.payload.id && item.variant === action.payload.variant
      );
      if (item && action.payload.quantity > 0) {
        item.quantity = action.payload.quantity;
      }
      localStorage.setItem('pura_max_cart', JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem('pura_max_cart');
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
