import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Food {
  id: number;
  title: string;
  image: string;
  pricePerServing: string;
  summary: string;
}

const FoodApi: React.FC = () => {
  const [foods, setFoods] = useState<Food[]>([]);
  const GITHUB_URL = import.meta.env.VITE_REACT_APP_GITHUB_URL
  const type = "beverage.json"

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get(
          `${GITHUB_URL}${type}`
        );

        if (response.status === 200) {
          setFoods(response.data.results);
        } else {
          console.error('Failed to fetch foods');
        }
      } catch (error) {
        console.error('Error fetching foods:', error);
      }
    };

    fetchFoods();
  }, []);

  return (
    <div>
      <h1>Desserts</h1>
      <ul>
        {foods.map((food) => (
          <div key={food.id}>
            <li>{food.title}</li>
            <img src={food.image} alt="" />
            <p>{food.pricePerServing}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default FoodApi;
