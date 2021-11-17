import { useCallback, useState } from 'react';
import loginUser from 'src/io/services/loginUser.service';

const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const login = useCallback(async () => {
    setIsLoading(true);

    try {
      loginUser({ email, password });
    } catch (error) {
      setError('Email e/ou senha incorreto(s), verifique e tente novamente!');
      setPassword('');
    }

    setIsLoading(false);
  }, [email, password, setPassword]);

  return {
    email,
    password,
    isLoading,
    error,

    setEmail,
    setPassword,
    login,
  };
};

export default useLogin;
