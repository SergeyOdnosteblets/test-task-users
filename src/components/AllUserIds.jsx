import React, { useEffect, useState } from 'react';

import { List } from '../pages/List/List';
import { axiosFunc } from '../utils/axios';

export const AllUserIds = () => {
  let [userIds, setUserIds] = useState('');

  useEffect(() => {
    axiosFunc('/list').then((res) => {
      setUserIds(res.data.data);
    });
  }, []);

  return (
    <div data-testid="all-user-id">
      {userIds && userIds.map((item) => <List id={item} key={item.id} />)}
    </div>
  );
};
