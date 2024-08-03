import React from "react";
import { useNavigate } from "react-router-dom";
import "./MealPlanGrid.scss"; // Create this file for styling

const MealPlanGrid = ({ mealPlans }) => {
  const navigate = useNavigate();

  const handleClick = (mealPlanId) => {
    // Navigate to the meal plan details page
    navigate(`/meal-plans/${mealPlanId}`);
  };

  return (
    <div className="meal-plan-grid">
      <div className="row">
        {mealPlans.map((plan) => (
          <div className="col-12 col-md-4 mb-4" key={plan.id}>
            <div
              className="meal-plan-card"
              onClick={() => handleClick(plan.id)}
            >
              <img src={plan.image} alt={plan.name} className="img-fluid" />
              <h5 className="mt-2">{plan.name}</h5>
              <p>{plan.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealPlanGrid;
