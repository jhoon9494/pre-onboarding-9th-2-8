import { HStack, Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  return (
    <HStack gap="10" alignItems="flex-start">
      <Box
        onClick={() => navigate('/main')}
        cursor="pointer"
        _hover={{ fontWeight: 'bold' }}
      >
        Home
      </Box>
      <Box
        onClick={() => navigate('/reservations')}
        cursor="pointer"
        _hover={{ fontWeight: 'bold' }}
      >
        Cart
      </Box>
    </HStack>
  );
};

export default Nav;
