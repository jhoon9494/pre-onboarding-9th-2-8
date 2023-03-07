import apiClient from '@/api/apiClient';

export const getAllProducts = () => {
  return apiClient({
    method: 'get',
  });
};
