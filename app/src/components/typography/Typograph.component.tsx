import styled, { css } from 'styled-components';

type BaseTypographCSSProps = {
  color?: 'primary' | 'secondary';
};

export const BaseTypographCSS = css<BaseTypographCSSProps>`
  font-family: ${({ theme }) => theme.font.family};
  color: ${({ theme, color }) =>
    color ? theme.font.color[color] : theme.font.color.primary};
`;

export const Title = styled.h2`
  ${BaseTypographCSS}
  font-size: 32px;
  line-height: 42px;
`;

export const Paragraph = styled.p`
  ${BaseTypographCSS}
  font-size: 14px;
  line-height: 20px;
`;
