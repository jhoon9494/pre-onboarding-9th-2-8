import { ICart } from '@/interface/product';

export const getTotalPrice = (cartList: ICart[]): number => {
  const result = cartList.reduce((prev, curr) => {
    return prev + curr.count * curr.price;
  }, 0);
  return result;
};
