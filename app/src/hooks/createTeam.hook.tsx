import { useCallback, useMemo, useState } from 'react';
import api from 'src/io/api';
import { getToken } from 'src/io/localStorage';
import Player from 'src/models/Player';

const useCreateTeam = () => {
  const [name, setName] = useState('');
  const [players, setPlayers] = useState<Player[]>([]);
  const [selectedPlayersIds, setSelectedPlayersIds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const isValid = useMemo(() => {
    return name !== null && name !== undefined && name !== '';
  }, [name]);

  const loadPlayers = useCallback(async () => {
    setIsLoading(true);
    setError('');

    try {
      const response = await api.get('/users/all');

      setPlayers(response.data);
    } catch (error) {
      setError('Erro ao buscar jogadores, tente mais tarde');
    }

    setIsLoading(false);
  }, []);

  const createTeam = useCallback(async () => {
    setIsLoading(true);

    try {
      const data = {
        name: name,
        ownerId: getToken(),
        playersId: selectedPlayersIds,
      };
      const response = await api.post('/teams', data);

      if (response.status !== 200) {
        // TODO: Tratar os erros
        throw new Error();
      }

      window.location.href = '/teams';
    } catch (error) {
      setError('Erro ao registrar novo time, tente novamente mais tarde.');
    }

    setIsLoading(false);
  }, [name]);

  return {
    name,
    players,
    selectedPlayersIds,
    isValid,
    isLoading,
    error,

    setName,
    setSelectedPlayersIds,
    loadPlayers,
    createTeam,
  };
};

export default useCreateTeam;
