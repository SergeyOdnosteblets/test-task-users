import React, { useEffect, useState } from 'react';

import { List } from '../pages/List/List';
import axios from 'axios';

export const AllUserIds = () => {
  let [userIds, setUserIds] = useState('');

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
