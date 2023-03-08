import { useEffect } from 'react';
import { Grid } from '@chakra-ui/react';
import { getProducts } from '@/store/slices/productSlice';
import Product from '@/components/Product';
import { IProduct } from '@/interface/product';
import { RootState, useAppDispatch, useAppSelector } from '@/store';

const ProductList = () => {
  const dispatch = useAppDispatch();
  const {
    products: { products },
  } = useAppSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Grid as="section" templateColumns="repeat(4, 1fr)" gap={6} p={4}>
        {products.map((product: IProduct) => (
          <Product key={product.idx} {...product} />
        ))}
      </Grid>
    </>
  );
};
export default ProductList;
