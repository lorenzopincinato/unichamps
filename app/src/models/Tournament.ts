import Match from './Match';
import Player from './Player';
import Team from './Team';

export default interface Tournament {
  id: string;
  name: string;
  ownerId: string;
  owner: Player;
  matches: Match[];
  teams: Team[];
}
