import { FC } from 'react';
import styled from 'styled-components';
import SharedContainer from '../layout/Container.component';

const Wrapper = styled.header`
  padding: 20px;
  background-color: transparent;
`;

const Container = styled(SharedContainer)`
  display: flex;
  justify-content: center;
  position: relative;
`;

const Header: FC = () => {
  return (
    <Wrapper>
      <Container>Header</Container>
    </Wrapper>
  );
};

export default Header;
