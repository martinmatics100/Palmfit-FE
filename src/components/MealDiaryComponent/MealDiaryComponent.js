import React, { useState } from "react";
import "./MealDiaryComponent.scss";

const MealDiaryComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // Add logic here to handle search query and display results
  };

  return (
    <div className="meal-diary-container">
      <h1>Let’s find some food for your meal</h1>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Enter food or category" 
          value={searchQuery}
          onChange={handleSearch}
        />
        <button className="search-button" type="button">
          Search
        </button>
      </div>
      <p className="mt-5">Browse common foods</p>
    </div>
  );
};

export default MealDiaryComponent;
