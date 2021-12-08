import { FC, useCallback, useEffect } from 'react';

import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Checkbox,
} from '@chakra-ui/react';

import ActionBar from 'src/components/ActionBar/ActionBar.component';
import useCreateTeam from 'src/hooks/createTeam.hook';

const CreateTeam: FC = () => {
  const {
    name,
    players,
    selectedPlayersIds,

    isValid,
    isLoading,
    setName,
    error,
    loadPlayers,
    setSelectedPlayersIds,
    createTeam,
  } = useCreateTeam();

  useEffect(() => {
    loadPlayers();
  }, []);

  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    },
    [setName]
  );

  const handlePlayerChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.checked) {
        const selectedPlayersIdsCopy = [...selectedPlayersIds];
        selectedPlayersIdsCopy.push(e.target.value);
        setSelectedPlayersIds(selectedPlayersIdsCopy);
      } else {
        setSelectedPlayersIds(
          selectedPlayersIds.filter(id => id !== e.target.value)
        );
      }
    },
    [selectedPlayersIds, setSelectedPlayersIds]
  );

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();
      createTeam();
    },
    [createTeam, selectedPlayersIds, name]
  );

  return (
    <ActionBar>
      <Container>
        <Heading color={'#276749'} textAlign="center">
          Novo time
        </Heading>
        <br />

        <form onSubmit={handleSubmit}>
          <FormControl mt={8}>
            <FormLabel htmlFor="name">Nome</FormLabel>
            <Input
              id="name"
              type="text"
              placeholder="Nome"
              value={name}
              onChange={handleNameChange}
            />
          </FormControl>

          <FormControl mt={8}>
            <FormLabel htmlFor="name">Jogadores</FormLabel>
            {players.map(player => {
              return (
                <Checkbox
                  mr="7"
                  key={player.id}
                  value={player.id}
                  onChange={handlePlayerChange}
                >
                  {player.name}
                </Checkbox>
              );
            })}
          </FormControl>

          <Button
            mt={4}
            w="100%"
            colorScheme="green"
            isLoading={isLoading}
            isDisabled={!isValid}
            type="submit"
          >
            Registrar
          </Button>
          {error && (
            <Container mt={4} centerContent>
              {error ? error : 'A senha deve ser igual a confirmação!'}
            </Container>
          )}
        </form>
      </Container>
    </ActionBar>
  );
};

export default CreateTeam;
