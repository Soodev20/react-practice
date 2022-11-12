import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AUTHORIZATION}`
  },
  responseType: 'json',
  responseEncoding: 'utf8',
});

export default axiosInstance;