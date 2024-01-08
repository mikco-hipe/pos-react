import React, { useState, useEffect } from 'react';
import FoodSlider from '@/components/slider/FoodSlider';
import ViewAll from '@/components/view-all/ViewAll';
import { fetchFoods } from '@/utils/apiUtil';
import './FoodApi.scss';
import Food from '@/models/food';
import FoodDetails from './FoodDetails';

interface FoodApiProps {
  foodType: string;
}

const FoodApi: React.FC<FoodApiProps> = ({ foodType }) => {
  const [foods, setFoods] = useState<Food[]>([]);
  const [viewAll, setViewAll] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      const results = await fetchFoods(foodType);
      const shuffledFoods = shuffleArray(results);
      setFoods(shuffledFoods);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [foodType]);

  const shuffleArray = (array: Food[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div className="food">
      {foods.length > 0 && (
        <div className="food-recom">
          <h2 className='food-h2'>Recommended Products</h2>
          <ViewAll initialViewAll={false} initialNavigate="View All" onViewAllChange={setViewAll} />
        </div>
      )}
      {foods.length > 0 && !viewAll ? (
        <ul className="food-grid-slider">
          <FoodSlider foods={foods} />
        </ul>
      ) : (
        foods.length > 0 && (
          <ul className="food-grid">
            {foods.map((food) => (
              <FoodDetails key={food.id} food={food} />
            ))}
          </ul>
        )
      )}
      {foods.length === 0 && <p className='food-no-items'>No food items found.</p>}
    </div>
  );
};

export default FoodApi;
