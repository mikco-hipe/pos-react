import React, { useEffect, useState } from "react";
import TabButton from "./buttons/TabButton";

import {
  Main,
  Soup,
  Dessert,
  Bread,
  Beverages,
  Breakfast,
  Snack,
} from "@/utils/icons";

import FoodApi from "@/components/foods/FoodApi";

const DashboardMenu: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState("main-course");

  useEffect(() => {
    handleSelect(selectedCourse);
  }, [selectedCourse]);

  function handleSelect(category: string) {
    setSelectedCourse(category);
  }

  return (
    <>
      <menu className="courses">
        <ul className="courses_list">
          <li>
            <TabButton
              onSelect={() => handleSelect("main-course")}
              active={selectedCourse === "main-course"}
            >
              <img className="courses_icon" src={Main} alt="main course" />
              <p>Main course</p>
            </TabButton>
          </li>
          <li>
            <TabButton
              onSelect={() => handleSelect("soup")}
              active={selectedCourse === "soup"}
            >
              <img className="courses_icon" src={Soup} alt="soup" />
              <p>Soup</p>
            </TabButton>
          </li>
          <li>
            <TabButton
              onSelect={() => handleSelect("dessert")}
              active={selectedCourse === "dessert"}
            >
              <img className="courses_icon" src={Dessert} alt="dessert" />
              <p>Dessert</p>
            </TabButton>
          </li>
          <li>
            <TabButton
              onSelect={() => handleSelect("bread")}
              active={selectedCourse === "bread"}
            >
              <img className="courses_icon" src={Bread} alt="bread" />
              <p>Bread</p>
            </TabButton>
          </li>
          <li>
            <TabButton
              onSelect={() => handleSelect("beverage")}
              active={selectedCourse === "beverage"}
            >
              <img className="courses_icon" src={Beverages} alt="beverages" />
              <p>Beverages</p>
            </TabButton>
          </li>
          <li>
            <TabButton
              onSelect={() => handleSelect("breakfast")}
              active={selectedCourse === "breakfast"}
            >
              <img className="courses_icon" src={Breakfast} alt="breakfast" />
              <p>Breakfast</p>
            </TabButton>
          </li>
          <li>
            <TabButton
              onSelect={() => handleSelect("snack")}
              active={selectedCourse === "snack"}
            >
              <img className="courses_icon" src={Snack} alt="snack" />
              <p>Snack</p>
            </TabButton>
          </li>
        </ul>
      </menu>
      {selectedCourse && <FoodApi foodType={selectedCourse} />}
    </>
  );
};

export default DashboardMenu;
