---
name: manage-redux-state
description: Tạo hoặc cập nhật một Redux Toolkit Slice trong TypeScript để quản lý state (Giỏ hàng, Yêu thích, Đã xem) và tự động đồng bộ hóa với LocalStorage.
---

# Hướng dẫn Quản lý Redux State trong Petkit Pura Max

Sử dụng kỹ năng này khi thiết lập store hoặc tạo một slice mới để quản lý giỏ hàng, danh sách yêu thích, hoặc lịch sử xem sản phẩm.

## Quy trình Thực hiện

### 1. Định nghĩa Slice
Tạo slice tại đường dẫn `src/store/slices/<feature>Slice.ts`. Định nghĩa rõ ràng State interface, actions, và reducers.

```typescript
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProductItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity?: number;
}

interface FeatureState {
  items: ProductItem[];
}

const loadState = (): ProductItem[] => {
  try {
    const serializedState = localStorage.getItem('pura_max_<feature>');
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (err) {
    return [];
  }
};

const initialState: FeatureState = {
  items: loadState(),
};

export const featureSlice = createSlice({
  name: 'feature',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ProductItem>) => {
      const existing = state.items.find(item => item.id === action.payload.id);
      if (existing) {
        if (existing.quantity !== undefined) {
          existing.quantity += 1;
        }
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem('pura_max_<feature>', JSON.stringify(state.items));
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem('pura_max_<feature>', JSON.stringify(state.items));
    },
    clearItems: (state) => {
      state.items = [];
      localStorage.removeItem('pura_max_<feature>');
    },
  },
});

export const { addItem, removeItem, clearItems } = featureSlice.actions;
export default featureSlice.reducer;
```

### 2. Định nghĩa Typed Hooks
Tạo file `src/store/hooks.ts` để sử dụng custom Redux hooks an toàn về kiểu dữ liệu (Typesafe).

```typescript
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './index';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

### 3. Cấu hình Store chính
Đảm bảo tất cả các slice được khai báo và gộp vào `src/store/index.ts`.
