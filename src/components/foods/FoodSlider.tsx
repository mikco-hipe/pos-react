import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FoodDetails from './FoodDetails';
import Food from '@/models/food';

interface FoodSliderProps {
  foods: Food[];
}

const FoodSlider: React.FC<FoodSliderProps> = ({ foods }) => {
  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <Slider {...sliderSettings}>
      {foods.map((food) => (
        <FoodDetails key={food.id} food={food} />
      ))}
    </Slider>
  );
};

export default FoodSlider;
