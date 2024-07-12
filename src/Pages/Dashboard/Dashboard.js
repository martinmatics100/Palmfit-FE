import React from "react";
import "./dashboard.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/DashboardNavbar/Navbar";
import CalorieForm from "../../components/Calorie/CalorieForm/CalorieForm";
import CalorieEstimate from "../../components/Calorie/CalorieEstimate/CalorieEstimate";

const Dashboard = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="dashboard-container">
        <Navbar />
        <div className="calculate-calorie">
          <CalorieForm />
          <CalorieEstimate />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
