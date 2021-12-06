import { FC, useCallback, useEffect } from 'react';

import { Container, Heading, List, Button } from '@chakra-ui/react';
import { MdAdd } from 'react-icons/md';

import useTeamsList from 'src/hooks/teamsList.hook';
import { TeamItem } from 'src/components/TeamItem.component';
import ActionBar from 'src/components/ActionBar/ActionBar.component';

const TeamsList: FC = () => {
  const {
    error,
    teams,

    showTeamsList,
  } = useTeamsList();

  useEffect(() => {
    showTeamsList();
  }, []);

  const handleCreateTeam = useCallback(() => {
    window.location.href = '/'; //FIXME
  }, []);

  return (
    <ActionBar>
      <Container mt={20}>
        <Container centerContent>
          <Heading mt={3} color={'#276749'}>
            Times
          </Heading>
        </Container>

        <List spacing={3}>
          {teams.map(team => {
            return <TeamItem key={team.id} team={team} />;
          })}
        </List>

        <Button
          leftIcon={<MdAdd />}
          colorScheme="green"
          mt={4}
          onClick={handleCreateTeam}
        ></Button>

        {error && (
          <Container mt={4} centerContent>
            {error ? error : 'Erro'}
          </Container>
        )}
      </Container>
    </ActionBar>
  );
};

export default TeamsList;
