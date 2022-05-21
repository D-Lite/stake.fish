import { Homepage } from '../components/index';
import { Box, Flex } from '@chakra-ui/react';

function Home() {
  return (
    <>
        <Box>
            <Flex align={"center"} justify={"center"}>
            <Homepage />
            </Flex>
        </Box>
    </>
  );
}

export default Home;
