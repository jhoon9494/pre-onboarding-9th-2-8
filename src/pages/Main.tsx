import { useCallback, useEffect, useState } from 'react';
import { getAllProducts } from '@/api/products';
import { IDetailInfo } from '@/interface/product';

const Main = () => {
  const [productList, setProductList] = useState<IDetailInfo[]>([]);

  const getProducts = useCallback(() => {
    getAllProducts()
      .then((res) => setProductList(res.data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return <div>main page</div>;
};

export default Main;
