import axios from 'axios';

const GITHUB_URL = import.meta.env.VITE_REACT_APP_GITHUB_URL;

export const fetchFoods = async (type: string) => {
  try {
    const response = await axios.get(`${GITHUB_URL}${type}.json`);

    if (response.status === 200) {
      return response.data.results;
    } else {
      throw new Error('Failed to fetch foods');
    }
  } catch (error: any) {
    throw new Error(`Error fetching foods: ${error.message}`);
  }
};