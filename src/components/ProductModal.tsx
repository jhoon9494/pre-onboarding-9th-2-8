import { IModal } from '@/interface/product';
import useCart from '@/lib/hooks/useCart';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalFooter,
  Image,
  Center,
  Text,
  Heading,
  Box,
  Badge,
} from '@chakra-ui/react';

const ProductModal = ({ isOpen, onClose, product }: IModal) => {
  const { dispatch } = useCart();
  const onReserve = () => {
    dispatch({ type: 'add', product });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Center>
            <Image
              mt="10"
              src={product.mainImage}
              alt={`${product.name}-${product.idx.toString()}`}
              boxSize="370px"
              borderRadius="5"
            />
          </Center>
          <Box display="flex" alignItems="baseline" gap="3" mt="5">
            <Heading mt="2" as="h2" size="lg">
              {product.name}
            </Heading>
            <Badge borderRadius="full" px="2" colorScheme="teal">
              {product.spaceCategory}
            </Badge>
          </Box>

          <Box mt="2" display="flex">
            <Box mr="3" fontSize="2xl" fontWeight="700">
              {product.price.toLocaleString()}
              <Box as="span" color="gray.600" fontSize="lg">
                원
              </Box>
            </Box>
            <Box color="gray.600" fontSize="smaller" alignSelf="end" pb="1">
              📌 1인 최대 구매수량: {product.maximumPurchases}개
            </Box>
          </Box>
          <Text pt="4" pb="4">
            {product.description}
          </Text>
        </ModalBody>

        <ModalFooter justifyContent="space-between" alignItems="end">
          <Button colorScheme="teal" mr={3} onClick={onReserve}>
            예약하기
          </Button>
          <Text color="gray.600" fontSize="smaller">
            상품 등록 시간 &nbsp; {product.registrationDate}
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProductModal;
