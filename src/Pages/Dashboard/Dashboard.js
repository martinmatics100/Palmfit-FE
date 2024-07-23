import React, { useEffect, useState } from "react";
import "./dashboard.scss";
import LoadingPage from "../../components/LoadingPage/LoadingPage";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="loader-container">
      {loading ? (
        <LoadingPage loading={loading} />
      ) : (
        <div className="dashboard d-flex w-100 h-100vh">
          <div className="dashboard-left w-50 mr-2 mt-5">
            <h2>Calculate your calorie</h2>
            <form>
              <div className="d-flex justify-content-between">
                <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <input type="number" id="age" name="age" />
                </div>
                <div className="form-group">
                  <label htmlFor="height">Height (cm)</label>
                  <input type="number" id="height" name="height" />
                </div>
                <div className="form-group">
                  <label htmlFor="weight">Weight (kg)</label>
                  <input type="number" id="weight" name="weight" />
                </div>
              </div>
              <div className="toggle-buttons">
                <div className="toggle-group">
                  <label>You're a</label>
                  <div className="gender-toggle-group">
                    <button
                      type="button"
                      className={`gender-button ${
                        gender === "male" ? "selected" : ""
                      }`}
                      onClick={() => setGender("male")}
                    >
                      Male
                    </button>
                    <button
                      type="button"
                      className={`gender-button ${
                        gender === "female" ? "selected" : ""
                      }`}
                      onClick={() => setGender("female")}
                    >
                      Female
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="dashboard-left w-50 mt-5">
            <h2>Right content goes here</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
