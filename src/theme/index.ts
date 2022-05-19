import colors from './colors';
import typography from './typography';
import styles from './styles';

import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const theme = extendTheme({
    config,
    ...colors,
    ...typography,
    ...styles,

});

export default theme;
