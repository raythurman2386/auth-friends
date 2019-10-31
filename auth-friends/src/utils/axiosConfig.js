import axios from 'axios';

export const axiosWithoutAuth = () => {
  return axios.create({
    baseURL: 'http://localhost:5000/api'
  });
};

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
      'Content Type': 'application/json',
      Authorization: token
    }
  });
};
