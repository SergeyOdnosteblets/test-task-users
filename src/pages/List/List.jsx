import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import styles from './List.module.scss';

export const List = ({ id }) => {
  const [stateName, setStateName] = useState([]);
  const [stateId, setStateId] = useState([]);

  useEffect(() => {
    axios.get(`/get/${id}`).then((res) => {
        setStateName(res.data.data.firstName);
        setStateId(res.data.data.id);
      });
  }, []);

  return (
    <div className={styles.main}>
      <Link to={`/${id}`} className={styles.user} data-testid="user-id">
        {stateName}
      </Link>
    </div>
  );
};
