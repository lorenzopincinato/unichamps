import Player from './Player';

export default interface Team {
  id: string;
  name: string;
  players: Player[];
  owner: Player;
}
