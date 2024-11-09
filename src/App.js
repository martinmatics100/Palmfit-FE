import React, { useContext, useEffect } from "react";
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
import FoodInfoCenter from "./Pages/Meals/MealDiary/FoodInfoCenter";
import MealPlan from "./Pages/Meals/MealPlans/MealPlan";
import Setting from "./Pages/Setting/Setting";
import Subscription from "./Pages/Payment/Subscription";
import Sidebar from "./components/Sidebar/Sidebar";
import "../src/style/dark.scss";
import { DarkModeContext } from "./Context/darkModeContext";
import { UserProvider } from "./Context/UserContext";
import AdminDashboard from "./Pages/admin-pages/admin-Dashboard/AdminDashboard";
import MealPlanManagement from "./Pages/admin-pages/admin-MealPlanManagement/MealPlanManagement";
import ContentManagement from "./Pages/admin-pages/admin-ContentManagement/ContentManagement";
import Report from "./Pages/admin-pages/admin-Report/Report";
import Feedback from "./Pages/admin-pages/admin Feedback/Feedback";
import Support from "./Pages/admin-pages/admin-Support/Support";
import AddNewUser from "./components/New/NewUser/AddNewUser";
import { mealPlanInputs, userInputs } from "./utils/FormSource";
import MealLog from "./Pages/Meals/MealLog/MealLog";
import UserManagement from "./Pages/admin-pages/admin-UserManagement/UserManagement";

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
            <Route path="/meal-plan/*" element={<MealPlan />} />
            <Route path="/meal-log/*" element={<MealLog />} />
            <Route path="/food-Info-Center/*" element={<FoodInfoCenter />} />
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
