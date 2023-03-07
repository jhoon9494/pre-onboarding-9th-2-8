import { ReactNode, useReducer } from 'react';
import { IProductInfo } from '@/interface/product';
import { cartChangeContext, cartContext, cartReducer } from './cartContext';

const initialCart: IProductInfo[] = [];

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCart);

  return (
    <cartContext.Provider value={state}>
      <cartChangeContext.Provider value={dispatch}>
        {children}
      </cartChangeContext.Provider>
    </cartContext.Provider>
  );
};

export default CartContextProvider;
