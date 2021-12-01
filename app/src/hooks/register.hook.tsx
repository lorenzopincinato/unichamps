import { useCallback, useMemo, useState } from 'react';
import api from 'src/io/api';

const useRegister = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const isPasswordValid = useMemo(() => {
    return (
      password === passwordConfirmation &&
      password !== null &&
      password !== undefined
    );
  }, [password, passwordConfirmation]);

  const isValid = useMemo(() => {
    return (
      name !== null &&
      name !== undefined &&
      name !== '' &&
      email !== null &&
      email !== undefined &&
      email !== '' &&
      isPasswordValid
    );
  }, [name, email, isPasswordValid]);

  const register = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await api.post('/users', {
        name: name,
        email: email,
        password: password,
      });

      if (response.status !== 200) {
        // TODO: Tratar os erros
        throw new Error();
      }

      window.location.href = '/';
    } catch (error) {
      setError(
        'Erro ao registrar novo usuário, tente novamente com outro e-mail.'
      );
    }

    setIsLoading(false);
  }, [name, email, password, passwordConfirmation]);

  return {
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
  };
};

export default useRegister;
