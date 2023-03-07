import { useCallback, useEffect, useState } from 'react';
import { getAllProducts } from '@/api/products';
import { IDetailInfo } from '@/interface/product';
import ProductCard from '@/components/ProductCard';
import { Grid, Heading, Center, Box } from '@chakra-ui/react';

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

  return (
    <Box maxW="1280px" m={'auto'}>
      <Center h="100px" mb="50">
        <Heading as="h2" size="2xl">
          8nbsp 추천 여행 상품
        </Heading>
      </Center>
      <Grid templateColumns="repeat(4, 1fr)" gap={6} m="4">
        {productList.map((product) => {
          return <ProductCard key={product.idx} product={product} />;
        })}
      </Grid>
    </Box>
  );
};

export default Main;
