import React, { useState } from "react";
import image from "../../Assets/profilePicAvatar.png";

const MealPlanManagement = () => {
  const [openDay, setOpenDay] = useState(null);

  const [mealPlan, setMealPlan] = useState({
    planName: "",
    duration: "weekly",
    image: null,
    imagePreview: image,
    meals: {
      Sunday: { breakfast: "", lunch: "", dinner: "" },
      Monday: { breakfast: "", lunch: "", dinner: "" },
      Tuesday: { breakfast: "", lunch: "", dinner: "" },
      Wednesday: { breakfast: "", lunch: "", dinner: "" },
      Thursday: { breakfast: "", lunch: "", dinner: "" },
      Friday: { breakfast: "", lunch: "", dinner: "" },
      Saturday: { breakfast: "", lunch: "", dinner: "" },
    },
  });

  const handleMealInputChange = (day, mealType, value) => {
    setMealPlan((prevMealPlan) => ({
      ...prevMealPlan,
      meals: {
        ...prevMealPlan.meals,
        [day]: { ...prevMealPlan.meals[day], [mealType]: value },
      },
    }));
  };

  const handleToggleDetails = (day) => {
    setOpenDay((prevDay) => (prevDay === day ? null : day));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setMealPlan({
        ...mealPlan,
        image: file,
        imagePreview: reader.result,
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and send data to the backend
    console.log(mealPlan);
  };

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="my-5">
            <h3>Meal Plan Management</h3>
            <hr />
          </div>

          <form className="file-upload" onSubmit={handleSubmit}>
            <div className="row mb-5 gx-5">
              <div className="col-xxl-8 mb-5 mb-xxl-0">
                <div className="bg-secondary-soft px-4 py-5 rounded">
                  <div className="row g-3">
                    <h4 className="mb-4 mt-0">Meal Plan Details</h4>

                    <div className="col-md-6">
                      <label className="form-label">Meal Plan Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        value={mealPlan.planName}
                        onChange={(e) =>
                          setMealPlan({ ...mealPlan, planName: e.target.value })
                        }
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Meal Plan Duration *</label>
                      <input
                        type="text"
                        className="form-control"
                        value={mealPlan.duration}
                        onChange={(e) =>
                          setMealPlan({ ...mealPlan, duration: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xxl-4">
                <div className="bg-secondary-soft px-4 py-5 rounded">
                  <div className="row g-3">
                    <h4 className="mb-0 text-center mt-0">Meal Plan Photo</h4>
                    <div className="text-center">
                      <div className="square position-relative mb-3">
                        <img
                          src={mealPlan.imagePreview}
                          alt="Meal Plan Preview"
                          className="img-fluid rounded-circle"
                          style={{
                            width: "150px",
                            height: "150px",
                            objectFit: "cover",
                          }}
                        />
                      </div>

                      <input
                        type="file"
                        id="customFile"
                        name="file"
                        hidden
                        style={{ display: "none" }}
                        onChange={handleImageChange}
                      />
                      <label
                        className="btn btn-success-soft btn-block"
                        htmlFor="customFile"
                      >
                        Upload
                      </label>
                      <button
                        type="button"
                        className="btn btn-danger-soft"
                        onClick={() =>
                          setMealPlan({
                            ...mealPlan,
                            image: null,
                            imagePreview: image,
                          })
                        }
                      >
                        Remove
                      </button>

                      <p className="text-muted mt-3 mb-0">
                        <span className="me-1">Note:</span>Minimum size 300px x
                        300px
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mb-5 gx-5">
              <div className="col-xxl-20 mb-5 mb-xxl-0">
                <div className="bg-secondary-soft px-4 py-5 rounded">
                  <div className="row g-3">
                    <h4 className="mb-4 mt-0">Weekly Plan</h4>

                    {daysOfWeek.map((day) => (
                      <div
                        className="col-md-6 position-relative mb-3"
                        key={day}
                      >
                        <label className="form-label d-flex align-items-center">
                          {day}
                          <i
                            className={`ms-2 fas fa-chevron-${
                              openDay === day ? "up" : "down"
                            }`}
                            onClick={() => handleToggleDetails(day)}
                            style={{ cursor: "pointer" }}
                          ></i>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={day}
                          readOnly
                          onClick={() => handleToggleDetails(day)}
                        />
                        <div
                          className={`collapse ${
                            openDay === day ? "show" : ""
                          }`}
                          style={{
                            position: "absolute",
                            zIndex: 1,
                            width: "100%",
                          }}
                        >
                          <div className="bg-light p-3 mt-2 rounded shadow">
                            <label>Breakfast</label>
                            <input
                              type="text"
                              className="form-control mb-2"
                              value={mealPlan.meals[day].breakfast}
                              onChange={(e) =>
                                handleMealInputChange(
                                  day,
                                  "breakfast",
                                  e.target.value
                                )
                              }
                            />
                            <label>Lunch</label>
                            <input
                              type="text"
                              className="form-control mb-2"
                              value={mealPlan.meals[day].lunch}
                              onChange={(e) =>
                                handleMealInputChange(
                                  day,
                                  "lunch",
                                  e.target.value
                                )
                              }
                            />
                            <label>Dinner</label>
                            <input
                              type="text"
                              className="form-control mb-2"
                              value={mealPlan.meals[day].dinner}
                              onChange={(e) =>
                                handleMealInputChange(
                                  day,
                                  "dinner",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="gap-3 d-md-flex justify-content-md-end text-center">
              <button type="button" className="btn btn-danger btn-lg">
                Submit Plan
              </button>
              {/* <button type="submit" className="btn btn-primary btn-lg">
                Update profile
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MealPlanManagement;
