import { extendTheme, ThemeConfig } from '@chakra-ui/react';

import styles from './styles';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}


export const BaseTheme = extendTheme({
  config,
  colors: {
    brand: {
      100: "#f7fafc",
      300: "#1c18f5",
      900: "#1a202c",
    }
  },
  fonts: {
    body: 'Inter, sans-serif',
  },
  ...styles,
});

