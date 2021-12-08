import Match from './Match';
import Team from './Team';

export default interface Tournament {
  id: string;
  name: string;
  matches: Match[];
  teams: Team[];
}
