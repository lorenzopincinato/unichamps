import { FC, useCallback, useEffect } from 'react';

import { Button, Container, Heading, List } from '@chakra-ui/react';

import ActionBar from 'src/components/ActionBar/ActionBar.component';
import TournamentItem from './TournamentItem.component';
import useTournaments from 'src/hooks/tournaments.hook';
import { MdAdd } from 'react-icons/md';

const Tournaments: FC = () => {
  const { tournaments, loadTournaments } = useTournaments();

  useEffect(() => {
    loadTournaments();
  }, []);

  const handleCreateTournament = useCallback(() => {
    window.location.href = '/tournaments/new';
  }, []);

  return (
    <ActionBar>
      <Container>
        <Container centerContent>
          <Heading color={'#276749'}>Campeonatos</Heading>
        </Container>

        <List spacing={3}>
          {tournaments.map(tournament => {
            return (
              <TournamentItem
                key={tournament.id}
                name={tournament.name}
                id={tournament.id}
              />
            );
          })}
        </List>

        <Button
          leftIcon={<MdAdd />}
          colorScheme="green"
          mt={4}
          onClick={handleCreateTournament}
        ></Button>
      </Container>
    </ActionBar>
  );
};

export default Tournaments;
