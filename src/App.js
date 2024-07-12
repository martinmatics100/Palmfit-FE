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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
