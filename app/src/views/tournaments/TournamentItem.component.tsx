import { FC } from '@chakra-ui/icons/node_modules/@types/react';
import { Flex, Text } from '@chakra-ui/layout';
import { Link } from 'react-router-dom';

interface TournamentItemProps {
  id: string;
  name: string;
}

const TournamentItem: FC<TournamentItemProps> = ({ id, name }) => {
  return (
    <Flex
      justifyContent="center"
      color={'#4A5568'}
      backgroundColor={'#F7FAFC'}
      fontSize="xl"
      mt="2"
      padding="1"
    >
      <Link to={`/tournaments/${id}`}>
        <Text>{name}</Text>
      </Link>
    </Flex>
  );
};

export default TournamentItem;
