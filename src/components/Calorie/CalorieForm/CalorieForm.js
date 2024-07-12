import React, { useState } from "react";
import "./CalorieForm.scss";
import { FaUndo } from "react-icons/fa";

const CalorieForm = () => {
  const [formData, setFormData] = useState({
    age: "",
    height: "",
    heightUnit: "cm",
    weight: "",
    weightUnit: "kg",
    gender: "male", // Default to male
    weightGoal: "maintain", // Default to maintain
    activityLevel: "inactive", // Default to inactive
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGenderChange = (gender) => {
    setFormData({ ...formData, gender });
  };

  const handleWeightGoalChange = (weightGoal) => {
    setFormData({ ...formData, weightGoal });
  };

  const handleActivityLevelChange = (activityLevel) => {
    setFormData({ ...formData, activityLevel });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here, such as sending data to the server or updating the UI
    console.log("Form submitted", formData);
  };

  const handleReset = () => {
    setFormData({
      age: "",
      height: "",
      heightUnit: "cm",
      weight: "",
      weightUnit: "kg",
      gender: "", // Reset gender
      weightGoal: "", // Reset weight goal
      activityLevel: "", // Reset activity level
    });
  };

  return (
    <div className="calorie-form">
      <button type="button" className="reset" onClick={handleReset}>
        <FaUndo />
      </button>
      <p>Calculate your calorie</p>

      <div className="form-content">
        <form onSubmit={handleSubmit}>
          <div className="age-height-weight">
            <div>
              <label htmlFor="age">Age</label>
              <input
                type="number"
                className="text"
                placeholder="Enter age..."
                id="age"
                autoComplete="off"
                onChange={handleChange}
                min="0"
                required
              />
            </div>
            <div>
              <label htmlFor="height">Height (cm)</label>
              <input
                type="number"
                className="text"
                placeholder="Enter height..."
                id="age"
                autoComplete="off"
                onChange={handleChange}
                min="0"
                required
              />
            </div>
            <div>
              <label htmlFor="weight">Weight (kg)</label>
              <input
                type="number"
                className="text"
                placeholder="Enter weight..."
                id="age"
                autoComplete="off"
                onChange={handleChange}
                min="0"
                required
              />
            </div>
          </div>

          <div className="gender">
            <h5 className="mt-3">You're a</h5>
            <div className="gender-buttons">
              <button
                type="button"
                className={`gender-button ${
                  formData.gender === "male" ? "selected" : ""
                }`}
                onClick={() => handleGenderChange("male")}
              >
                Male
              </button>
              <button
                type="button"
                className={`gender-button ${
                  formData.gender === "female" ? "selected" : ""
                }`}
                onClick={() => handleGenderChange("female")}
              >
                Female
              </button>
            </div>
          </div>

          <div className="goal">
            <h5 className="mt-3">What is your weight goal?</h5>
            <div className="goal-buttons">
              <button
                type="button"
                className={`goal-button ${
                  formData.weightGoal === "lose" ? "selected" : ""
                }`}
                onClick={() => handleWeightGoalChange("lose")}
              >
                Lose
              </button>
              <button
                type="button"
                className={`goal-button ${
                  formData.weightGoal === "maintain" ? "selected" : ""
                }`}
                onClick={() => handleWeightGoalChange("maintain")}
              >
                Maintain
              </button>
              <button
                type="button"
                className={`goal-button ${
                  formData.weightGoal === "gain" ? "selected" : ""
                }`}
                onClick={() => handleWeightGoalChange("gain")}
              >
                Gain
              </button>
            </div>
          </div>

          <div className="activity-level">
            <h5 className="mt-3">Your activity level</h5>
            <div className="activity-buttons">
              <button
                type="button"
                className={`activity-button ${
                  formData.activityLevel === "inactive" ? "selected" : ""
                }`}
                onClick={() => handleActivityLevelChange("inactive")}
              >
                Inactive <br /> (No exercise)
              </button>
              <button
                type="button"
                className={`activity-button ${
                  formData.activityLevel === "somewhat-active" ? "selected" : ""
                }`}
                onClick={() => handleActivityLevelChange("somewhat-active")}
              >
                Somewhat Active <br /> (3x-4x per week)
              </button>
              <button
                type="button"
                className={`activity-button ${
                  formData.activityLevel === "active" ? "selected" : ""
                }`}
                onClick={() => handleActivityLevelChange("active")}
              >
                Active <br /> (5x+ per week)
              </button>
            </div>
          </div>
          <div className="submit-button">
            <button type="submit" className="submit">
              Calculate Calorie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CalorieForm;
