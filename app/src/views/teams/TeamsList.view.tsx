import { FC, useCallback, useEffect } from 'react';

import { Container, Heading, List, Button } from '@chakra-ui/react';
import { MdAdd } from 'react-icons/md';

import useTeamsList from 'src/hooks/teamsList.hook';
import ActionBar from 'src/components/ActionBar/ActionBar.component';
import TeamItem from 'src/components/TeamItem.component';

const TeamsList: FC = () => {
  const { teams, showTeamsList } = useTeamsList();

  useEffect(() => {
    showTeamsList();
  }, []);

  const handleCreateTeam = useCallback(() => {
    window.location.href = '/createTeam'; //FIXME
  }, []);

  return (
    <ActionBar>
      <Container>
        <Container centerContent>
          <Heading color={'#276749'}>Times</Heading>
        </Container>

        <List spacing={3}>
          {teams.map(team => {
            return <TeamItem key={team.id} name={team.name} id={team.id} />;
          })}
        </List>

        <Button
          leftIcon={<MdAdd />}
          colorScheme="green"
          mt={4}
          onClick={handleCreateTeam}
        ></Button>
      </Container>
    </ActionBar>
  );
};

export default TeamsList;
