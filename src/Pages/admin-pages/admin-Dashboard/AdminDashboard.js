import React, { useEffect, useState } from "react";
import AdminHome from "../../../components/AdminComponents/AdminDashboard/AdminHome";
import LoadingPage from "../../../components/LoadingPage/LoadingPage";

const AdminDashboard = () => {
  const [loading, setLoading] = useState(false);

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
          <AdminHome />
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
