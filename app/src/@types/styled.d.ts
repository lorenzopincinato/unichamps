import 'styled-components';

import { Color } from '../themes/tokens/color.token';
import { Font } from '../themes/tokens/font.token';
import { Border } from '../themes/tokens/border.token';
import { Breakpoint } from '../themes/tokens/breakpoint.token';
import { ThemeType } from '../themes/tokens/theme.token';
import { Background } from '../themes/tokens/background.token';
import { ButtonToken } from '../themes/tokens/button.token';
import { InputToken } from '../themes/tokens/input.token';
import { CardToken } from '../themes/tokens/card.token';
import { AlertToken } from '../themes/tokens/alert.token';

declare module 'styled-components' {
  export interface DefaultTheme {
    theme: ThemeType;

    color: Color;
    font: Font;
    border: Border;
    breakpoint: Breakpoint;
    background: Background;

    components: {
      button: ButtonToken;
      input: InputToken;
      card: CardToken;
      alert: AlertToken;
    };
  }
}
