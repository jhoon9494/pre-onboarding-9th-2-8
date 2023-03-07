import { cartChangeContext, cartContext } from '@/contexts/cartContext';
import { useContext } from 'react';

const useCart = () => {
  const dispatch = useContext(cartChangeContext);
  const cart = useContext(cartContext);

  if (!cart) throw new Error('Cannot find CartContextProvider');
  if (!dispatch) throw new Error('Cannot find CartContextProvider');
  return { cart, dispatch };
};

export default useCart;
