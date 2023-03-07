import { BrowserRouter } from 'react-router-dom';
import Router from '@/Router';
import { ChakraProvider } from '@chakra-ui/react';
import CartContextProvider from './contexts/CartContextProvider';

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
