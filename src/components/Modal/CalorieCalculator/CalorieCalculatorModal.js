import React, { useState } from "react";
import "./CalorieCalculatorModal.scss";

const CalorieCalculatorModal = ({ show, onHide }) => {
  const [foodName, setFoodName] = useState("");
  const [foodQuantity, setFoodQuantity] = useState("");
  const [calories, setCalories] = useState(0.0);

  const handleCalculateCalories = () => {
    // Placeholder logic for calculating calories
    // Replace this with actual logic or API call to calculate calories
    const calculatedCalories = foodQuantity * 100; // Example calculation
    setCalories(calculatedCalories);
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onHide}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>
            <span className="unit">Kcal</span> <br /> {calories}
          </h2>
          <button className="close-button" onClick={onHide}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label htmlFor="foodName">Food Name</label>
            <input
              type="text"
              id="foodName"
              placeholder="Enter food name"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="foodQuantity">
              Food Quantity (cup, ounce, gram)
            </label>
            <input
              type="text"
              id="foodQuantity"
              placeholder="Enter food quantity"
              value={foodQuantity}
              onChange={(e) => setFoodQuantity(e.target.value)}
            />
          </div>
          <button
            className="calculate-button"
            onClick={handleCalculateCalories}
          >
            Calculate Calorie
          </button>
        </div>
        <div className="modal-footer">
          <button className="close-button" onClick={onHide}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalorieCalculatorModal;
