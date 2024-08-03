import React from "react";
import "./CalorieCalculatorForm.scss";

const CalorieResult = ({
  calories,
  inactiveCalories,
  somewhatActiveCalories,
  activeCalories,
  recommendation,
}) => {
  return (
    <div className="calorie-result-container">
      <h4 className="mb-3">Calorie Estimate</h4> {/* Added title here */}
      <div className="rounded-display">
        <h5 className="mb-2">Total</h5>
        <h5>
          {calories || "1900"} <br /> Kcal
        </h5>
      </div>
      <p className="mt-3">
        See how your daily calorie needs change if you alter your activity
        level:
      </p>{" "}
      {/* Activity Level Buttons */}
      <div className="btn-group w-100 mt-5" role="group">
        <button type="button" className="btn btn-outline-secondary me-2 w-100">
          {inactiveCalories || "1900"} <br /> Kcal <br /> Inactive
        </button>
        <button type="button" className="btn btn-outline-secondary me-2 w-100">
          {somewhatActiveCalories || "1900"} <br /> Kcal <br /> Somewhat active
        </button>
        <button type="button" className="btn btn-outline-secondary w-100">
          {activeCalories || "1900"} <br /> Kcal <br /> Active
        </button>
      </div>
      {/* Recommendation Section */}
      <div className="mt-2 recommendation">
        <h5>RECOMMENDATION</h5>
        <p className="p">
          {recommendation ||
            "We recommend that you  if you increase your daily calorie intake from 1,900 to 2,100, you should add 1 pound (0.45 kg) in 1 week, as 3,500 calories (500 calories saved over 7 days) is the approximate number of calories in 1 pound of body fat"}
        </p>
      </div>
    </div>
  );
};

export default CalorieResult;
