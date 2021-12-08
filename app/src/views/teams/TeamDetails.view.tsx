import { FC, useEffect } from 'react';

import { Container, Heading } from '@chakra-ui/react';

import ActionBar from 'src/components/ActionBar/ActionBar.component';
import useTeamDetails from 'src/hooks/teamDetails.hook';

// interface TeamProps {
//   team: {
//     id: string;
//     name: string;
//     players: string[];
//   };
// }

const TeamDetails: FC = () => {
  const { team, isLoading, loadTeamDetails } = useTeamDetails();

  useEffect(() => {
    loadTeamDetails();
  }, []);

  return (
    <ActionBar>
      <Container mt={20}>
        {!isLoading && team && (
          <Container centerContent>
            <Heading color={'#276749'}>{team.name}</Heading>
          </Container>
        )}
      </Container>
    </ActionBar>
  );
};

export default TeamDetails;
