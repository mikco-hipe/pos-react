import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import  resolutions from '@/utils/resolutions';
import FoodDetails from './FoodDetails';
import Food from '@/models/food';

interface FoodSliderProps {
  foods: Food[];
}

const getSliderSettings = (resolution: number) => {
  const { slidesToShow, slidesToScroll } = resolutions.find((r) => resolution > r.breakpoint) || resolutions[resolutions.length - 1];
  return { infinite: false, speed: 500, slidesToShow, slidesToScroll };
};

const FoodSlider: React.FC<FoodSliderProps> = ({ foods }) => {
  const [sliderSettings, setSliderSettings] = useState(getSliderSettings(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      const resolution = window.innerWidth;
      setSliderSettings(getSliderSettings(resolution));
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='slider_container'>
      <Slider {...sliderSettings}>
        {foods.map((food) => (
          <FoodDetails key={food.id} food={food} />
        ))}
      </Slider>
    </div>
  );
};

export default FoodSlider;
