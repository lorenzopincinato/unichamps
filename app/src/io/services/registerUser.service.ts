import api from '../api';
import { setToken } from '../localStorage';
import IService from './IService';

type UserCredentials = {
  name: string;
  email: string;
  password: string;
};

interface AuthResponse {
  token: string;
}

const registerUser: IService<UserCredentials, void> = async (
  { name, email, password },
  cancelToken
) => {
  const response = await api.post(
    '/user',
    {
      name: name,
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

export default registerUser;
