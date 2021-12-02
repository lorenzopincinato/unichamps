import { FC, useCallback } from 'react';

import {
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import useRegister from 'src/hooks/register.hook';

const RegisterView: FC = () => {
  const {
    name,
    email,
    password,
    passwordConfirmation,
    isPasswordValid,
    isValid,
    isLoading,
    error,
    setName,
    setEmail,
    setPassword,
    setPasswordConfirmation,
    register,
  } = useRegister();

  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    },
    []
  );

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    []
  );

  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );

  const handlePasswordConfirmationChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordConfirmation(e.target.value);
    },
    []
  );

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();
      register();
    },
    [register]
  );

  return (
    <Container mt={24}>
      <Container centerContent>
        <img src="logo.png" width="142px" height="142px" />
        <Heading mt={3} color={'#276749'}>
          UniChamps
        </Heading>
      </Container>
      <form onSubmit={handleSubmit}>
        <FormControl mt={8}>
          <FormLabel htmlFor="name">Nome</FormLabel>
          <Input
            id="name"
            type="text"
            placeholder="Nome e Sobrenome"
            value={name}
            onChange={handleNameChange}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            type="email"
            placeholder="email@dominio.com"
            value={email}
            onChange={handleEmailChange}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel htmlFor="password">Senha</FormLabel>
          <Input
            id="password"
            type="password"
            placeholder="*************"
            value={password}
            onChange={handlePasswordChange}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel htmlFor="passwordConfirmation">Confirme a Senha</FormLabel>
          <Input
            id="passwordConfirmation"
            type="password"
            placeholder="*************"
            value={passwordConfirmation}
            onChange={handlePasswordConfirmationChange}
          />
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
        {(error || !isPasswordValid) && (
          <Container mt={4} centerContent>
            {error ? error : 'A senha deve ser igual a confirmação!'}
          </Container>
        )}
      </form>
      <Flex mt={4} justifyContent="center">
        <Text color={'#4A5568'} mr="2">
          Já possui uma conta?
        </Text>{' '}
        <Link to="/login">
          <Text color={'#4A5568'} fontWeight="700">
            Entrar
          </Text>
        </Link>
      </Flex>
    </Container>
  );
};

export default RegisterView;
