import React from 'react';
import Food from '@/models/food';
import 'swiper/css';
import { AddCart } from '@/utils/icons'

interface FoodDetailsProps {
  food: Food;
}

const MAX_TITLE_LENGTH = 40;

const FoodDetails: React.FC<FoodDetailsProps> = ({ food }) => {
  const truncatedTitle =
    food.title.length > MAX_TITLE_LENGTH
      ? food.title.substring(0, MAX_TITLE_LENGTH - 3) + '...'
      : food.title;

  return (
    <>
      <div className='details'>
        <img className='details_image' src={food.image} alt="Food image" />
        <h1 className='details_title'>
          {truncatedTitle}
        </h1>
        <p className='details_price'>
          Php {food.pricePerServing} <AddCart />
        </p>
      </div>
    </>
  );
};

export default FoodDetails;
