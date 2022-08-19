import axios from 'axios';

export const axiosFunc = (url) =>
  axios.get(`http://opn-interview-service.nn.r.appspot.com${url}`, {
    headers: {
      Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIxMjMiLCJpZGVudGl0eSI6IjEyMzQifQ.yOIx1ZozHSMy_ZndEEMXIH0YeGUkHH3idl_2WTI12gs`,
      'content-type': 'application/json',
    },
  });
