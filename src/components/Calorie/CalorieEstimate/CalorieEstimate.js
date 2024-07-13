import React, { useState } from "react";
import "./CalorieEstimate.scss";

const CalorieEstimate = () => {
  const [selectedCalorie, setSelectedCalorie] = useState(null);

  const handleCalorieClick = (calorie) => {
    setSelectedCalorie(calorie);
  };
  return (
    <div className="calorie-estimate">
      <p className="mt-3">Calorie Estimate</p>

      <div className="estimate-display mt-3">
        <div className="estimate-content">
          <span>Total</span>
          <span>2000</span>
          <span>Kcal</span>
        </div>
      </div>

      <h5>
        See how your daily calorie needs change if you alter your activity
        level:
      </h5>
      <div className="calorie-buttons mt-3">
        <button
          className={`calorie-button ${
            selectedCalorie === 1900 ? "selected" : ""
          }`}
          onClick={() => handleCalorieClick(1900)}
        >
          <span>1900</span> <br />
          <span>Kcal</span> <br />
          <span>Inactive</span>
        </button>
        <button
          className={`calorie-button ${
            selectedCalorie === 2000 ? "selected" : ""
          }`}
          onClick={() => handleCalorieClick(2000)}
        >
          <span>2000</span> <br />
          <span>Kcal</span> <br />
          <span>Somewhat Active</span>
        </button>
        <button
          className={`calorie-button ${
            selectedCalorie === 2100 ? "selected" : ""
          }`}
          onClick={() => handleCalorieClick(2100)}
        >
          <span>2100</span> <br />
          <span>Kcal</span> <br />
          <span>Active</span>
        </button>
      </div>
    </div>
  );
};

export default CalorieEstimate;
