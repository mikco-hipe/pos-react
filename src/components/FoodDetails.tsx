import React from 'react';

interface Food {
  id: number;
  title: string;
  image: string;
  pricePerServing: string;
  summary: string;
}

interface FoodDetailsProps {
  food: Food;
}

const FoodDetails: React.FC<FoodDetailsProps> = ({ food }) => {
  return (
    <div>
      <h1>{food.title}</h1>
      <img src={food.image} alt="" />
      <p>{food.pricePerServing}</p>
    </div>
  );
};

export default FoodDetails;
