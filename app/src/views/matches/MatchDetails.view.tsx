import { FC, useCallback, useEffect } from 'react';

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react';

import ActionBar from 'src/components/ActionBar/ActionBar.component';
import useMatchDetails from 'src/hooks/matchDetails.hook';
import { matchTypeToText } from 'src/utils/matchType';
import { getId } from 'src/io/localStorage';

const MatchDetails: FC = () => {
  const {
    match,
    isLoading,
    loadMatchDetails,
    homeTeamGoals,
    visitingTeamGoals,
    setHomeTeamGoals,
    setVisitingTeamGoals,
    updateMatch,
    updateMatchIsLoading,
  } = useMatchDetails();

  useEffect(() => {
    loadMatchDetails();
  }, []);

  const handleHomeTeamGoalsChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setHomeTeamGoals(parseInt(e.target.value));
    },
    [setHomeTeamGoals]
  );

  const handleVisitingTeamGoals = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setVisitingTeamGoals(parseInt(e.target.value));
    },
    [setVisitingTeamGoals]
  );

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();
      updateMatch();
    },
    [visitingTeamGoals, homeTeamGoals, updateMatch]
  );

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
              <form onSubmit={handleSubmit}>
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
                    {!match.winnerId &&
                      match.tournament.ownerId === getId() && (
                        <Input
                          id="homeTeamGoals"
                          type="number"
                          placeholder="0"
                          value={homeTeamGoals}
                          onChange={handleHomeTeamGoalsChange}
                        />
                      )}
                    <Heading fontSize="xl">X</Heading>
                    {match.visitingTeamGoals !== undefined && (
                      <Heading size="xl" ml="2">
                        {match.visitingTeamGoals}
                      </Heading>
                    )}
                    {!match.winnerId &&
                      match.tournament.ownerId === getId() && (
                        <Input
                          id="visitingTeamGoals"
                          type="number"
                          placeholder="0"
                          value={visitingTeamGoals}
                          onChange={handleVisitingTeamGoals}
                        />
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
                {!match.winnerId && match.tournament.ownerId === getId() && (
                  <Button
                    mt={4}
                    w="100%"
                    colorScheme="green"
                    isLoading={updateMatchIsLoading}
                    isDisabled={
                      !homeTeamGoals ||
                      !visitingTeamGoals ||
                      homeTeamGoals === visitingTeamGoals
                    }
                    type="submit"
                  >
                    Salvar Resultado
                  </Button>
                )}
              </form>
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
