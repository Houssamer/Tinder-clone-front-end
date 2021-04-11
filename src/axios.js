import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://tinder-backend-ff33.herokuapp.com',
});

export default instance;
