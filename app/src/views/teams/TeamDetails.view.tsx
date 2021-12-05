import { FC } from 'react';

import { Container, Heading } from '@chakra-ui/react';

// interface TeamProps {
//   team: {
//     id: string;
//     name: string;
//     players: string[];
//   };
// }

const TeamDetails: FC = () => {
  return (
    <Container mt={20}>
      <Container centerContent>
        <Heading mt={3} color={'#276749'}>
          Meu time
        </Heading>
      </Container>
    </Container>
  );
};

export default TeamDetails;
