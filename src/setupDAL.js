import axios from 'axios';

export const getDAL = () => {
  axios.defaults.baseURL = process.env.REACT_APP_URL;

  axios.interceptors.request.use(async (config) => {
    config.headers = {
      ...config.headers,
      authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
    };

    return config;
  });
};
