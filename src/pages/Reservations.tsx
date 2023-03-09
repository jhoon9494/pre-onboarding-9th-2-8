import CartItem from '@/components/CartItem';
import { useAppSelector } from '@/store';
import { Heading, VStack } from '@chakra-ui/react';

const Reservations = () => {
  const { cart } = useAppSelector((state) => state);

  return (
    <VStack as="section" p={4} gap={2}>
      <Heading mb={4}>장바구니</Heading>
      {Object.values(cart).map((product) => {
        return <CartItem key={product.idx} {...product} />;
      })}
    </VStack>
  );
};
export default Reservations;
