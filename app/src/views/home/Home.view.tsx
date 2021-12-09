import { FC, useEffect } from 'react';

import { Container, Heading } from '@chakra-ui/react';

import ActionBar from 'src/components/ActionBar/ActionBar.component';
import useMatches from 'src/hooks/matches.hook';
import MatchItem from 'src/components/MatchItem.component';

const HomeView: FC = () => {
  const { matches, isLoading, loadMatches } = useMatches();

  useEffect(() => {
    loadMatches();
  }, []);

  return (
    <ActionBar>
      <Container maxWidth="2xl">
        <Container centerContent>
          <Heading color={'#276749'}>Últimos Jogos</Heading>
        </Container>

        {!isLoading &&
          matches &&
          matches.map(match => (
            <MatchItem key={match.id} {...match} showTournament={true} />
          ))}
      </Container>
    </ActionBar>
  );
};

export default HomeView;
