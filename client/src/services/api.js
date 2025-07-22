import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api/v1/',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    console.log('Attaching token:', config.headers.Authorization); // Debug
  }
  return config;
});

export default api; 