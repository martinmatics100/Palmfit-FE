import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./components/LandingPage/Home";
import RegisterPage from "./components/AuthenticationPages/RegisterPage/RegisterPage";
import LoginPage from "./components/AuthenticationPages/LoginPage/LoginPage";
import VerifyEmail from "./components/AuthenticationPages/VerifyEmailPage/VerifyEmail";
import ResetPassword from "./components/AuthenticationPages/ResetPasswordPage/ResetPassword";
import NewPassword from "./components/AuthenticationPages/ResetPasswordPage/NewPassword";
import Dashboard from "./Pages/Dashboard/Dashboard";
import UserProfile from "./Pages/Profile/UserProfile";
import Mealdiary from "./Pages/Meals/MealDiary/Mealdiary";
import MealPlan from "./Pages/Meals/MealPlans/MealPlan";
import Setting from "./Pages/Setting/Setting";
import Subscription from "./Pages/Payment/Subscription";
import Sidebar from "./components/Sidebar/Sidebar";
import "../src/style/dark.scss";
import { DarkModeContext } from "./Context/darkModeContext";
import { UserProvider } from "./Context/UserContext";
import AdminDashboard from "./AdminPages/AdminDashboard/AdminDashboard";
import UserManagement from "./AdminPages/UserManagement/UserManagement";
import MealPlanManagement from "./AdminPages/MealPlanManagement/MealPlanManagement";
import ContentManagement from "./AdminPages/ContentManagement/ContentManagement";
import Report from "./AdminPages/Report/Report";
import Feedback from "./AdminPages/Feedback/Feedback";
import Support from "./AdminPages/Support/Support";
import SinglePage from "./AdminPages/UserSinglePage/SinglePage";
import AddNewUser from "./components/New/NewUser/AddNewUser";
import { mealPlanInputs, userInputs } from "./utils/FormSource";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <UserProvider>
      <div className={darkMode ? "app dark" : "app"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route element={<Sidebar />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/meal-plan" element={<MealPlan />} />
            <Route path="/meal-diary" element={<Mealdiary />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/settings" element={<Setting />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/user-management/*" element={<UserManagement />} />
            <Route
              path="/meal-plan-management"
              element={<MealPlanManagement />}
            />
            <Route path="/content-management" element={<ContentManagement />} />
            <Route path="/reports" element={<Report />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/support" element={<Support />} />
            <Route path="/support" element={<Support />} />
            
            <Route
              path="/new-meal-plan"
              element={
                <AddNewUser inputs={mealPlanInputs} title="Add meal plan" />
              }
            />
          </Route>
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
