import React from "react";
import "./CalorieCalculatorForm.scss";

const CalorieResult = ({ calories }) => {
  return (
    <div className="calorie-result-container">
      <h5 className="mb-2">Total</h5>
      <h5>
        {calories || "1900"} <br /> Kcal
      </h5>
    </div>
  );
};

export default CalorieResult;
