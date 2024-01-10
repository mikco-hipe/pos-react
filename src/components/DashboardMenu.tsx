// DashboardMenu.tsx
import React, { useEffect, useState } from "react"
import TabButton from "./buttons/TabButton"
import * as Icons from "@/utils/icons"
import FoodApi from "@/components/foods/FoodApi"
import { courseTypes } from "@/utils/courseData"

const DashboardMenu: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState("main-course")

  useEffect(() => {
    handleSelect(selectedCourse)
  }, [selectedCourse])

  function handleSelect(category: string) {
    setSelectedCourse(category)
  }

  return (
    <>
      <menu className="courses">
        <ul className="courses_list">
          {courseTypes.map((course) => (
            <li key={course.id}>
              <TabButton
                onSelect={() => handleSelect(course.id)}
                active={selectedCourse === course.id}
              >
                <img className="courses_icon" src={course.icon} alt={course.label} />
                <p>{course.label}</p>
              </TabButton>
            </li>
          ))}
        </ul>
      </menu>
      {selectedCourse && <FoodApi foodType={selectedCourse} />}
    </>
  )
}

export default DashboardMenu
