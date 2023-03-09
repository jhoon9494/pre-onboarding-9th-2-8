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
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
