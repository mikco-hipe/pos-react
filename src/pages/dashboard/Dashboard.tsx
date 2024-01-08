import FoodApi from '@/components/foods/FoodApi';
import React from 'react';


const Dashboard: React.FC = () => {
  return (
    <>
      <div>Dashboard</div>
      <FoodApi foodType="bread"/> 
    </>
  );
};

export default Dashboard;
