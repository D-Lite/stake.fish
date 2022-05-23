import {
    Flex,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
const Error = () => {
return (
    <>
        <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        py={12}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack
            boxShadow={'2xl'}
            bg={useColorModeValue('white', 'gray.700')}
            rounded={'xl'}
            p={10}
            spacing={8}
            align={'center'}>
        <Stack align={'center'} spacing={2}>
          <Text fontSize={'lg'} color={'gray.500'}>
            Error 404 | Page not found
          </Text>
        </Stack> 
      </Stack>
    </Flex>
    </>
)
}

export default Error;