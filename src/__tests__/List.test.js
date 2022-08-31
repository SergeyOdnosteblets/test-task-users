import '@testing-library/jest-dom';

import axios from 'axios';
import { BASE_URL, fetchUsers } from '../utils/axios';

jest.mock('axios');

describe('allFetchUsers', () => {
  it('should return users list', async () => {
    
    const users = [{ id: 1 }, { id: 2 }];

    axios.get.mockResolvedValueOnce(users);

    const result = await fetchUsers();

    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/list`);
    expect(result).toEqual(users);
  });

  it('should return empty users list', async () => {
    const users = [];

    axios.get.mockResolvedValueOnce(users);

    const result = await fetchUsers();

    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/list`);
    expect(result).toEqual(users);
  });
});

describe('when API call fails', () => {
  it('should return empty users list', async () => {
    
    const message = 'Network Error';
    axios.get.mockRejectedValueOnce(new Error(message));

    const result = await fetchUsers();

    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/list`);
    expect(result).toEqual([]);
  });
});
