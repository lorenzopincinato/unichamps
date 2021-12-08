import { FC, useCallback, useEffect } from 'react';

import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react';

import ActionBar from 'src/components/ActionBar/ActionBar.component';
import useCreateTournament from 'src/hooks/createTournament.hook';

const CreateTournament: FC = () => {
  const {
    name,
    teams,
    selectedTeams,
    isLoadingTeams,
    isLoading,
    // error,
    setName,
    toggleTeam,
    createTournament,
    loadTeams,
  } = useCreateTournament();

  useEffect(() => {
    loadTeams();
  }, []);

  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    },
    []
  );

  const handleToggleTeam = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      toggleTeam(e.target.value);
    },
    [selectedTeams]
  );

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();
      createTournament();
    },
    [name, selectedTeams, createTournament]
  );

  return (
    <ActionBar>
      {!isLoadingTeams && teams && (
        <Container>
          <Heading color={'#276749'}>Novo Campeonato</Heading>
          <form onSubmit={handleSubmit}>
            <FormControl mt={'4'}>
              <FormLabel htmlFor="email">Nome</FormLabel>
              <Input
                id="name"
                type="text"
                placeholder="Nome do Campeonato"
                value={name}
                onChange={handleNameChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel htmlFor="name">Times (selecione 8):</FormLabel>
              {teams?.map(team => (
                <Checkbox
                  key={team.id}
                  value={team.id}
                  onChange={handleToggleTeam}
                  isChecked={
                    !!selectedTeams?.find(
                      selectedTeam => selectedTeam === team.id
                    )
                  }
                  isDisabled={
                    !selectedTeams?.find(
                      selectedTeam => selectedTeam === team.id
                    ) && selectedTeams.length == 8
                  }
                >
                  {team.name}
                </Checkbox>
              ))}
            </FormControl>
            <Button
              mt={4}
              w="100%"
              colorScheme="green"
              isLoading={isLoading}
              isDisabled={
                selectedTeams.length !== 8 ||
                name === undefined ||
                name === null ||
                name === ''
              }
              type="submit"
            >
              Criar Campeonato
            </Button>
          </form>
        </Container>
      )}
    </ActionBar>
  );
};

export default CreateTournament;
