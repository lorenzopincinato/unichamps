import { FC, useEffect } from 'react';

import { Container, Heading, Text } from '@chakra-ui/react';

import ActionBar from 'src/components/ActionBar/ActionBar.component';
import useTournamentDetails from 'src/hooks/tournamentDetails.hook';
import MatchItem from 'src/components/MatchItem.component';
import TeamItem from 'src/components/TeamItem.component';

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
          <>
            <Container centerContent>
              <Heading color={'#276749'}>{tournament.name}</Heading>
            </Container>
            <Container>
              <Heading size="md" color={'#276749'} mt="4">
                Dono
              </Heading>
              <Text>{tournament.owner.name}</Text>
            </Container>
            <Container>
              <Heading size="lg" color={'#276749'} mt="4">
                Jogos
              </Heading>
              {tournament?.matches.map(match => (
                <MatchItem key={match.id} {...match} showTournament={false} />
              ))}
            </Container>
            <Container>
              <Heading size="lg" color={'#276749'} mt="4">
                Times
              </Heading>
              {tournament?.teams.map(team => (
                <TeamItem key={team.id} {...team} />
              ))}
            </Container>
          </>
        )}
      </Container>
    </ActionBar>
  );
};

export default TournamentDetails;
