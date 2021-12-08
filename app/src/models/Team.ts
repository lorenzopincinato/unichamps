export default interface Team {
  id: string;
  name: string;
  players: [{ id: string; name: string }];
  owner: {
    name: string;
  };
}
