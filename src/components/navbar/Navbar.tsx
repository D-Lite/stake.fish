import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
    Button,
    Container,
    Flex,
    useColorMode,
  } from '@chakra-ui/react';
  
  
  const Navbar = (): JSX.Element => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <>
        <Container maxW="1400px" w="95%" py={{ base: '1.5rem', lg: '2.5rem' }} data-testid="navbar">
          <Flex justifyContent="space-between" alignItems="center">
            CoinGecko
            <Button onClick={toggleColorMode} variant={"unstyled"}>
                {colorMode === 'light' ? 
                (<MoonIcon />) : (<SunIcon />)}
            </Button>
          </Flex>
        </Container>
      </>
    );
  };
  
  export default Navbar;
  