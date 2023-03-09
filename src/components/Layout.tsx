import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import { Center, VStack } from '@chakra-ui/react';

const Layout = () => {
  return (
    <VStack my="10">
      <Nav />
      <Center>
        <Outlet />
      </Center>
    </VStack>
  );
};

export default Layout;
