import React, { useState, useEffect } from 'react';
import FoodDetails from './FoodDetails';
import { fetchFoods } from '../utils/apiUtil';

interface Food {
  id: number;
  title: string;
  image: string;
  pricePerServing: string;
  summary: string;
}

// TYPES
// beverage
// bread
// breakfast
// dessert
// main-course
// snack
// soup

const FoodApi: React.FC = () => {
  const [foods, setFoods] = useState<Food[]>([]);
  const type = 'main-course';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await fetchFoods(type);
        setFoods(results);
      } catch (error: any) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [type]);

  return (
    <div>
      <ul>
        {foods.map((food) => (
          <FoodDetails key={food.id} food={food} />
        ))}
      </ul>
    </div>
  );
};

export default FoodApi;
