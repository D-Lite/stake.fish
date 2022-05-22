import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Flex, Box, Button, Image, Text, Link, LinkBox } from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom"

type Props = {
    id? : string;
    logo? : string;
    name? : string;
    country? : string;
    trust_rank? : string;
    website? : string;
}

const ExchangeCard = ({logo, name, country, trust_rank, website, id}: Props) => {

    return (
        <LinkBox>
            <Flex w={{base: "90vw", md: "40vw"}} my={"5"} border="1px solid" borderRadius={"10"} borderColor="brand.300" p={4}>
                <Flex w={"inherit"} justifyContent={"space-between"} alignItems={"center"} fontSize={"12px"}>
                    <Box ml={-4}>
                        <RouteLink
                            style={{ display: "block" }}
                            to={`/exchange/${id}`}
                            key={id}
                            className="openExchangePage"
                            >
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
                                    <Flex flexDir={"column"} justify={"center"}>
                                        <Text>
                                            {name}
                                        </Text>
                                        <Text>
                                            {country}
                                        </Text>
                                    </Flex>
                                </Flex>
                        </RouteLink>
                    </Box>
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
        </LinkBox>

    )
}

export default ExchangeCard;