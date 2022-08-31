import axios from 'axios';

export const BASE_URL = 'http://opn-interview-service.nn.r.appspot.com';
const token =
  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIxMjMiLCJpZGVudGl0eSI6IjEyMzQifQ.yOIx1ZozHSMy_ZndEEMXIH0YeGUkHH3idl_2WTI12gs';

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
