import { FC, useCallback } from 'react';
import { Button, Container, HStack, Heading } from '@chakra-ui/react';

const HomeView: FC = () => {
  const handleLogout = useCallback(() => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }, []);

  const handleTeams = useCallback(() => {
    window.location.href = '/teams';
  }, []);

  return (
    <Container>
      <HStack spacing={8}>
        <Button onClick={handleTeams}>Times</Button>
        <Button onClick={handleLogout}>Logout</Button>
      </HStack>

      <Heading mt={10}>Home!</Heading>
    </Container>
  );
};

export default HomeView;
