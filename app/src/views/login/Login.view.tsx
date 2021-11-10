import { FC, useCallback, useState } from 'react';

import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';

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

  const handleSubmit = useCallback(e => {
    e.preventDefault();

    setIsSubmitting(true);
    setError('erro');
    console.log(e);
  }, []);

  return (
    <Container>
      UniChamps
      <form onSubmit={handleSubmit}>
        <FormControl>
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
        {error && <div>{error}</div>}
        <Button
          mt={4}
          w="100%"
          colorScheme="green"
          isLoading={isSubmitting}
          type="submit"
        >
          Entrar
        </Button>
      </form>
    </Container>
  );
};

export default LoginView;
