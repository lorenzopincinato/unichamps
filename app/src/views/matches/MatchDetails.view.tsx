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
      if (e.target.value === '') {
        setHomeTeamGoals(0);
      } else {
        setHomeTeamGoals(parseInt(e.target.value));
      }
    },
    [setHomeTeamGoals]
  );

  const handleVisitingTeamGoals = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value === '') {
        setVisitingTeamGoals(0);
      } else {
        setVisitingTeamGoals(parseInt(e.target.value));
      }
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
      <Container maxWidth="2xl">
        {!isLoading && match && (
          <>
            <Container centerContent maxWidth="2xl">
              <Heading color={'#276749'} size="lg">
                <a
                  href={`/tournaments/${match.tournament.id}`}
                >{`${matchTypeToText(match.type)} - ${
                  match.tournament.name
                }`}</a>
              </Heading>
            </Container>
            <Container maxWidth="2xl" mt="4">
              <form onSubmit={handleSubmit}>
                <Flex
                  justifyContent="space-between"
                  alignItems="end"
                  width="100%"
                  mt="1"
                >
                  <Text
                    fontSize="xl"
                    width="35%"
                    fontWeight={
                      match.homeTeam?.id !== undefined &&
                      match.homeTeam?.id === match.winnerId
                        ? 'bold'
                        : 'normal'
                    }
                  >
                    {match.homeTeam?.name ?? 'Não Definido'}
                  </Text>
                  <Flex alignItems="end" width="30%" justifyContent="center">
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
                          width="3.5rem"
                          textAlign="center"
                          mr="3"
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
                          width="3.5rem"
                          textAlign="center"
                          ml="2"
                        />
                      )}
                  </Flex>
                  <Text
                    fontSize="xl"
                    textAlign="end"
                    width="35%"
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
                      homeTeamGoals === undefined ||
                      visitingTeamGoals === undefined ||
                      homeTeamGoals === null ||
                      visitingTeamGoals === null ||
                      homeTeamGoals < 0 ||
                      visitingTeamGoals < 0 ||
                      homeTeamGoals === visitingTeamGoals
                    }
                    type="submit"
                  >
                    Salvar Resultado
                  </Button>
                )}
              </form>
            </Container>
            <Container maxWidth="2xl">
              <Container centerContent>
                <Heading size="lg" color={'#276749'} mt="8">
                  Escalação
                </Heading>
              </Container>

              <Flex justifyContent="space-between">
                <Box mt="2">
                  <Text fontWeight="bold">{`Dono: ${match.homeTeam?.owner.name}`}</Text>
                  {match.homeTeam?.players.map(player => (
                    <Text key={player.id}>{player.name}</Text>
                  ))}
                </Box>
                <Box mt="2">
                  <Text fontWeight="bold">
                    {`Dono: ${match.visitingTeam?.owner.name}`}
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
