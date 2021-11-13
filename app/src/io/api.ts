import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:4000`,

  headers: {
    'content-type': 'application/json; charset=utf-8',
  },
});

export default api;
