import React, { useEffect, useState } from "react";
import Sidebar from "../SidebarPage/Sidebar";
import CustomNavbar from "../SidebarPage/CustomNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import CalorieCalculator from "../CalorieCalculatorPage/CalorieCalculator";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="d-flex">
      <div className="w-auto">
        <Sidebar />
      </div>
      <div className="col" style={{ backgroundColor: "#ffffff" }}>
        <CustomNavbar />
        <CalorieCalculator />
      </div>
    </div>
  );
};

export default Dashboard;
