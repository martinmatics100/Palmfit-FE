import React from "react";
import UserHome from "../../components/AdminComponents/UserManagement/UserHome";
import { Route, Routes } from "react-router-dom";
import SinglePage from "../UserSinglePage/SinglePage";

const UserManagement = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserHome />} />
        <Route path=":id" element={<SinglePage />} />
      </Routes>
    </div>
  );
};

export default UserManagement;
