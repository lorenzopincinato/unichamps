import { FC } from '@chakra-ui/icons/node_modules/@types/react';
import { Flex, Text } from '@chakra-ui/layout';
import { Link } from 'react-router-dom';

interface TeamItemProps {
  id: string;
  name: string;
}

const TeamItem: FC<TeamItemProps> = ({ id, name }) => {
  return (
    <Flex
      justifyContent="center"
      color={'#4A5568'}
      backgroundColor={'#F7FAFC'}
      fontSize="xl"
      mt="2"
      padding="1"
    >
      <Link to={`/teams/${id}`}>
        <Text>{name}</Text>
      </Link>
    </Flex>
  );
};

export default TeamItem;
