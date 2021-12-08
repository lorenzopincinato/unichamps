import { FC, useEffect } from 'react';

import { Container, Heading, Text } from '@chakra-ui/react';

import ActionBar from 'src/components/ActionBar/ActionBar.component';
import useTeamDetails from 'src/hooks/teamDetails.hook';

const TeamDetails: FC = () => {
  const { team, isLoading, loadTeamDetails } = useTeamDetails();

  useEffect(() => {
    loadTeamDetails();
  }, []);

  return (
    <ActionBar>
      <Container>
        {!isLoading && team && (
          <Container centerContent>
            <Heading color={'#276749'}>{team.name}</Heading>
            <br />

            <Text fontSize="lg" fontWeight="bold">
              Dono:
            </Text>
            <Text
              color={'#4A5568'}
              backgroundColor={'#F7FAFC'}
              fontSize="xl"
              mt="2"
              padding="1"
            >
              {team.owner.name}
            </Text>
            <br />

            <Text fontSize="lg" fontWeight="bold">
              Jogadores:
            </Text>
            {team.players.map(player => {
              return (
                <Text
                  key={player.id}
                  color={'#4A5568'}
                  backgroundColor={'#F7FAFC'}
                  fontSize="xl"
                  mt="2"
                  padding="1"
                >
                  {player.name}
                </Text>
              );
            })}
          </Container>
        )}
      </Container>
    </ActionBar>
  );
};

export default TeamDetails;
