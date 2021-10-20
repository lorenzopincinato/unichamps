import styled, { css } from 'styled-components';

type InputProps = {
  block?: boolean;
};

const Input = styled.input<InputProps>`
  font-size: 14px;
  line-height: 36px;
  padding: 0 16px;

  font-family: ${({ theme }) => theme.font.family};
  font-weight: ${({ theme }) => theme.font.weight.regular};

  color: ${({ theme }) => theme.components.input.color};
  background-color: ${({ theme }) => theme.components.input.backgroundColor};
  border: solid 1px ${({ theme }) => theme.components.input.borderColor};
  border-radius: ${({ theme }) => theme.border.radius};

  outline: 0;

  &:focus {
    border-color: ${({ theme }) => theme.components.input.focusBorderColor};
  }

  &::placeholder {
    color: ${({ theme }) => theme.components.input.placeholderColor};
  }

  ${({ block }) =>
    block &&
    css`
      display: block;
      width: 100%;
    `}
`;

export default Input;
