import React from "react";
import UserHome from "../../components/AdminComponents/UserManagement/UserHome";
import { Route, Routes } from "react-router-dom";
import SinglePage from "../UserSinglePage/SinglePage";
import AddNewUser from "../../components/New/NewUser/AddNewUser";
import { userInputs } from "../../utils/FormSource";

const UserManagement = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserHome />} />
        <Route path="user/:userId" element={<SinglePage />} />
        <Route
          path="/new-user"
          element={<AddNewUser inputs={userInputs} title="Add New User" />}
        />
      </Routes>
    </div>
  );
};

export default UserManagement;
