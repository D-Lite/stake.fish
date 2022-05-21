import { Box, Flex, Skeleton, useMediaQuery } from '@chakra-ui/react';

type Props = {
  isLoading: boolean;
};

const PageSkeleton = ({ isLoading }: Props): JSX.Element => {
  const [isTab1] = useMediaQuery('(min-width:741px)');
  const [isTab2] = useMediaQuery('(max-width:1180px)');
  return (
    <>
      {isLoading && (
        <Flex mb="50px" data-testid="analysis-skeleton">
          <Box>
            <Skeleton
              height={isTab1 && isTab2 ? '350px' : { base: '30vh', md: '567px' }}
              w={isTab1 && isTab2 ? '65vw' : { base: '90vw', md: '838px' }}
              rounded="8px"
            ></Skeleton>
            <Skeleton
              height={{ base: '15vh', md: '114px' }}
              w={isTab1 && isTab2 ? '65vw' : { base: '90vw', md: '838px' }}
              mt="26px"
              rounded="8px"
            ></Skeleton>
            <Skeleton
              height="15vh"
              w={isTab1 && isTab2 ? '65vw' : { base: '90vw' }}
              mt="26px"
              rounded="8px"
              display={isTab1 && isTab2 ? 'flex' : { base: 'flex', md: 'none' }}
            ></Skeleton>
          </Box>
          <Skeleton
            height="364px"
            w="405px"
            ml="37px"
            rounded="8px"
            display={isTab1 && isTab2 ? 'none' : { base: 'none', md: 'flex' }}
          ></Skeleton>
        </Flex>
      )}
    </>
  );
};

export default PageSkeleton;
