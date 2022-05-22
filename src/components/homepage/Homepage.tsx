import { Box } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { ExchangeCard, PageSkeleton } from "..";
import { getExchanges } from "../../apis/coingecko";
import { resultType } from "../../types/resultType"; 

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
                await getAllExchanges();
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
                <Box className="exchangeList">
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
                <Box minH={"80vh"}>
                    <PageSkeleton isLoading={true}/>
                </Box>
            }
            
        </>
    );
}

export default Homepage;