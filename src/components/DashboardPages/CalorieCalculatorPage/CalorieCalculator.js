import React, { useState } from "react";
import "./CalorieCalculator.css";

const CalorieCalculator = () => {
  // State to manage form input
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
  // State to manage table data
  const [tableData, setTableData] = useState([]);

  // State to manage calorie estimate
  const [calorieEstimate, setCalorieEstimate] = useState(0);

  // State to manage calorie estimates for each activity level
  const [calorieEstimates, setCalorieEstimates] = useState({
    inactive: 0,
    somewhatActive: 0,
    active: 0,
  });

  // State to manage the selected activity level
  const [selectedActivityLevel, setSelectedActivityLevel] =
    useState("inactive");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    if (
      !formData.age ||
      !formData.height ||
      !formData.weight ||
      parseFloat(formData.age) < 0 ||
      parseFloat(formData.height) < 0 ||
      parseFloat(formData.weight) < 0
    ) {
      alert(
        "Please fill in all fields and ensure they are valid (non-negative)."
      );
      return;
    }

    // Calculate calorie estimate
    const age = parseFloat(formData.age);
    const height = parseFloat(formData.height);
    const weight = parseFloat(formData.weight);
    let baseCalories = 0;

    if (formData.gender === "male") {
      baseCalories = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      baseCalories = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    let activityMultiplier = 1.2; // Default for inactive
    if (formData.activityLevel === "somewhat-active") {
      activityMultiplier = 1.375;
    } else if (formData.activityLevel === "active") {
      activityMultiplier = 1.55;
    }

    const calculatedCalories = Math.round(baseCalories * activityMultiplier);

    // Update calorie estimate
    setCalorieEstimate(calculatedCalories);

    // Add form data to table data
    const formDataWithCalories = {
      ...formData,
      calorieEstimate: calculatedCalories,
    };
    setTableData([...tableData, formDataWithCalories]);

    // Clear form inputs
    setFormData({
      age: "",
      height: "",
      heightUnit: "cm",
      weight: "",
      weightUnit: "kg",
      gender: "male",
      weightGoal: "maintain",
      activityLevel: "inactive",
    });
  };
  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // Function to handle gender toggle
  const handleGenderChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, gender: value });
  };

  // Function to handle weight goal toggle
  const handleWeightGoalChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, weightGoal: value });
  };
  // Function to handle activity level toggle
  const handleActivityLevelChange = (level) => {
    setFormData({ ...formData, activityLevel: level });
  };
  // Function to handle unit changes
  const handleUnitChange = (e, unitType) => {
    const value = e.target.value;
    setFormData({ ...formData, [unitType]: value });
  };
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Form section */}
        <div className="col-md-6">
          <h2>Calculate your calorie</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 d-flex">
              <div className="me-2">
                <label htmlFor="age" className="form-label">
                  Your Age
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  min="0"
                  required
                />
              </div>
              <div className="me-2">
                <label htmlFor="height" className="form-label">
                  Height
                </label>
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control"
                    id="height"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    min="0"
                    required
                  />
                  <select
                    className="form-select"
                    value={formData.heightUnit}
                    onChange={(e) => handleUnitChange(e, "heightUnit")}
                    style={{ backgroundColor: "#1A8D8D", color: "#ffffff" }}
                  >
                    <option value="cm">cm</option>
                    <option value="in">in</option>
                    <option value="ft">ft</option>
                  </select>
                </div>
              </div>
              <div className="me-2">
                <label htmlFor="weight" className="form-label">
                  Weight
                </label>
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control"
                    id="weight"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    min="0"
                    required
                  />
                  <select
                    className="form-select"
                    value={formData.weightUnit}
                    onChange={(e) => handleUnitChange(e, "weightUnit")}
                    style={{ backgroundColor: "#1A8D8D", color: "#ffffff" }}
                  >
                    <option value="kg">kg</option>
                    <option value="lb">lb</option>
                    <option value="st">st</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="d-flex mt-4">
              <h5>You're a</h5>
              <div className="me-2 form-check form-switch">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleGenderChange}
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="me-2 form-check form-switch">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleGenderChange}
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
            </div>

            <h5 className="mt-5">What's your weight goal</h5>
            <div className="d-flex">
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="weightGoal"
                  id="gain"
                  value="gain"
                  checked={formData.weightGoal === "gain"}
                  onChange={handleWeightGoalChange}
                />
                <label className="form-check-label" htmlFor="gain">
                  Gain
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="weightGoal"
                  id="loss"
                  value="loss"
                  checked={formData.weightGoal === "loss"}
                  onChange={handleWeightGoalChange}
                />
                <label className="form-check-label" htmlFor="loss">
                  Loss
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="weightGoal"
                  id="maintain"
                  value="maintain"
                  checked={formData.weightGoal === "maintain"}
                  onChange={handleWeightGoalChange}
                />
                <label className="form-check-label" htmlFor="maintain">
                  Maintain
                </label>
              </div>
            </div>

            <div className="mb-3 mt-4 d-flex justify-content-center">
              <div className=" activity-toggle-buttons">
                <button
                  type="button"
                  className={`btn ${
                    formData.activityLevel === "inactive"
                      ? "btn-secondary"
                      : "btn-outline-secondary"
                  }`}
                  style={{
                    backgroundColor:
                      formData.activityLevel === "inactive"
                        ? "#1A8D8D"
                        : "white",
                    color:
                      formData.activityLevel === "inactive" ? "white" : "black",
                  }}
                  onClick={() => handleActivityLevelChange("inactive")}
                >
                  Inactive
                  <br />
                  (No exercise)
                </button>
                <button
                  type="button"
                  className={`btn ${
                    formData.activityLevel === "somewhat-active"
                      ? "btn-secondary"
                      : "btn-outline-secondary"
                  }`}
                  style={{
                    backgroundColor:
                      formData.activityLevel === "somewhat-active"
                        ? "#1A8D8D"
                        : "white",
                    color:
                      formData.activityLevel === "somewhat-active"
                        ? "white"
                        : "black",
                  }}
                  onClick={() => handleActivityLevelChange("somewhat-active")}
                >
                  Somewhat active
                  <br />
                  (3x to 4x per week)
                </button>
                <button
                  type="button"
                  className={`btn ${
                    formData.activityLevel === "active"
                      ? "btn-secondary"
                      : "btn-outline-secondary"
                  }`}
                  style={{
                    backgroundColor:
                      formData.activityLevel === "active" ? "#1A8D8D" : "white",
                    color:
                      formData.activityLevel === "active" ? "white" : "black",
                  }}
                  onClick={() => handleActivityLevelChange("active")}
                >
                  Active
                  <br />
                  (5x+ per week)
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Calculate Calorie
            </button>
          </form>
        </div>

        {/* Table section */}
        <div className="col-md-6 d-flex flex-column align-items-center">
          <h5>Calorie estimate</h5>
          <div className="circular-calorie-display">{calorieEstimate} kcal</div>
          <p>
            See how your daily calorie needs change if you alter your activity
            level:
          </p>

          <div className="activity-toggle-buttons">
            <button
              type="button"
              className="btn activity-toggle"
              style={{
                backgroundColor:
                  selectedActivityLevel === "inactive"
                    ? "#1A8D8D"
                    : "transparent",
                color: selectedActivityLevel === "inactive" ? "white" : "black",
              }}
              onClick={() => setSelectedActivityLevel("inactive")}
            >
              {calorieEstimates.inactive} kcal
              <br />
              Inactive
            </button>
            <button
              type="button"
              className="btn activity-toggle"
              style={{
                backgroundColor:
                  selectedActivityLevel === "somewhatActive"
                    ? "#1A8D8D"
                    : "transparent",
                color:
                  selectedActivityLevel === "somewhatActive"
                    ? "white"
                    : "black",
              }}
              onClick={() => setSelectedActivityLevel("somewhatActive")}
            >
              {calorieEstimates.somewhatActive} kcal <br />
              Somewhat active
            </button>
            <button
              type="button"
              className="btn activity-toggle"
              style={{
                backgroundColor:
                  selectedActivityLevel === "active"
                    ? "#1A8D8D"
                    : "transparent",
                color: selectedActivityLevel === "active" ? "white" : "black",
              }}
              onClick={() => setSelectedActivityLevel("active")}
            >
              {calorieEstimates.active} kcal <br />
              Active
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalorieCalculator;
