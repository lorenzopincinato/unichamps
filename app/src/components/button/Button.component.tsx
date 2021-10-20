import styled, { css } from 'styled-components';

type ButtonProps = {
  block?: boolean;
  isLoading?: boolean;
};

const Button = styled.button<ButtonProps>`
  font-family: ${({ theme }) => theme.font.family};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: 20px;
  line-height: 36px;
  padding: 0 16px;
  outline: 0;
  cursor: pointer;

  border: solid 1px ${({ theme }) => theme.components.button.borderColor};
  background-color: ${({ theme }) => theme.components.button.backgroundColor};
  color: ${({ theme }) => theme.components.button.color};
  border-radius: ${({ theme }) => theme.border.radius};

  &:hover {
    order: solid 1px ${({ theme }) => theme.components.button.hoverBorderColor};
    background-color: ${({ theme }) =>
      theme.components.button.hoverBackgroundColor};
    color: ${({ theme }) => theme.components.button.hoverColor};
    border-radius: ${({ theme }) => theme.border.radius};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${({ block }) =>
    block &&
    css`
      display: block;
      width: 100%;
    `};

  ${({ theme, isLoading }) =>
    isLoading &&
    css`
      &:before {
        content: '';
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border-top: solid 2px ${theme.components.button.color};
        border-right: solid 2px transparent;
        animation: spinner 0.7s linear infinite;

        vertical-align: middle;
        margin-right: 10px;
        margin-top: -4px;
      }

      &:hover:before {
        border-top: solid 2px ${theme.components.button.hoverColor};
      }

      @keyframes spinner {
        to {
          transform: rotate(360deg);
        }
      }
    `}
`;

export default Button;
