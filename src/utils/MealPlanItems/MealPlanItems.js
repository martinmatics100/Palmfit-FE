import React from "react";
import "./MealPlanItems.scss";
import { Link } from "react-router-dom";

const MealPlanItems = ({ id, image, name, title }) => {
  return (
    <div className="meal-plan-item">
      <Link to={`/meal-plan/${id}`} className="meal-plan-link">
        <img src={image} alt={title} className="meal-plan-image" />
        <p className="meal-plan-title">{name}</p>
        <p className="meal-plan-title">{title}</p>
      </Link>
    </div>
  );
};

export default MealPlanItems;
