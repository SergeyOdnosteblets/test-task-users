import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { AllUsersId } from '../components/AllUsersId';

it('rendering a component AllUsersId', () => {
  const route = '/';

  render(
    <MemoryRouter initialEntries={[route]}>
      <AllUsersId />
    </MemoryRouter>,
  );

  const appElement = screen.getByTestId('allUserId');
  expect(appElement).toBeVisible()
});
