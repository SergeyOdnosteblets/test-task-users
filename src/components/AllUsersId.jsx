import React, { useEffect, useState } from 'react';

import { List } from '../pages/List/List';
import { axiosFunc } from '../utils/axios';

export const AllUsersId = () => {
  let [usersId, setUsersId] = useState('');

  useEffect(() => {
    axiosFunc('/list').then((res) => {
      setUsersId(res.data.data);
    });
  }, []);

  return (
    <div className="App" data-testid="all-user-id">
      {usersId && usersId.map((item) => <List id={item} key={item.id} />)}
    </div>
  );
};
