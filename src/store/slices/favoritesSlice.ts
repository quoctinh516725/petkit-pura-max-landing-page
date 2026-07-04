import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FavoriteItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface FavoritesState {
  items: FavoriteItem[];
}

const loadFavoritesState = (): FavoriteItem[] => {
  try {
    const serialized = localStorage.getItem('pura_max_favorites');
    return serialized ? JSON.parse(serialized) : [];
  } catch (err) {
    return [];
  }
};

const initialState: FavoritesState = {
  items: loadFavoritesState(),
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<FavoriteItem>) => {
      const existingIdx = state.items.findIndex(item => item.id === action.payload.id);
      if (existingIdx > -1) {
        state.items.splice(existingIdx, 1);
      } else {
        state.items.push(action.payload);
      }
      localStorage.setItem('pura_max_favorites', JSON.stringify(state.items));
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
