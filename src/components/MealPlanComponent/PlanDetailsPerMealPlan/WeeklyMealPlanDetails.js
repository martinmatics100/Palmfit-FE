import React, { useState } from "react";
import "./MealPlanDetails.scss"; // Import the CSS file

const WeeklyMealPlanDetails = ({ meals }) => {
  const [expandedDay, setExpandedDay] = useState(null);
  const [expandedMeal, setExpandedMeal] = useState(null);

  const toggleDayDetails = (day) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  const toggleMealDetails = (mealName) => {
    setExpandedMeal(expandedMeal === mealName ? null : mealName);
  };

  const groupMealsByDay = (meals) => {
    return meals.reduce((acc, meal) => {
      if (!acc[meal.day]) {
        acc[meal.day] = [];
      }
      acc[meal.day].push(...meal.meals);
      return acc;
    }, {});
  };

  const groupedMeals = groupMealsByDay(meals);

  return (
    <div className="weekly-meal-plan-details">
      <table className="table">
        <thead>{/* Table header can be left out or customized */}</thead>
        <tbody>
          {Object.keys(groupedMeals).map((day, index) => (
            <React.Fragment key={index}>
              <tr onClick={() => toggleDayDetails(day)}>
                <td style={{ fontWeight: "bold" }}>{day}</td>
                <td
                  colSpan="2"
                  style={{ textAlign: "right", cursor: "pointer" }}
                >
                  {expandedDay === day ? (
                    <span style={{ color: "#1a8d8d" }}>&#9650;</span> 
                  ) : (
                    <span style={{ color: "#1a8d8d" }}>&#9660;</span> 
                  )}
                </td>
              </tr>
              {expandedDay === day &&
                groupedMeals[day].map((meal) => (
                  <React.Fragment key={meal.name}>
                    <tr
                      onClick={() => toggleMealDetails(meal.name)}
                      style={{ paddingLeft: "20px" }}
                    >
                      <td style={{ paddingLeft: "20px" }}>{meal.name}</td>
                      <td>{meal.totalCalories} kcal</td>
                      <td style={{ textAlign: "right", cursor: "pointer" }}>
                        {expandedMeal === meal.name ? (
                          <span style={{ color: "#1a8d8d" }}>&#9650;</span> // Upward arrow for expanded state
                        ) : (
                          <span style={{ color: "#1a8d8d" }}>&#9660;</span> // Downward arrow for collapsed state
                        )}
                      </td>
                    </tr>
                    {expandedMeal === meal.name && (
                      <tr>
                        <td colSpan="3">
                          <div className="meal-details">
                            {meal.foods.map((food, index) => (
                              <div key={index} className="food-item">
                                <span>{food.name}</span>
                                <span>{food.calories} kcal</span>
                              </div>
                            ))}
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeeklyMealPlanDetails;
