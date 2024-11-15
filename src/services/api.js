
import axios from 'axios';

const BASE_URL = 'https://win24-assignment.azurewebsites.net';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});


api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    if (error.response?.status === 404) {
      console.error('Resource not found:', error.config.url);
    }
    return Promise.reject(error);
  }
);


const apiService = {
  async getTestimonials() {
    try {
      const response = await api.get('/api/testimonials');  
      return response.data;
    } catch (error) {
      console.error('Failed to fetch testimonials:', error);
      throw error;
    }
  },

  async getTransactionHistory() {
    try {
      const response = await api.get('/api/transactions');  
      return response.data;
    } catch (error) {
      console.error('Failed to fetch transactions:', error);
      throw error;
    }
  }
};

export default apiService;