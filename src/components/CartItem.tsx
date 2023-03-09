import { ICart } from '@/interface/product';
import { useAppDispatch, useAppSelector } from '@/store';
import { addToCart, removeToCart } from '@/store/slices/cartSlice';
import {
  Card,
  CardBody,
  CardFooter,
  Center,
  Heading,
  Image,
  Spinner,
  Stack,
  Text,
  Badge,
  HStack,
  Box,
  VStack,
  Button,
  useToast,
  Spacer,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

const CartItem = (productData: ICart) => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state);
  const toast = useToast();
  const purchasesCount = cart[productData.idx]?.count
    ? cart[productData.idx].count
    : 0;

  const increaseProd = () => {
    if (purchasesCount < productData.maximumPurchases) {
      dispatch(addToCart(productData));
    } else {
      toast({
        title: `${productData.name} 구매 개수 초과`,
        description: `인 당 ${productData.maximumPurchases}개만 구매하실 수 있습니다.`,
        position: 'top-right',
        status: 'error',
        isClosable: true,
      });
    }
  };

  const decreaseProd = () => {
    if (purchasesCount > 1) {
      dispatch(removeToCart(productData));
    }
  };

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      w="100%"
      boxShadow="none"
      _hover={{ boxShadow: '2px 2px 10px lightgray' }}
      borderRadius="10"
      overflow="hidden"
    >
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '200px' }}
        src={productData.mainImage}
        alt={productData.name}
        fallback={
          <Center w="40%" h="100%">
            <Spinner />
          </Center>
        }
      />
      <Stack flex="1">
        <CardBody>
          <Badge colorScheme="purple" mb="3">
            {productData.spaceCategory}
          </Badge>
          <Heading size="md">{productData.name}</Heading>
          <Text py="2">{productData.description}</Text>
        </CardBody>
        <HStack p="20px">
          <VStack alignItems="start" flex="1">
            <Box fontSize="2xl">₩{productData.price.toLocaleString()}</Box>
            <Text fontSize="sm">등록번호 : {productData.idx}</Text>
          </VStack>
          <HStack>
            <Button borderRadius="full" onClick={decreaseProd} w="5">
              <MinusIcon />
            </Button>
            <Spacer />
            <Text>{productData.count}</Text>
            <Spacer />
            <Button borderRadius="full" onClick={increaseProd} w="5">
              <AddIcon />
            </Button>
          </HStack>
        </HStack>
      </Stack>
    </Card>
  );
};

export default CartItem;
