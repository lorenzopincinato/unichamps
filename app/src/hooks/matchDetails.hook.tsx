import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from 'src/io/api';
import Match from 'src/models/Match';

const useMatchDetails = () => {
  const [match, setMatch] = useState<Match>();
  const [isLoading, setIsLoading] = useState(false);
  const [updateMatchIsLoading, setUpdateMatchIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [homeTeamGoals, setHomeTeamGoals] = useState<number>();
  const [visitingTeamGoals, setVisitingTeamGoals] = useState<number>();

  const { id } = useParams<Record<string, string | undefined>>();

  const loadMatchDetails = useCallback(async () => {
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

  const updateMatch = useCallback(async () => {
    setUpdateMatchIsLoading(true);

    try {
      const response = await api.put(`/matches/${match?.id}`, {
        homeTeamGoals: homeTeamGoals,
        visitingTeamGoals: visitingTeamGoals,
      });

      if (response.status !== 200) throw new Error();

      window.location.href = `/tournaments/${match?.tournament.id}`;
    } catch (error) {
      setError('Erro ao atualizar jogo, tente novamente mais tarde');
    }
    setUpdateMatchIsLoading(false);
  }, [homeTeamGoals, visitingTeamGoals, setUpdateMatchIsLoading]);

  return {
    match,
    isLoading,
    error,
    homeTeamGoals,
    visitingTeamGoals,
    updateMatchIsLoading,

    setHomeTeamGoals,
    setVisitingTeamGoals,
    loadMatchDetails,
    updateMatch,
  };
};

export default useMatchDetails;
