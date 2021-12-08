import { FC, useEffect } from 'react';

import { Container, Heading } from '@chakra-ui/react';

import ActionBar from 'src/components/ActionBar/ActionBar.component';
import useTournamentDetails from 'src/hooks/tournamentDetails.hook';

const TournamentDetails: FC = () => {
  const { tournament, isLoading, loadTournamentDetails } =
    useTournamentDetails();

  useEffect(() => {
    loadTournamentDetails();
  }, []);

  return (
    <ActionBar>
      <Container>
        {!isLoading && tournament && (
          <Container centerContent>
            <Heading color={'#276749'}>{tournament.name}</Heading>
          </Container>
        )}
      </Container>
    </ActionBar>
  );
};

export default TournamentDetails;
