import { Box, Flex, Text, Image, useColorMode, Divider, Spacer } from "@chakra-ui/react";
import { useState, useCallback, useEffect } from "react";
import {  useParams } from "react-router-dom";
import { getOneExchange } from "../apis/coingecko";
import { ExchangeInfo } from "../types/exchangeInfo";

import { FaFacebookF, FaReddit, FaSlack, FaTelegram, FaTwitter } from "react-icons/fa";
import { SocialIcon, PageSkeleton } from "../components";



const Exchange = () => {


  const { id } = useParams<"id">();

  const [isExchangeLoading, setIsExchangeLoading] = useState<boolean>(false);
  const [result, setResult] = useState<ExchangeInfo>();

  const getExchange = useCallback(async () => {
      setIsExchangeLoading(true);
      const response = await getOneExchange(id!);
      setIsExchangeLoading(false)

      setResult(response?.data)
  }, [])

  useEffect(() => {
      const getResult =async () => {
          try {
              const singleExchange = await getExchange();
          } catch (error) {
              console.log(error)
          }
      };
      getResult();
  }, [
      getExchange
  ])

  const { colorMode } = useColorMode();

    return (
        <>
        {
            !isExchangeLoading ?
            <Box  
            minH="80vh"
            flexDirection="column"
        >
            <Box as="div" mx={"5vw"} className="exchangeInfoPage">   
                <Box h={"25vh"} borderColor={"gray.50"} 
                    borderRadius={"20"} 
                    background={colorMode === "light" ? "rgba(255, 255, 255, 0.4)" : "linear-gradient(to right, #3494e6, #ec6ead)" }
                    boxShadow={"0 4px 30px rgba(0, 0, 0, 0.1)"}
                    backdropFilter= "blur(30px)"
                    border= {colorMode === "light" ? "2px solid rgba(0,0,0,0.2)" : ""}
                    zIndex= {"2"}
                    > 
                    <Flex align={"center"} justify={"flex-start"}>
                        <Image
                            src={result?.image}
                            boxSize='30px'
                            alt={result?.name}
                            borderRadius="full"
                            m={4}
                        />
                    </Flex>
                    <Flex align={"center"} justify={"center"} flexDir={"column"} color={"black"}>
                        <Text as={"samp"}>{id}</Text>
                        <Text fontWeight={"bold"}>{result?.name}</Text>
                    </Flex>
                    <Flex align={"center"} justify={"center"} flexDir={"column"} color={"black"} mt="3">
                        <Text>Trust Rank: {result?.trust_score_rank}</Text>
                    </Flex>
                </Box>
                <Flex align={"center"} mt={"4"} justify={"center"}>
                    {/* custom social media component, performs the function needed for this application */}
                    <SocialIcon 
                        url={result?.facebook_url && (result?.facebook_url.includes("http") ? result?.facebook_url : `https://facebook.com/${result?.facebook_url}`)} 
                        isDisabled={result?.facebook_url === ""} mainIcon={FaFacebookF} baseColor={"blue"}
                    />
                    <SocialIcon 
                        url={result?.reddit_url && (result?.reddit_url.includes("http") ? result?.reddit_url : `https://reddit.com/r/${result?.reddit_url}`) } 
                        isDisabled={result?.reddit_url === ""} mainIcon={FaReddit} baseColor={"red"}
                    />
                    <SocialIcon 
                        url={result?.telegram_url && (result?.telegram_url.includes("http") ? result?.telegram_url : `https://t.me/joinchat/${result?.telegram_url}`)} 
                        isDisabled={result?.telegram_url === ""} mainIcon={FaTelegram} baseColor={"blue"}
                    />
                    <SocialIcon 
                        url={result?.slack_url} 
                        isDisabled={result?.slack_url === ""} mainIcon={FaSlack} baseColor={"purple"}
                    />
                    <SocialIcon 
                        url={result?.twitter_handle && (result?.twitter_handle.includes("http") ? result?.twitter_handle : `https://twitter.com/${result?.twitter_handle}`)} 
                        isDisabled={result?.twitter_handle === ""} mainIcon={FaTwitter} baseColor={"blue"}
                    />
                </Flex>
                
                <Box borderRadius={"20"} mt="4"  
                bgGradient={'linear-gradient(to right, #3494e6, #ec6ead)'}> 
                    <Flex align={"center"} justify={"center"} p="3" flexDir="column">
                        <Text>Trade volume in the past 24 hours</Text>
                        <Text fontWeight={"extrabold"} fontSize={"lg"}>{(result?.trade_volume_24h_btc)?.toFixed(3)}</Text>
                    </Flex>
                </Box>

                <Divider orientation='horizontal' colorScheme={"blackAlpha"} my={"3"}/>
                    <Box>
                        <Text fontWeight={"bold"} fontSize={"xl"}>Description</Text>
                        <Text as={"p"} fontSize={"small"}>
                        {result?.description ? result?.description : "Description not available at the moment. Thank you!"}
                        </Text>
                    </Box>


                <Divider orientation='horizontal' colorScheme={"blackAlpha"} my={"3"}/>

                <Flex gap={{base:"1"}}  direction={{ base: 'column', md: 'row' }}>
                    <Flex align={"baseline"}>
                        <Text fontSize={"sm"}>Country: {''}</Text>
                        <Text fontWeight={"bold"} fontSize={"sm"} mx={"2"}>
                        {result?.country}
                        </Text>
                    </Flex>
                    <Spacer />
                    <Flex align={"baseline"}>
                        <Text fontSize={"sm"}>Year Founded: {''}</Text>
                        <Text fontWeight={"bold"} fontSize={"sm"} mx={"2"}>
                        {result?.year_established}
                        </Text>
                    </Flex>
                    <Spacer />

                    <Flex align={"baseline"}>
                        <Text fontSize={"sm"}>Centralized: {''}</Text>
                        <Text fontWeight={"bold"} fontSize={"sm"} mx={"2"}>
                        {result?.centralized === true ? "True" : "False"}
                        </Text>
                    </Flex>
                </Flex>
                                
                {
                    result?.alert_notice && <>
                    <Divider orientation='horizontal' colorScheme={"blackAlpha"} my={"3"}/>

                    <Box>
                        <Text fontWeight={"bold"} fontSize={"xl"} color={"red.500"}>Alert Notice</Text>
                        <Text as={"p"} fontSize={"small"}>
                        {result?.alert_notice}
                        </Text>
                    </Box>
                    </>
                }

            </Box>
            </Box>
            : 
            <Flex justify={"center"} minH={"80vh"}>
                <PageSkeleton isLoading={true}/>
            </Flex>
        }
        </>
    )
}

export default Exchange;