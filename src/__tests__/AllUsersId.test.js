import React from 'react';

import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';

import { AllUsersId } from '../components/AllUsersId';

describe('Users list', () => {
  it('rendering a component AllUsersId', () => {
    render(<AllUsersId />);

    const appElement = screen.getByTestId('all-user-id');
    expect(appElement).toBeVisible();
  });

  it('rendering async component AllUsersId', async () => {
    render(<AllUsersId />);

    const userList = await waitFor(() => screen.findByTestId('all-user-id'));
    expect(userList).toBeInTheDocument();
  });
});

