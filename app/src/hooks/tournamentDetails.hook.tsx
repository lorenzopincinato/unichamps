import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from 'src/io/api';

import Tournament from 'src/models/Tournament';

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

      setTournament(response.data);
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
