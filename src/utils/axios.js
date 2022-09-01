import axios from 'axios';

export const BASE_URL = process.env.REACT_APP_URL;
const token = process.env.REACT_APP_TOKEN;

export const axiosFunc = (url) =>
  axios.get(`${BASE_URL}${url}`, {
    headers: {
      Authorization: token,
      'content-type': 'application/json',
    },
  });

export const allFetchUsers = async () => {
  try {
    return await axios.get(`${BASE_URL}/list`);
  } catch (e) {
    return [];
  }
};

export const fetchUser = async (user) => {
  try {
    return await axios.get(`${BASE_URL}/get:${user.id}`);
  } catch (e) {
    return [];
  }
};
