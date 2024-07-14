import React, { useEffect, useState } from "react";
import "./dashboard.scss";
import "../../components/Calorie/CalorieForm/CalorieForm.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/DashboardNavbar/Navbar";
import CalorieForm from "../../components/Calorie/CalorieForm/CalorieForm";
import CalorieEstimate from "../../components/Calorie/CalorieEstimate/CalorieEstimate";
import LoadingPage from "../../components/LoadingPage/LoadingPage";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="home">
      <Sidebar />
      <div className="dashboard-container">
        <Navbar />
        <div className="loader-container">
          {loading ? (
            <LoadingPage loading={loading} />
          ) : (
            <div className="calculate-calorie">
              <CalorieForm />
              <CalorieEstimate />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
