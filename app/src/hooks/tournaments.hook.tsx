import { useCallback, useState } from 'react';
import api from 'src/io/api';

import Tournament from 'src/models/Tournament';

const useTournaments = () => {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const loadTournaments = useCallback(async () => {
    setIsLoading(true);
    setError('');

    try {
      const response = await api.get('/tournaments');

      setTournaments(response.data);
    } catch (error) {
      setError('Erro ao buscar campeonatos, tente mais tarde');
    }

    setIsLoading(false);
  }, []);

  return {
    tournaments,
    isLoading,
    error,

    loadTournaments,
  };
};

export default useTournaments;
