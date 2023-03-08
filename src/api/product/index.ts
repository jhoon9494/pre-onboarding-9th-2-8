import { axiosInstance } from '@/api/client';
import { IFilter, IProduct } from '@/interface/product';

const productApi = {
  getProducts: async () => {
    const { data } = await axiosInstance.get('/mock/mock_data.json');
    return data;
  },

  getFilteredProducts: async ({ minPrice, maxPrice, currPlace }: IFilter) => {
    const { data } = await axiosInstance.get('/mock/mock_data.json');
    const min = minPrice ? parseInt(minPrice) : 0;
    const max = maxPrice ? parseInt(maxPrice) : 1e9;

    if (min >= 0 && max && currPlace) {
      const result = data.filter(
        (product: IProduct) =>
          parseInt(product.price) >= min &&
          parseInt(product.price) <= max &&
          product.spaceCategory === currPlace,
      );
      return result;
    }

    if (min >= 0 && max) {
      const result = data.filter(
        (product: IProduct) =>
          parseInt(product.price) >= min && parseInt(product.price) <= max,
      );
      return result;
    }

    if (currPlace) {
      const result = data.filter(
        (product: IProduct) => product.spaceCategory === currPlace,
      );
      return result;
    }
    return data;
  },
};

export default productApi;
