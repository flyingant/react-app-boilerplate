import axios from 'axios';

export const echo = () => {
  return axios.get('http://api.flyingant.me/echo');
};

export default {
  echo,
};
