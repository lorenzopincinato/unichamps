import { FC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import Routes from './Routes';

const App: FC = () => (
  <ChakraProvider>
    <Routes />
  </ChakraProvider>
);

export default App;
