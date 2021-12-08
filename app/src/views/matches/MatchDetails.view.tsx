import { FC, useEffect } from 'react';

import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';

import ActionBar from 'src/components/ActionBar/ActionBar.component';
import useMatchDetails from 'src/hooks/matchDetails.hook';
import { matchTypeToText } from 'src/utils/matchType';

const MatchDetails: FC = () => {
  const { match, isLoading, loadTournamentDetails } = useMatchDetails();

  useEffect(() => {
    loadTournamentDetails();
  }, []);

  return (
    <ActionBar>
      <Container maxWidth="xl">
        {!isLoading && match && (
          <>
            <Container centerContent maxWidth="xl">
              <Heading color={'#276749'} size="lg">{`${matchTypeToText(
                match.type
              )} - ${match.tournament.name}`}</Heading>
            </Container>
            <Container mt="4">
              <Flex
                justifyContent="space-between"
                alignItems="end"
                width="100%"
                mt="1"
              >
                <Text
                  fontSize="xl"
                  fontWeight={
                    match.homeTeam?.id !== undefined &&
                    match.homeTeam?.id === match.winnerId
                      ? 'bold'
                      : 'normal'
                  }
                >
                  {match.homeTeam?.name ?? 'Não Definido'}
                </Text>
                <Flex alignItems="end">
                  {match.homeTeamGoals !== undefined && (
                    <Heading size="xl" mr="2">
                      {match.homeTeamGoals}
                    </Heading>
                  )}
                  <Heading fontSize="xl">X</Heading>
                  {match.visitingTeamGoals !== undefined && (
                    <Heading size="xl" ml="2">
                      {match.visitingTeamGoals}
                    </Heading>
                  )}
                </Flex>
                <Text
                  fontSize="xl"
                  fontWeight={
                    match.visitingTeam?.id !== undefined &&
                    match.visitingTeam?.id === match.winnerId
                      ? 'bold'
                      : 'normal'
                  }
                >
                  {match.visitingTeam?.name ?? 'Não Definido'}
                </Text>
              </Flex>
            </Container>
            <Container>
              <Heading size="lg" color={'#276749'} mt="4">
                Escalação
              </Heading>
              <Flex justifyContent="space-between">
                <Box mt="2">
                  <Text fontWeight="bold">{match.homeTeam?.owner.name}</Text>
                  {match.homeTeam?.players.map(player => (
                    <Text key={player.id}>{player.name}</Text>
                  ))}
                </Box>
                <Box mt="2">
                  <Text fontWeight="bold">
                    {match.visitingTeam?.owner.name}
                  </Text>
                  {match.visitingTeam?.players.map(player => (
                    <Text key={player.id}>{player.name}</Text>
                  ))}
                </Box>
              </Flex>
            </Container>
          </>
        )}
      </Container>
    </ActionBar>
  );
};

export default MatchDetails;
