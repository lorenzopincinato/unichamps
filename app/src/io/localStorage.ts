import jwtDecode from 'jwt-decode';

type DecodedToken = {
  name: string;
  id: string;
};

export const setToken = (token: string) => {
  localStorage.setItem('token', token);

  const decoded = jwtDecode(token) as DecodedToken;

  localStorage.setItem('name', decoded.name);
  localStorage.setItem('id', decoded.id);
};

export const clearToken = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('name');
  localStorage.removeItem('id');
};

export const getToken = () => {
  return localStorage.getItem('token');
};

export const getName = () => {
  return localStorage.getItem('name');
};

export const getId = () => {
  return localStorage.getItem('id');
};
