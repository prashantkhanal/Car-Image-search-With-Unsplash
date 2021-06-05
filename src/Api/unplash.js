import axios from 'axios';
import api from '../baseUrl';

const axiosInstance = axios.create({
  baseURL: api,
  headers: {
    Authorization: 'Client-ID abTKy05PcBT30Wrio2Odj_qCowfLjJsrnnEEPgb8k90',
  },
});

export default axiosInstance;
