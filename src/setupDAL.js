import axios from 'axios';

export const DAL = () => {
  axios.defaults.baseURL = process.env.REACT_APP_URL;
  axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_TOKEN}`;

  axios.interceptors.request.use(
    async (config) => {
      return config;
    },
    async (error) => {
      return Promise.reject(error);
    },
  );
};
