import { ICart } from '@/interface/product';
import { createSlice } from '@reduxjs/toolkit';

const initialState: { [key: number]: ICart } = {};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const key: number = action.payload.idx;
      if (state[key]) {
        return {
          ...state,
          [key]: {
            ...action.payload,
            count: state[key].count + 1,
          },
        };
      } else {
        return {
          ...state,
          [key]: { ...action.payload, count: 1 },
        };
      }
    },
    removeToCart: (state, action) => {
      const key: number = action.payload.idx;
      return {
        ...state,
        [key]: {
          ...action.payload,
          count: state[key].count - 1,
        },
      };
    },
    deletoToCart: (state, action) => {
      action.payload.forEach((product: ICart) => {
        const key: number = product.idx;
        delete state[key];
      });
    },
  },
});

export const { addToCart, removeToCart, deletoToCart } = cartSlice.actions;

export default cartSlice.reducer;
