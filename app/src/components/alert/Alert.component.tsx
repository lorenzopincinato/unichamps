import styled from 'styled-components';

import { Paragraph } from '../typography/Typograph.component';

type AlertPros = {
  type?: 'primary' | 'error';
};

const Alert = styled(Paragraph)<AlertPros>`
  background-color: ${({ theme, type }) =>
    type
      ? theme.components.alert[type].backgroundColor
      : theme.components.alert.primary.backgroundColor};
  color: ${({ theme, type }) =>
    type
      ? theme.components.alert[type].color
      : theme.components.alert.primary.color};

  border: solid 1px
    ${({ theme, type }) =>
      type
        ? theme.components.alert[type].color
        : theme.components.alert.primary.color};

  border-radius: ${({ theme }) => theme.border.radius};
  padding: 10px;
`;

export default Alert;
