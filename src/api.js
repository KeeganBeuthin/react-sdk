import axios from 'axios';

const API_BASE_URL = 'http://localhost:9000/api';

 const getTestData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/test`);
    return response.data;
  } catch (error) {
    console.error('Error in getTestData:', error);
    throw error;
  }
};
