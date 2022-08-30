import '@testing-library/jest-dom';

import axios from 'axios';
import { BASE_URL, allFetchUsers } from '../utils/axios';

jest.mock('axios');

it('should return all users', async () => {
  axios.get.mockResolvedValueOnce([]);
  const result = await allFetchUsers();
  expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/get:id`);
  expect(result).toEqual([]);
});
