import React, { useState } from "react";
import "./CalorieCalculatorForm.scss";

const CalorieCalculatorForm = () => {
  const [gender, setGender] = useState(null);
  const [weightGoal, setWeightGoal] = useState(null);
  const [activityLevel, setActivityLevel] = useState(null);

  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
  };

  const handleWeightGoalSelect = (selectedGoal) => {
    setWeightGoal(selectedGoal);
  };

  const handleActivityLevelSelect = (selectedLevel) => {
    setActivityLevel(selectedLevel);
  };

  return (
    <form>
      <h4>Calculate your calorie</h4>
      <div className="row">
        <div className="col-12 col-sm-4 mb-3">
          <label htmlFor="age" className="form-label">
            Your Age
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            placeholder="Age"
          />
        </div>
        <div className="col-12 col-sm-4 mb-3">
          <label htmlFor="height" className="form-label">
            Height
          </label>
          <div className="input-group">
            <input
              type="number"
              className="form-control"
              id="height"
              placeholder="Height"
            />
            <span className="input-group-text">cm</span>
          </div>
        </div>
        <div className="col-12 col-sm-4 mb-3">
          <label htmlFor="weight" className="form-label">
            Weight
          </label>
          <div className="input-group">
            <input
              type="number"
              className="form-control"
              id="weight"
              placeholder="Weight"
            />
            <span className="input-group-text">kg</span>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 col-sm-6 mb-3">
          <h5>You're a</h5>
          <button
            type="button"
            className={`btn ${
              gender === "male" ? "btn-danger" : "btn-outline-secondary"
            } me-2`}
            onClick={() => handleGenderSelect("male")}
          >
            Male
          </button>
          <button
            type="button"
            className={`btn ${
              gender === "female" ? "btn-danger" : "btn-outline-secondary"
            }`}
            onClick={() => handleGenderSelect("female")}
          >
            Female
          </button>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 col-sm-6 mb-3">
          <h5>What is your weight goal?</h5>
          <div className="btn-group" role="group">
            <button
              type="button"
              className={`btn ${
                weightGoal === "lose" ? "btn-danger" : "btn-outline-transparent"
              } me-2`}
              onClick={() => handleWeightGoalSelect("lose")}
            >
              Lose
            </button>
            <button
              type="button"
              className={`btn ${
                weightGoal === "maintain"
                  ? "btn-danger"
                  : "btn-outline-transparent"
              } me-2`}
              onClick={() => handleWeightGoalSelect("maintain")}
            >
              Maintain
            </button>
            <button
              type="button"
              className={`btn ${
                weightGoal === "gain" ? "btn-danger" : "btn-outline-transparent"
              }`}
              onClick={() => handleWeightGoalSelect("gain")}
            >
              Gain
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mb-3">
          <h5>What is your activity level?</h5>
          <div className="btn-group w-100" role="group">
            <button
              type="button"
              className={`btn w-100 ${
                activityLevel === "inactive"
                  ? "btn-danger"
                  : "btn-outline-transparent"
              } me-2`}
              onClick={() => handleActivityLevelSelect("inactive")}
            >
              Inactive <br /> (No exercise)
            </button>
            <button
              type="button"
              className={`btn w-100 ${
                activityLevel === "somewhat_active"
                  ? "btn-danger"
                  : "btn-outline-transparent"
              } me-2`}
              onClick={() => handleActivityLevelSelect("somewhat_active")}
            >
              Somewhat active <br /> (3x to 4x per week)
            </button>
            <button
              type="button"
              className={`btn w-100 ${
                activityLevel === "active"
                  ? "btn-danger"
                  : "btn-outline-transparent"
              }`}
              onClick={() => handleActivityLevelSelect("active")}
            >
              Active <br /> (5x+ per week)
            </button>
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CalorieCalculatorForm;
