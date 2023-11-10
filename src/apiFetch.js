import axios from 'axios';

axios.defaults.baseURL = 'https://654e12a3cbc325355742500a.mockapi.io/advert';

export const getAllAdverts = async () => {
  const { data } = await axios('/?page=1&limit=12');
  return data;
};

export const getAdvert = async id => {
  const { data } = await axios(`/advert/${id}`);
  return data;
};
