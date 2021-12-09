import { useCallback, useState } from 'react';
import api from 'src/io/api';
import Team from 'src/models/Team';

interface CreateTournamentResponse {
  id: string;
}

const useCreateTournament = () => {
  const [teams, setTeams] = useState<Team[]>();
  const [selectedTeams, setSelectedTeams] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [isLoadingTeams, setIsLoadingTeams] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const loadTeams = useCallback(async () => {
    setIsLoadingTeams(true);

    try {
      const response = await api.get('/teams');

      setTeams(response.data);
    } catch (error) {
      setError(
        'Não foi possível carregar os times, tente novamente mais tarde'
      );
    }

    setIsLoadingTeams(false);
  }, [setTeams]);

  const toggleTeam = useCallback(
    (id: string) => {
      if (selectedTeams?.find(teamId => teamId === id)) {
        setSelectedTeams(selectedTeams.filter(teamId => teamId !== id));
      } else {
        if (selectedTeams.length < 8) {
          const newSelectedTeams = [...selectedTeams];
          newSelectedTeams.push(id);

          setSelectedTeams(newSelectedTeams);
        }
      }
    },
    [selectedTeams, setSelectedTeams]
  );

  const createTournament = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await api.post('/tournaments', {
        name: name,
        teamIds: selectedTeams,
      });

      const { id } = response.data as unknown as CreateTournamentResponse;

      if (!id) throw new Error();

      window.location.href = `/tournaments/${id}`;
    } catch (error) {
      setError(
        'Não foi possível criar o campeonato, tente novamente mais tarde'
      );
    }

    setIsLoading(false);
  }, [name, selectedTeams]);

  return {
    name,
    teams,
    selectedTeams,
    isLoading,
    isLoadingTeams,
    error,

    setName,
    toggleTeam,
    loadTeams,
    createTournament,
  };
};

export default useCreateTournament;
