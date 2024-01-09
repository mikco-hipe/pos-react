import React, { useState, useEffect } from 'react';
import FoodSlider from './FoodSlider';
import ViewAll from './FoodViewAll';
import FoodDetails from './FoodDetails';
import Food from '@/models/food';
import { fetchFoods } from '@/utils/apiUtil';
import { shuffleArray } from '@/utils/shuffleArray';

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

  return (
    <div className="food">
      {foods.length > 0 && (
        <div className="food_recom">
          <h2 className='food_h2'>Recommended Products</h2>
          <ViewAll initialViewAll={false} initialNavigate="View All" onViewAllChange={setViewAll} />
        </div>
      )}
      {foods.length > 0 && !viewAll ? (
        <ul className="food_grid_slider">
          <FoodSlider foods={foods} />
        </ul>
      ) : (
        foods.length > 0 && (
          <ul className="food_grid">
            {foods.map((food) => (
              <FoodDetails key={food.id} food={food} />
            ))}
          </ul>
        )
      )}
      {foods.length === 0 && <p className='food_no_items'>No food items found.</p>}
    </div>
  );
};

export default FoodApi;
