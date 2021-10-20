import { ReactElement } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import lightTheme from '../../themes/light.theme';

const renderWithProviders = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
): RenderResult =>
  render(<ThemeProvider theme={lightTheme}>{ui}</ThemeProvider>, options);

export { renderWithProviders };
