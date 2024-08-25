import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./MealPlanGrid.scss";

const MealPlanGrid = ({ mealPlans }) => {
  return (
    <div className="meal-plan-grid">
      <div className="row">
        {mealPlans.map((plan) => (
          <div className="col-12 col-md-4 mb-4" key={plan.id}>
            <div className="meal-plan-card">
              <Link
                to={`/meal-plan/meal/${plan.id}`}
                state={{ mealPlan: plan }}
              >
                <img src={plan.image} alt={plan.name} className="img-fluid" />
              </Link>
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
