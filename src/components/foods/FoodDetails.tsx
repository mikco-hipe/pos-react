import React from 'react';
import Food from '@/models/food'

interface FoodDetailsProps {
  food: Food;
}

const FoodDetails: React.FC<FoodDetailsProps> = ({ food }) => {
  return (
    <>
      <div className='details'>
        <img className='details_image' src={food.image} alt="Food image" />
        <h1 className='details_title'>{food.title}</h1>
        <p className='details_price'>Php {food.pricePerServing}</p>
      </div>
    </>
  );
};

export default FoodDetails;
