import { useCallback, useState } from 'react';
import api from 'src/io/api';
import Match from 'src/models/Match';

const useMatches = () => {
  const [matches, setMatches] = useState<Match[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const loadMatches = useCallback(async () => {
    setIsLoading(true);
    setError('');

    try {
      const response = await api.get(`/matches`);

      const matches = response.data as Match[];

      setMatches(matches.filter(match => !!match.winnerId));
    } catch (error) {
      setError('Erro ao buscar jogos, tente mais tarde');
    }

    setIsLoading(false);
  }, []);

  return {
    matches,
    isLoading,
    error,

    loadMatches,
  };
};

export default useMatches;
