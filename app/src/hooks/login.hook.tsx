import { useCallback, useState } from 'react';
import api from 'src/io/api';
import { clearToken, setToken } from 'src/io/localStorage';

interface AuthResponse {
  token: string;
}

const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const login = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await api.post('/auth', {
        email: email,
        password: password,
      });

      const { token } = response.data as unknown as AuthResponse;

      if (!token) {
        throw new Error();
      }

      setToken(token);

      window.location.href = '/';
    } catch (error) {
      setError('Email e/ou senha incorreto(s), verifique e tente novamente!');
      setPassword('');
    }

    setIsLoading(false);
  }, [email, password, setPassword]);

  const logout = useCallback(() => {
    clearToken();
    window.location.href = '/login';
  }, []);

  return {
    email,
    password,
    isLoading,
    error,

    setEmail,
    setPassword,
    login,
    logout,
  };
};

export default useLogin;
