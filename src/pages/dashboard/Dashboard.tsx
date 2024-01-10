import DashboardMenu from "@/sections/dashboard/DashboardMenu";
import FoodApi from "@/components/foods/FoodApi";
import Banner from "@/sections/dashboard/banner";
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <>
      <section className="dashboard">
        <DashboardMenu />
        <Banner />
        <FoodApi foodType="bread" />
      </section>
    </>
      
  );
};

export default Dashboard;
