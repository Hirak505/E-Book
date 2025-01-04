// Example API call to backend

// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'https://api.yourlegalplatform.com'; // Replace with actual URL

export const getDocuments = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/documents`);
    return response.data;
  } catch (error) {
    console.error('Error fetching documents:', error);
    throw error;
  }
};
