import api from '../api';
import { setToken } from '../localStorage';
import IService from './IService';

type UserCredentials = {
  email: string;
  password: string;
};

interface AuthResponse {
  token: string;
}

const loginUser: IService<UserCredentials, void> = async (
  { email, password },
  cancelToken
) => {
  const response = await api.post(
    '/auth',
    {
      email: email,
      password: password,
    },
    { cancelToken }
  );

  const { token } = response.data as unknown as AuthResponse;

  if (!token) {
    throw new Error('No token returned');
  }

  setToken(token);
};

export default loginUser;
