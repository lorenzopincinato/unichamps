import { ReactElement } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';

const renderWithProviders = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
): RenderResult => render(<ChakraProvider>{ui}</ChakraProvider>, options);

export { renderWithProviders };
