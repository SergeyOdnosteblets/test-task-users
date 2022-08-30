import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { axiosFunc } from '../../utils/axios';
import styles from './User.module.scss';

export const User = () => {
  const [state, setState] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axiosFunc(`/get/${id}`).then((res) => {
      setState(res.data.data);
    });
  }, []);

  return (
    <div className={styles.main} data-testid="userPage">
      <div className={styles.user}>
        <div>{state.firstName}</div>
        <div>{state.lastName}</div>
        <div>{state.age}</div>
        <div>{state.gender}</div>
        <div>{state.country}</div>
      </div>
      <div>
        <Link to="/" className={styles.button}>
          Back
        </Link>
      </div>
    </div>
  );
};
