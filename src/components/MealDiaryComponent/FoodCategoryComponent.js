import React from "react";
import "./FoodCategoryComponent.scss";

const FoodCategoryComponent = ({ name, image, foods }) => {
  return (
    <div className="food-category">
      <img src={image} alt={name} className="category-image" />
      <h3 className="category-name">{name}</h3>
      <p className="category-foods">{foods.join(", ")}</p>
    </div>
  );
};

export default FoodCategoryComponent; 
