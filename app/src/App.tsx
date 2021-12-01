import { FC } from 'react';
import {
  ChakraProvider,
  ThemeProvider,
  theme,
  ColorModeProvider,
} from '@chakra-ui/react';

import Routes from './Routes';

const App: FC = () => (
  <ChakraProvider>
    <ThemeProvider theme={theme}>
      <ColorModeProvider
        options={{ initialColorMode: 'light', useSystemColorMode: false }}
      >
        <Routes />
      </ColorModeProvider>
    </ThemeProvider>
  </ChakraProvider>
);

export default App;
