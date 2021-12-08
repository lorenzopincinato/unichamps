import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from 'src/io/api';

import Team from 'src/models/Team';

const useTeamDetails = () => {
  const [team, setTeam] = useState<Team>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { id } = useParams<Record<string, string | undefined>>();

  const loadTeamDetails = useCallback(async () => {
    setIsLoading(true);
    setError('');

    try {
      const response = await api.get(`/teams/${id}`);

      setTeam(response.data);
    } catch (error) {
      setError('Erro ao buscar times, tente mais tarde');
    }

    setIsLoading(false);
  }, []);

  return {
    team,
    isLoading,
    error,

    loadTeamDetails,
  };
};

export default useTeamDetails;
