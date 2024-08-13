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

  const handleReset = (selectedLevel) => {
    setActivityLevel(null);
    setGender(null);
    setWeightGoal(null);
  };

  return (
    <form>
      <input type="reset" onClick={handleReset} />
      <h4 className="pt-2 pb-2">Calculate your calorie</h4>
      <div className="form-container">
        <div className="row d-flex flex-column flex-sm-row">
          <div className="col-12 col-sm-4 mb-3 d-flex flex-column">
            <label htmlFor="age" className="form-label">
              Your Age
            </label>
            <input
              type="number"
              className="form-control input"
              id="age"
              placeholder="Age"
            />
          </div>
          <div className="col-12 col-sm-4 mb-3 d-flex flex-column">
            <label htmlFor="height" className="form-label">
              Height
            </label>
            <div className="input-group">
              <input
                type="number"
                className="form-control input"
                id="height"
                placeholder="Height"
              />
              <span className="input-group-text">cm</span>
            </div>
          </div>
          <div className="col-12 col-sm-4 mb-3 d-flex flex-column">
            <label htmlFor="weight" className="form-label">
              Weight
            </label>
            <div className="input-group">
              <input
                type="number"
                className="form-control input"
                id="weight"
                placeholder="Weight"
              />
              <span className="input-group-text">kg</span>
            </div>
          </div>
        </div>
        <div className="row mt-1">
          <h5>You're a</h5>
          <div className="col-12 col-sm-6 mb-3 gender">
            <button
              type="button"
              className={`gender-btn ${
                gender === "male" ? "selected" : ""
              } male`}
              onClick={() => handleGenderSelect("male")}
            >
              Male
            </button>
            <button
              type="button"
              className={`gender-btn ${
                gender === "female" ? "selected" : ""
              } female`}
              onClick={() => handleGenderSelect("female")}
            >
              Female
            </button>
          </div>
        </div>

        <div className="row mt-1">
          <h5>What is your weight goal?</h5>
          <div className="col-12 col-sm-6 mb-3 weight-goal">
            <div className="btn-group" role="group">
              <button
                type="button"
                className={`goal-btn ${
                  weightGoal === "lose" ? "selected" : ""
                } lose`}
                onClick={() => handleWeightGoalSelect("lose")}
              >
                Lose
              </button>
              <button
                type="button"
                className={`goal-btn ${
                  weightGoal === "maintain" ? "selected" : ""
                } maintain`}
                onClick={() => handleWeightGoalSelect("maintain")}
              >
                Maintain
              </button>
              <button
                type="button"
                className={`goal-btn ${
                  weightGoal === "gain" ? "selected" : ""
                } gain`}
                onClick={() => handleWeightGoalSelect("gain")}
              >
                Gain
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <h5>What is your activity level?</h5>
          <div className="col-12 mb-3 activity-group">
            <div className="btn-group w-100" role="group">
              <button
                type="button"
                className={`activity-btn ${
                  activityLevel === "inactive" ? "selected" : ""
                } inactive`}
                onClick={() => handleActivityLevelSelect("inactive")}
              >
                Inactive <br /> (No exercise)
              </button>
              <button
                type="button"
                className={`activity-btn ${
                  activityLevel === "somewhat_active" ? "selected" : ""
                } somewhat_active`}
                onClick={() => handleActivityLevelSelect("somewhat_active")}
              >
                Somewhat active <br /> (3x to 4x per week)
              </button>
              <button
                type="button"
                className={`activity-btn ${
                  activityLevel === "active" ? "selected" : ""
                } actives`}
                onClick={() => handleActivityLevelSelect("active")}
              >
                Active <br /> (5x+ per week)
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CalorieCalculatorForm;
