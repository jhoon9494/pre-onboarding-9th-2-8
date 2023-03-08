import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  Heading,
  Image,
  Spinner,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { IProduct } from '@/interface/product';
import { useAppDispatch, useAppSelector } from '@/store';
import { onOpen } from '@/store/slices/modalSlice';
import { addToCart } from '@/store/slices/cartSlice';

const Product = (productData: IProduct) => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state);
  const toast = useToast();

  const handleReservation = (product: IProduct) => {
    const productLength =
      cart.filter((item) => item.idx === product.idx).length + 1;

    if (productLength <= Number(product.maximumPurchases)) {
      dispatch(addToCart(product));
      toast({
        title: `${product.name} 1개 추가`,
        description: `장바구니에 ${productLength}개 있습니다`,
        position: 'top-right',
        status: 'success',
        isClosable: true,
      });
    } else {
      toast({
        title: `${product.name} 구매 개수 초과`,
        description: `인 당 ${product.maximumPurchases}개만 구매하실 수 있습니다.`,
        position: 'top-right',
        status: 'error',
        isClosable: true,
      });
    }
  };

  return (
    <Card borderRadius="10" overflow="hidden">
      <VStack h="100%">
        <Image
          objectFit="cover"
          w="100%"
          src={productData.mainImage}
          alt={productData.name}
          fallback={
            <Center w="40%" h="100%">
              <Spinner />
            </Center>
          }
        />
        <CardBody alignSelf="start">
          <Badge colorScheme="purple" mb="2">
            {productData.spaceCategory}
          </Badge>
          <Heading size="md">{productData.name}</Heading>
          <Text py="2">{parseInt(productData.price).toLocaleString()}원</Text>
        </CardBody>
        <CardFooter gap="15px" alignSelf="start">
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={() => handleReservation(productData)}
          >
            예 약
          </Button>
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={() => dispatch(onOpen(productData))}
          >
            더 보 기
          </Button>
        </CardFooter>
      </VStack>
    </Card>
  );
};
export default Product;
