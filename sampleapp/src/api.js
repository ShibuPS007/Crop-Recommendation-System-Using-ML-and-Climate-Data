import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true, // ✅ Important if your backend uses credentials/cookies
});

export default api;
