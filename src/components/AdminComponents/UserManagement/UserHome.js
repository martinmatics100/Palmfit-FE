import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Datatable from "./Datatable/Datatable";
import LoadingPage from "../../LoadingPage/LoadingPage";
import { Outlet } from "react-router-dom";

const UserHome = () => {
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
          <Datatable />
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default UserHome;
