import { useCallback, useState } from 'react';

import api from 'src/io/api';
import { getToken } from 'src/io/localStorage';

interface Team {
  id: string;
  name: string;
}

const useTeamsList = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const showTeamsList = useCallback(async () => {
    setIsLoading(true);

    try {
      const token = getToken();
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await api.get('/teams', {
        headers: headers,
      });

      setTeams(response.data);
    } catch (error) {
      setError('Erro ao buscar times, tente mais tarde');
    }

    setIsLoading(false);
  }, []);

  return {
    teams,
    isLoading,
    error,

    setTeams,
    setIsLoading,
    setError,
    showTeamsList,
  };
};

export default useTeamsList;
