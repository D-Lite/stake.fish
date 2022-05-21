import { Icon } from "@chakra-ui/icons"
import { Box, IconButton, Link } from "@chakra-ui/react"
import { FaMediumM } from "react-icons/fa"

type Props = {
    isDisabled?: boolean;
    url?: string;
    baseColor?: string
    mainIcon?: any
}

const SocialIcon = ({isDisabled, url, baseColor, mainIcon}: Props) => {
    return (
        <Box px="2">
            <Link href={url === "" ? "" : url} isExternal={isDisabled ? false : true}>
            <IconButton
                variant='outline'
                colorScheme={baseColor}
                aria-label='Send email'
                icon={<Icon as={mainIcon} />}
                isDisabled={isDisabled}
            />
            </Link>
        </Box>
    )
}

export default SocialIcon