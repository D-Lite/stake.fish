import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
    Button,
    Container,
    Flex,
    useColorMode,
    Text
  } from '@chakra-ui/react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link as RouterLink, useLocation } from "react-router-dom";
  
  
  const Navbar = (): JSX.Element => {
    const { colorMode, toggleColorMode } = useColorMode();
    const checkURL = useLocation()

    return (
      <>
        <Container maxW="1400px" w="95%" py={{ base: '1.5rem', lg: '2.5rem' }} className='pageNavbar'>
          <Flex justifyContent="space-between" alignItems="center">
          {
            checkURL.pathname !== "/" &&
            <RouterLink to={`/`}>
              {/* only shows when on the exchange page */}
              <Button variant={"outline"} color={"brand.300"}>
                <FaArrowLeft />
            </Button>
            </RouterLink>           
          }
           <Text color="brand.300" fontWeight={"bold"} fontSize={"xl"}>
              <RouterLink to={`/`}>
                Stake.fish
              </RouterLink>
            </Text>
            {/* theme toggle from light to dark mode */}
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
  