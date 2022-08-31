import React from 'react';

import { render } from '@testing-library/react';
import axios from 'axios';

import { allFetchUsers } from '../utils/axios';
import { AllUsersId } from '../components/AllUsersId';

describe('allFetchUsers', () => {
  it('fetches list users from API', async () => {
    const list = await allFetchUsers();
    axios.get(() => Promise.resolve({ data: { list } }));
    const { findByTestId } = render(<AllUsersId />);

    const items = await findByTestId('all-user-id');
    expect(items).toBeInTheDocument();
  });
});

