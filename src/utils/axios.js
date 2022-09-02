import axios from 'axios';

axios.defaults.baseURL = 'http://opn-interview-service.nn.r.appspot.com';
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_TOKEN}`;

export const axiosFunc = (url) => axios.get(url);

export const getUsers = async () => {
  try {
    return await axios.get(`/list`);
  } catch (e) {
    return [];
  }
};
