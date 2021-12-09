import { Flex, Heading, LinkBox, LinkOverlay, Text } from '@chakra-ui/layout';
import { FC } from 'react';
import Match from 'src/models/Match';

import { matchTypeToText } from 'src/utils/matchType';

type MatchItemProps = {
  showTournament?: boolean;
} & Match;

const MatchItem: FC<MatchItemProps> = ({
  id,
  homeTeam,
  visitingTeam,
  homeTeamGoals,
  visitingTeamGoals,
  type,
  winnerId,
  showTournament = true,
  tournament,
}) => {
  return (
    <LinkBox
      as="div"
      color={'#4A5568'}
      backgroundColor={'#F7FAFC'}
      mt="2"
      padding="4"
    >
      <LinkOverlay href={`/matches/${id}`} fontSize="md">
        {showTournament
          ? `${matchTypeToText(type)} - ${tournament?.name}`
          : matchTypeToText(type)}
      </LinkOverlay>
      <Flex alignItems="end" width="100%" mt="1">
        <Text
          fontSize="lg"
          width="40%"
          fontWeight={
            homeTeam?.id !== undefined && homeTeam?.id === winnerId
              ? 'bold'
              : 'normal'
          }
        >
          {homeTeam?.name ?? 'Não Definido'}
        </Text>
        <Flex justifyContent="center" alignItems="end" width="20%">
          {homeTeamGoals !== undefined && (
            <Heading size="lg" mr="2">
              {homeTeamGoals}
            </Heading>
          )}
          <Heading fontSize="lg">X</Heading>
          {visitingTeamGoals !== undefined && (
            <Heading size="lg" ml="2">
              {visitingTeamGoals}
            </Heading>
          )}
        </Flex>
        <Text
          textAlign="end"
          fontSize="lg"
          width="40%"
          fontWeight={
            visitingTeam?.id !== undefined && visitingTeam?.id === winnerId
              ? 'bold'
              : 'normal'
          }
        >
          {visitingTeam?.name ?? 'Não Definido'}
        </Text>
      </Flex>
    </LinkBox>
  );
};

export default MatchItem;
