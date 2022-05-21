import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
    Button,
    Container,
    Flex,
    useColorMode,
    Text
  } from '@chakra-ui/react';
import { Link as RouterLink, useParams } from "react-router-dom";
  
  
  const Navbar = (): JSX.Element => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { id } = useParams<"id">();

    return (
      <>
        <Container maxW="1400px" w="95%" py={{ base: '1.5rem', lg: '2.5rem' }} data-testid="navbar">
          <Flex justifyContent="space-between" alignItems="center">
          {
            id !== undefined &&
            <RouterLink to={`/`}>
              Backs
            </RouterLink>           
          }
           <Text color="brand.300" >
              <RouterLink to={`/`}>
                Stake.fish
              </RouterLink>
            </Text>
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
  