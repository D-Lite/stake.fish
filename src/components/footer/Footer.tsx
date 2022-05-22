import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
    return (
        <>
            <Flex
                width="100%"
                justifyContent="center"
                alignItems="center"
                direction="column"
                boxShadow="0 -1px 6px -1px rgba(0, 0, 0, 0.1)"
                padding={4}
                bottom={"0"}
                height="10px"
                flexShrink={"0"}
                className="pageFooter"
                >
                <Flex width="100%" justifyContent="center" wrap="wrap">
                    <Text  className="footerText">© {new Date(Date.now()).getFullYear()} Stake.fish Assessment</Text>
                </Flex>
            </Flex>
        </>
    )
}

export default Footer;