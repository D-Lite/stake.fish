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
                {result?.map((exchange: any) => 
                    <ExchangeCard 
                        id={exchange?.id}
                        logo={exchange?.image} 
                        name={exchange?.name} 
                        country={exchange?.country} 
                        website={exchange?.url} 
                        trust_rank={exchange?.trust_score_rank} 
                        key={exchange?.id}
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