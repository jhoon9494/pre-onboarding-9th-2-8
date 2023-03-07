import { IProductInfo } from '@/interface/product';
import useCart from '@/lib/hooks/useCart';
import { Image, Box, Badge, Button } from '@chakra-ui/react';
import { MouseEvent } from 'react';

const ProductCard = ({ product }: { product: IProductInfo }) => {
  const { dispatch } = useCart();

  const onReserve = (event: MouseEvent) => {
    event.stopPropagation();
    dispatch({ type: 'add', product });
  };

  const onClickModal = () => {
    console.log('open modal');
  };

  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      _hover={{ boxShadow: '2px 2px 10px lightgray' }}
      onClick={onClickModal}
    >
      <Image src={product.mainImage} alt={product.idx.toString()} />

      <Box p="6" pt="4">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {product.spaceCategory}
          </Badge>
        </Box>
        <Box
          mt="2"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {product.name}
        </Box>
        <Box display="flex" justifyContent="space-between" mt="3">
          <Box>
            {product.price.toLocaleString()}
            <Box as="span" color="gray.600" fontSize="sm">
              원
            </Box>
          </Box>
          <Button colorScheme="teal" size="xs" onClick={(e) => onReserve(e)}>
            예약하기
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
