import './App.css';
import { Homepage, Navbar } from './components/index';
import { Box, Flex } from '@chakra-ui/react';

function App() {
  return (
    <>
      <Box minH={"100vh"} minW={"100vw"}>
        <Navbar />
        {/* <Box> */}
          <Flex minH={"90vh"} minW={"100vw"} align={"center"} justify={"center"}>
            <Homepage />
          </Flex>
        {/* </Box> */}
      </Box>
    </>
  );
}

export default App;
