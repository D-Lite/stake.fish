import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Flex, Box, Button, Image, Text, Link, LinkOverlay, LinkBox } from "@chakra-ui/react";
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
            <Flex w={"90vw"} borderColor={"brand.200"} my={"5"} border="1px solid" borderRadius={"10"} p={4}>
                <Flex w={"inherit"} justifyContent={"space-between"} alignItems={"center"} fontSize={"12px"}>
                    <Box ml={-4}>
                        <RouteLink
                            style={{ display: "block" }}
                            to={`/exchange/${id}`}
                            key={id}
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
                            <LinkOverlay>
                            Website <ExternalLinkIcon mx='2px' />
                            </LinkOverlay>
                        </Link>
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </LinkBox>

    )
}

export default ExchangeCard;