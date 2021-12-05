import { Flex, Text } from '@chakra-ui/layout';
import { Link } from 'react-router-dom';

interface TeamItemProps {
  team: {
    id: string;
    name: string;
  };
}

export function TeamItem(props: TeamItemProps) {
  return (
    <Flex
      justifyContent="center"
      color={'#4A5568'}
      backgroundColor={'#F7FAFC'}
      fontSize="xl"
      mt="2"
      padding="1"
    >
      <Link to="/teamDetails">
        <Text>{props.team.name}</Text>
      </Link>
    </Flex>
  );
}
