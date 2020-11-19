import axios from 'axios';

const api = axios.create({
  baseURL: 'http://142.93.6.234:8080'
});

export default api;
