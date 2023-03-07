import { IProductInfo } from '@/interface/product';
import { Image, Box, Badge } from '@chakra-ui/react';

const ProductCard = ({ product }: { product: IProductInfo }) => {
  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      _hover={{ boxShadow: '2px 2px 10px lightgray' }}
    >
      <Image src={product.mainImage} alt={product.idx.toString()} />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {product.spaceCategory}
          </Badge>
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {product.name}
        </Box>
        <Box>
          {product.price.toLocaleString()}
          <Box as="span" color="gray.600" fontSize="sm">
            원
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
