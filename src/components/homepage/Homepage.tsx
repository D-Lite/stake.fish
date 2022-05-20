import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Table, Image, TableContainer, Tbody, Td, Text, Th, Thead, Tr, Flex, Button, Link } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { getExchanges } from "../../apis/coingecko";
import { resultType } from "../../types/resultType";
import ExchangeCard from "../exchangeCard/ExchangeCard";

const Homepage = () => {
    
    const [isStatementLoading, setIsStatementLoading] = useState<boolean>(false);
    const [result, setResult] = useState<resultType[]>([]);

    const getAllExchanges = useCallback(async () => {
        setIsStatementLoading(true);
        const response = await getExchanges()!;
        setIsStatementLoading(false)

        setResult(response?.data)
    }, [])

    useEffect(() => {
        const getResult =async () => {
            try {
                const exchanges = await getAllExchanges();
            } catch (error) {
                console.log(error)
            }
        };
        getResult();
    }, [
        getAllExchanges
    ])

    return (
        <>
            {
                !isStatementLoading ? 
                <Box>
                    {/* <TableContainer maxW={"100vw"}>
                        <Table variant='striped' colorScheme='brand' fontSize={"10px"}>
                            <Thead>
                            <Tr>
                                <Th fontSize={"10px"}>Exchange</Th>
                                <Th fontSize={"10px"}>Country</Th>
                                <Th fontSize={"10px"}>URL</Th>
                                <Th fontSize={"10px"}>Rank</Th>
                            </Tr>
                            </Thead>
                            <Tbody>
                            {result?.map((exchange: any) => 
                                <Tr>
                                    <Td>
                                        <Flex align={"center"} justifyContent={"flex-start"}>
                                            <Image
                                                src={exchange?.image}
                                                borderRadius='full'
                                                boxSize='30px'
                                                alt={exchange.id}
                                            />
                                            <Text ml={"2"}>
                                                {exchange?.name}
                                            </Text>
                                        </Flex>
                                    </Td>
                                    <Td>{exchange?.country}</Td>
                                    <Td>{exchange?.url}</Td>
                                    <Td>{exchange?.trust_score_rank}</Td>
                                </Tr>
                                )}
                            </Tbody>
                        </Table>
                    </TableContainer> */}
                {result?.map((exchange: any) => 
                    <ExchangeCard 
                        logo={exchange?.image} 
                        name={exchange?.name} 
                        country={exchange?.country} 
                        website={exchange?.url} 
                        trust_rank={exchange?.trust_score_rank} 
                    />
                )}

                </Box> :
                <Box>
                    "No result yet"
                </Box>
            }
            
        </>
    );
}

export default Homepage;