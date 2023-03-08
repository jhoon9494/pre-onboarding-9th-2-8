import { RootState, useAppDispatch, useAppSelector } from '@/store';
import { getProducts } from '@/store/slices/productSlice';
import { Input, Select, Button, VStack, HStack } from '@chakra-ui/react';
import { FormEvent, useEffect, useState } from 'react';

const Filter = () => {
  const [placeList, setPlaceList] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [currPlace, setCurrPlace] = useState('');
  const { products } = useAppSelector((state: RootState) => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setPlaceList(
      Array.from(new Set(products.map((prod) => prod.spaceCategory))),
    );
  }, [products]);

  const handleFilter = (e: FormEvent) => {
    e.preventDefault();
    console.log('필터링 요청');
  };

  const handleReset = () => {
    setMinPrice('');
    setMaxPrice('');
    setCurrPlace('');
    dispatch(getProducts());
  };

  return (
    <VStack as="section" p={4}>
      <form onSubmit={handleFilter}>
        <HStack>
          <label htmlFor="min">
            최소 금액
            <Input
              id="min"
              type="number"
              placeholder="최소 금액"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </label>
          <label htmlFor="max">
            최대 금액
            <Input
              id="max"
              type="number"
              placeholder="최대 금액"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </label>
          <label htmlFor="place">
            공간 선택
            <Select
              id="place"
              placeholder="지역을 선택해주세요"
              value={currPlace}
              onChange={(e) => setCurrPlace(e.target.value)}
            >
              {placeList.map((place) => {
                return (
                  <option key={place} value={place}>
                    {place}
                  </option>
                );
              })}
            </Select>
          </label>
          <Button type="submit">검 색</Button>
          <Button type="button" onClick={handleReset}>
            초 기 화
          </Button>
        </HStack>
      </form>
    </VStack>
  );
};
export default Filter;
