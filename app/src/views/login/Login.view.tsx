import { FC, useCallback, useState } from 'react';

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
import api from 'src/io/api';

interface AuthResponse {
  token: string;
}

const LoginView: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

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

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();
      setIsSubmitting(true);

      try {
        const response = await api.post('/auth', {
          email: email,
          password: password,
        });

        const { token } = response.data as unknown as AuthResponse;

        if (!token) {
          throw new Error('No token');
        }

        localStorage.setItem('token', token);
        window.location.href = '/';
      } catch (error) {
        setError('Email e/ou senha incorreto(s), verifique e tente novamente!');
        setPassword('');
      }

      setIsSubmitting(false);
    },
    [email, password, setPassword]
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
        <Button
          mt={4}
          w="100%"
          colorScheme="green"
          isLoading={isSubmitting}
          type="submit"
        >
          Entrar
        </Button>
        {error && (
          <Container mt={4} centerContent>
            {error}
          </Container>
        )}
      </form>
      <Flex mt={4} justifyContent="center">
        <Text color={'#4A5568'} mr="2">
          Não possui uma conta?
        </Text>{' '}
        <Link to="/register">
          <Text color={'#4A5568'} fontWeight="700">
            Registrar-se
          </Text>
        </Link>
      </Flex>
    </Container>
  );
};

export default LoginView;
