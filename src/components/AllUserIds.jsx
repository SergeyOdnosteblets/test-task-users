import React, { useEffect, useState } from 'react';

import { List } from '../pages/List/List';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_URL;
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_TOKEN}`;

export const AllUserIds = () => {
  let [userIds, setUserIds] = useState('');

  axios.interceptors.request.use(
    (request) => request,
    (err) => {
      return Promise.reject(err);
    },
  );

  useEffect(() => {
    axios.get('/list').then((request) => {
      setUserIds(request.data.data);
    });
  }, []);

  return (
    <div data-testid="all-user-id">
      {userIds && userIds.map((item) => <List id={item} key={item.id} />)}
    </div>
  );
};
