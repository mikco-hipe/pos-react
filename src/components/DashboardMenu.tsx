import React, { useEffect, useState } from "react";
import TabButton from "./TabButton";

import Main from "@/assets/images/dashboard-icons/fire-logo.svg";
import Soup from "@/assets/images/dashboard-icons/soup-logo.svg";
import Dessert from "@/assets/images/dashboard-icons/cupcake-logo.svg";
import Bread from "@/assets/images/dashboard-icons/bread-logo.svg";
import Beverages from "@/assets/images/dashboard-icons/wine-logo.svg";
import Breakfast from "@/assets/images/dashboard-icons/breakfast-logo.svg";
import Snack from "@/assets/images/dashboard-icons/snack-logo.svg";

import FoodApi from "@/components/foods/FoodApi";

const DashboardMenu: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState("main-course");

  useEffect(() => {
    handleSelect(selectedCourse);
  }, [selectedCourse])

  function handleSelect(category: string) {
    setSelectedCourse(category);
  }

  return (
    <>
      <menu className="courses">
        <ul className="courses_list">
          <li>
            <TabButton onSelect={() => handleSelect("main-course")}>
              <img className="courses_icon" src={Main} alt="main course" />
              Main course
            </TabButton>
          </li>
          <li>
            <TabButton onSelect={() => handleSelect("soup")}>
              <img className="courses_icon" src={Soup} alt="soup" />
              Soup
            </TabButton>
          </li>
          <li>
            <TabButton onSelect={() => handleSelect("dessert")}>
              <img className="courses_icon" src={Dessert} alt="dessert" />
              Dessert
            </TabButton>
          </li>
          <li>
            <TabButton onSelect={() => handleSelect("bread")}>
              <img className="courses_icon" src={Bread} alt="bread" />
              Bread
            </TabButton>
          </li>
          <li>
            <TabButton onSelect={() => handleSelect("beverage")}>
              <img className="courses_icon" src={Beverages} alt="beverages" />
              Beverages
            </TabButton>
          </li>
          <li>
            <TabButton onSelect={() => handleSelect("breakfast")}>
              <img className="courses_icon" src={Breakfast} alt="breakfast" />
              Breakfast
            </TabButton>
          </li>
          <li>
            <TabButton onSelect={() => handleSelect("snack")}>
              <img className="courses_icon" src={Snack} alt="snack" />
              Snack
            </TabButton>
          </li>
        </ul>
      </menu>
      {selectedCourse && <FoodApi foodType={selectedCourse}/> }
    </>
  );
};

export default DashboardMenu;
