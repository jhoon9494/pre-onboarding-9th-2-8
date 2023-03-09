import CartItem from '@/components/CartItem';
import { ICart } from '@/interface/product';
import { getTotalPrice } from '@/lib/utils/cartHelpers';
import { useAppDispatch, useAppSelector } from '@/store';
import { deletoToCart } from '@/store/slices/cartSlice';
import {
  Box,
  Button,
  Center,
  Checkbox,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';

const Reservations = () => {
  const [checkList, setCheckList] = useState<ICart[]>([]);
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state);
  const cartList = Object.values(cart);
  const totalPrice = getTotalPrice(cartList);

  const onAllCheck = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setCheckList(cartList);
    } else {
      setCheckList([]);
    }
  };

  const onDelete = () => {
    dispatch(deletoToCart(checkList));
  };

  return (
    <VStack as="section" p={4} gap={2} pb="90px">
      <Heading mb={4}>장바구니</Heading>
      {cartList.length ? (
        <>
          <HStack w="100%" justifyContent="space-between">
            <Checkbox
              colorScheme="green"
              pl="12px"
              size="lg"
              isChecked={checkList.length === cartList.length}
              onChange={onAllCheck}
            >
              전체 선택
            </Checkbox>
            <Button
              type="button"
              onClick={onDelete}
              isDisabled={!checkList.length}
            >
              선택 삭제
            </Button>
          </HStack>
          {cartList.map((product) => {
            return (
              <CartItem
                key={product.idx}
                setCheckList={setCheckList}
                checkList={checkList}
                {...product}
              />
            );
          })}
          <HStack
            position="fixed"
            bottom="0"
            borderTop="1px solid lightgray"
            bg="white"
            h="80px"
            w="100%"
            maxW="700px"
            justifyContent="space-between"
            pl="10"
          >
            <Text fontSize="2xl" fontWeight="400">
              총 금액 : <strong>{totalPrice.toLocaleString()}</strong>원
            </Text>
            <Box bg="blue.500" h="100%" w="23%" borderTop="1px solid lightgray">
              <Center
                h="100%"
                fontSize="xl"
                fontWeight="bolder"
                color="white"
                cursor="not-allowed"
              >
                결제 하기
              </Center>
            </Box>
          </HStack>
        </>
      ) : (
        <div>담은 상품이 없습니다.</div>
      )}
    </VStack>
  );
};
export default Reservations;
