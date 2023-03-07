import { createContext, Dispatch } from 'react';
import { IProductInfo } from '@/interface/product';
import { cartActionType } from '@/interface/context';

export const cartContext = createContext<IProductInfo[] | null>(null);
export const cartChangeContext = createContext<Dispatch<cartActionType> | null>(
  null,
);

export const cartReducer = (state: IProductInfo[], action: cartActionType) => {
  switch (action.type) {
    case 'add': {
      // 확인을 위한 것이며, 장바구니 구현 후 삭제
      console.log(
        '현재 담긴 물건',
        action.product,
        '담기기 전 바구니 크기',
        state.length,
      );
      return [...state, action.product];
    }

    default:
      return state;
  }
};
