import React from 'react';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { AllUsersId } from '../components/AllUsersId';

it('rendering a component AllUsersId', () => {
  render(<AllUsersId />);

  const appElement = screen.getByTestId('all-user-id');
  expect(appElement).toBeVisible();
});
