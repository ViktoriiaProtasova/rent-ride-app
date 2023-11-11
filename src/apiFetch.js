import axios from 'axios';

axios.defaults.baseURL = 'https://654e12a3cbc325355742500a.mockapi.io';

export const getAllAdverts = async () => {
  const { data } = await axios(`/advert`);
  return data;
};

export const getAdvertsByPage = async ({ page, limit }) => {
  const { data } = await axios(`/advert/?page=${page}&limit=${limit}`);
  return data;
};
