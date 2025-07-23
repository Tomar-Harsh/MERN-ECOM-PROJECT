import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL;
// Use baseURL in your axios or fetch setup

const api = axios.create({
    baseURL,
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