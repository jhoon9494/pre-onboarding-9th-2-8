import { VStack, Center, Heading } from '@chakra-ui/react';
import Filter from '@/components/Filter';
import ProductList from '@/components/ProductList';
import ProductModal from '@/components/ProductModal';

const Main = () => {
  return (
    <>
      <Center as="main" w="100%">
        <VStack as="section">
          <Heading mt="10">상품 정보</Heading>
          <Filter />
          <ProductList />
        </VStack>
      </Center>
      <ProductModal />
    </>
  );
};
export default Main;
