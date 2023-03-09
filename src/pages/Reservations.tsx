import CartItem from '@/components/CartItem';
import { ICart } from '@/interface/product';
import { getTotalPrice } from '@/lib/utils/cartHelpers';
import { useAppDispatch, useAppSelector } from '@/store';
import { deletoToCart } from '@/store/slices/cartSlice';
import {
  Box,
  Button,
  Checkbox,
  Heading,
  HStack,
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
    <VStack as="section" p={4} gap={2}>
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
          <Box>총 금액 :{totalPrice.toLocaleString()}원</Box>
        </>
      ) : (
        <div>담은 상품이 없습니다.</div>
      )}
    </VStack>
  );
};
export default Reservations;
