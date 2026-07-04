import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ViewedItem {
  id: string;
  name: string;
  price: number;
  image: string;
  timestamp: number;
}

interface ViewedState {
  items: ViewedItem[];
}

const loadViewedState = (): ViewedItem[] => {
  try {
    const serialized = localStorage.getItem('pura_max_viewed');
    return serialized ? JSON.parse(serialized) : [];
  } catch (err) {
    return [];
  }
};

const initialState: ViewedState = {
  items: loadViewedState(),
};

export const viewedSlice = createSlice({
  name: 'viewed',
  initialState,
  reducers: {
    addViewedProduct: (state, action: PayloadAction<Omit<ViewedItem, 'timestamp'>>) => {
      // Filter out duplicate if it already exists
      state.items = state.items.filter(item => item.id !== action.payload.id);
      // Prepend to top
      state.items.unshift({ ...action.payload, timestamp: Date.now() });
      // Cap at maximum of 5 products
      if (state.items.length > 5) {
        state.items = state.items.slice(0, 5);
      }
      localStorage.setItem('pura_max_viewed', JSON.stringify(state.items));
    },
  },
});

export const { addViewedProduct } = viewedSlice.actions;
export default viewedSlice.reducer;
