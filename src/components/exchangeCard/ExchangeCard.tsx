import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Flex, Box, Button, Link, Image, Text } from "@chakra-ui/react";

type Props = {
    logo? : string;
    name? : string;
    country? : string;
    trust_rank? : string;
    website? : string;
}

const ExchangeCard = ({logo, name, country, trust_rank, website}: Props) => {
    return (
        <Flex w={"90vw"} borderColor={"brand.200"} my={"5"} border="1px solid" borderRadius={"10"} p={4}>
        <Flex w={"inherit"} justifyContent={"space-between"} alignItems={"center"} fontSize={"12px"}>
            <Flex align={"center"} justify={"center"}>
                <Box>
                    <Button colorScheme={"brand.100"}>
                        <Image
                            src={logo}
                            borderRadius='full'
                            boxSize='20px'
                            alt={name}
                        />
                    </Button>
                </Box>
                <Flex flexDir={"column"} justify={"center"} ml={"3"}>
                    <Text>
                        {name}
                    </Text>
                    <Text>
                        {country}
                    </Text>
                </Flex>
            </Flex>
            <Flex flexDir={"column"} justify={"center"}>
                <Text>
                    Trust Rank: {trust_rank}
                </Text>
                <Text>
                <Link href={website} isExternal>
                    Website <ExternalLinkIcon mx='2px' />
                </Link>
                </Text>
            </Flex>
        </Flex>
    </Flex>
    )
}

export default ExchangeCard;