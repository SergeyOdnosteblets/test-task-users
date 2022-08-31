import '@testing-library/jest-dom';

import axios from 'axios';
import { BASE_URL, allFetchUsers } from '../utils/axios';

jest.mock('axios');

describe('allFetchUsers', () => {
  it('should return empty user list', async () => {
    axios.get.mockResolvedValueOnce([]);

    const result = await allFetchUsers();

    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/get:id`);
    expect(result).toEqual([]);
  });

  it('should return user', async () => {
    const user = [
      {
        id: 1,
        firstName: 'firstName',
        lastName: 'lastName',
        age: 'number',
        gender: 'gender',
        country: 'country',
      },
    ];

    axios.get.mockResolvedValueOnce(user);

    const result = await allFetchUsers();

    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/get:id`);
    expect(result).toEqual(user);
  });
});


