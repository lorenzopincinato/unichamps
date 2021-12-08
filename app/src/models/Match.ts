import Team from './Team';

export default interface Match {
  id: string;
  homeTeam?: Team;
  homeTeamId?: string;
  visitingTeam?: Team;
  visitingTeamId?: string;
  homeTeamGoals?: number;
  visitingTeamGoals?: number;
  winnerId?: string;
  type: 'FINAL' | 'SEMI' | 'QUARTER';
}
