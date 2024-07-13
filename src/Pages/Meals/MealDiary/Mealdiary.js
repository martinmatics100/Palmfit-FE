import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Navbar from "../../../components/DashboardNavbar/Navbar";

const Mealdiary = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="dashboard-container">
        <Navbar />
        <div className="meal-plan-grid">
          <p>Hello world</p>
        </div>
      </div>
    </div>
  );
};

export default Mealdiary;
