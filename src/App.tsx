import './App.css';
import { Homepage, Navbar } from './components/index';
import { Box, Button, Flex } from '@chakra-ui/react';

function App() {
  return (
    <>
      <Box minH={"100vh"} maxW={"100vw"}>
        <Navbar />
        <Box>
          <Flex align={"center"} justify={"center"}>
            <Homepage />
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default App;
