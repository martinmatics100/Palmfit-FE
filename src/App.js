import Home from "./components/LandingPage/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./components/AuthenticationPages/RegisterPage/RegisterPage";
import LoginPage from "./components/AuthenticationPages/LoginPage/LoginPage";
import VerifyEmail from "./components/AuthenticationPages/VerifyEmailPage/VerifyEmail";
import ResetPassword from "./components/AuthenticationPages/ResetPasswordPage/ResetPassword";
import NewPassword from "./components/AuthenticationPages/ResetPasswordPage/NewPassword";
import Dashboard from "./Pages/Dashboard/Dashboard";
import "../src/style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./Context/darkModeContext";
import Sidebar from "./components/Sidebar/Sidebar";
import UserProfile from "./Pages/Profile/UserProfile";
import Mealdiary from "./Pages/Meals/MealDiary/Mealdiary";
import MealPlan from "./Pages/Meals/MealPlans/MealPlan";
import Setting from "./Pages/Setting/Setting";
import Subscription from "./Pages/Payment/Subscription";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
