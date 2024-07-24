import React, { useEffect, useState } from "react";
import "./dashboard.scss";
import LoadingPage from "../../components/LoadingPage/LoadingPage";
import { useNavigate } from "react-router-dom";

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
        <div>
          <h1>Dashboard</h1>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
