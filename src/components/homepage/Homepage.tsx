import { Box } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
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
                    {result?.map(({id, name}: any) => <li key={id}>{name}</li>)}
                </Box> :
                <Box>
                    "No result yet"
                </Box>
            }
            
        </>
    );
}

export default Homepage;