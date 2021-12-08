import axios from 'axios';
import { getApiUrl } from './environment';
import { getToken } from './localStorage';

const api = axios.create({
  baseURL: getApiUrl(),

  headers: {
    'content-type': 'application/json; charset=utf-8',
  },
});

api.interceptors.request.use(
  config => {
    const token = getToken();

    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default api;
