import { useCallback, useMemo, useState } from 'react';

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
      name !== undefined &&
      name !== '' &&
      isPasswordValid
    );
  }, []);

  const register = useCallback(async () => {
    setIsLoading(true);

    try {
      //   registerUser({ name, email, password });
    } catch (error) {
      setError('');
    }

    setIsLoading(false);
  }, []);

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
