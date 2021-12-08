import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from 'src/io/api';
import Match from 'src/models/Match';

const useMatchDetails = () => {
  const [match, setMatch] = useState<Match>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { id } = useParams<Record<string, string | undefined>>();

  const loadTournamentDetails = useCallback(async () => {
    setIsLoading(true);
    setError('');

    try {
      const response = await api.get(`/matches/${id}`);

      const match = response.data as Match;

      if (match.homeTeamId) {
        const { data: homeTeam } = await api.get(`/teams/${match.homeTeamId}`);

        match.homeTeam = homeTeam;
      }

      if (match.visitingTeamId) {
        const { data: visitingTeam } = await api.get(
          `/teams/${match.visitingTeamId}`
        );

        match.visitingTeam = visitingTeam;
      }

      setMatch(response.data);
    } catch (error) {
      setError('Erro ao buscar jogo, tente mais tarde');
    }

    setIsLoading(false);
  }, []);

  return {
    match,
    isLoading,
    error,

    loadTournamentDetails,
  };
};

export default useMatchDetails;
