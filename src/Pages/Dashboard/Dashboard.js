import React, { useEffect, useState } from "react";
import "./dashboard.scss";
import LoadingPage from "../../components/LoadingPage/LoadingPage";
import { useNavigate } from "react-router-dom";
import CalorieCalculatorForm from "../../components/CalorieCalculatorForm/CalorieCalculatorForm";
import CalorieResult from "../../components/CalorieCalculatorForm/CalorieResult";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);

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
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-md-6 left p-3">
              <CalorieCalculatorForm />
            </div>
            <div className="col-12 col-md-6 right d-flex justify-content-center align-items-center">
              <CalorieResult />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
