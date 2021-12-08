import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from 'src/io/api';
import Team from 'src/models/Team';

import Tournament from 'src/models/Tournament';

const findTeam = (id: string, teams: Team[]) => {
  return teams.find(team => team.id === id);
};

const useTournamentDetails = () => {
  const [tournament, setTournament] = useState<Tournament>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { id } = useParams<Record<string, string | undefined>>();

  const loadTournamentDetails = useCallback(async () => {
    setIsLoading(true);
    setError('');

    try {
      const response = await api.get(`/tournaments/${id}`);

      let tournament = response.data as Tournament;

      tournament = {
        ...tournament,
        matches: tournament.matches.map(match => ({
          ...match,
          homeTeam: findTeam(match.homeTeamId ?? '', tournament.teams),
          visitingTeam: findTeam(match.visitingTeamId ?? '', tournament.teams),
        })),
      };

      setTournament(tournament);
    } catch (error) {
      setError('Erro ao buscar campeonatos, tente mais tarde');
    }

    setIsLoading(false);
  }, []);

  return {
    tournament,
    isLoading,
    error,

    loadTournamentDetails,
  };
};

export default useTournamentDetails;
