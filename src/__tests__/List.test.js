import '@testing-library/jest-dom';

import axios from 'axios';
import { BASE_URL, fetchUsers } from '../utils/axios';

jest.mock('axios');

it('should return users list', async () => {
  axios.get.mockResolvedValueOnce([]);
  const result = await fetchUsers();
  expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/list`);
  expect(result).toEqual([]);
});
