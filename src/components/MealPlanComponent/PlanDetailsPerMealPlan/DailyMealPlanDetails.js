import React, { useState } from "react";
import "./MealPlanDetails.scss"; // Import the CSS file

const DailyMealPlanDetails = ({ meals }) => {
  const [expandedMeal, setExpandedMeal] = useState(null);

  const toggleMealDetails = (mealName) => {
    setExpandedMeal(expandedMeal === mealName ? null : mealName);
  };

  return (
    <div className="daily-meal-plan-details">
      <table className="table">
        {/* <thead>
          <tr>
            <th>Meal</th>
            <th>Total Calories</th>
          </tr>
        </thead> */}
        <tbody>
          {meals.map((meal) => (
            <React.Fragment key={meal.name}>
              <tr onClick={() => toggleMealDetails(meal.name)}>
                <td>{meal.name}</td>
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
                          <span>{food.measurement}</span>
                          <span>{food.calories} kcal</span>
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DailyMealPlanDetails;
