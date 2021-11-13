import { FC, useCallback } from 'react';
import { Button, Container } from '@chakra-ui/react';

const HomeView: FC = () => {
  const handleLogout = useCallback(() => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }, []);

  return (
    <Container>
      Home!
      <Button onClick={handleLogout}>Logout</Button>
    </Container>
  );
};

export default HomeView;
