import { ICart } from '@/interface/product';
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
} from '@chakra-ui/react';

const CartItem = (productData: ICart) => {
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
      <Stack>
        <CardBody>
          <Badge colorScheme="purple" mb="3">
            {productData.spaceCategory}
          </Badge>
          <Heading size="md">{productData.name}</Heading>
          <Text py="2">{productData.description}</Text>
        </CardBody>
        <CardFooter>
          <HStack>
            <VStack alignItems="start" flex="1">
              <Box fontSize="2xl">₩{productData.price.toLocaleString()}</Box>
              <Text fontSize="sm">등록번호 : {productData.idx}</Text>
            </VStack>
            <HStack>
              <Button borderRadius="full">-</Button>
              <Text>{productData.count}</Text>
              <Button borderRadius="full">+</Button>
            </HStack>
          </HStack>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default CartItem;
