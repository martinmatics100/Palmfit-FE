import React, { useState } from "react";
import "./MealDiaryComponent.scss";
import FoodCategories from "./FoodCategoryData";
import FoodCategoryComponent from "./FoodCategoryComponent";

const MealDiaryComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // Add logic here to handle search query and display results
  };

  return (
    <div className="meal-diary-container">
      <div className="fixed-header">
        <h1>Let’s find some food for your meal</h1>
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="start typing..."
            value={searchQuery}
            onChange={handleSearch}
          />
          <button className="search-button" type="button">
            Search
          </button>
        </div>
        <p className="mt-5">Browse common foods</p>
      </div>
      <div className="food-categories-container">
        <div className="food-categories">
          {FoodCategories.map((category, index) => (
            <FoodCategoryComponent
              key={index}
              name={category.name}
              image={category.image}
              foods={category.foods}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MealDiaryComponent;
