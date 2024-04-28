import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes component
import "./App.css";
// import "./styles/HomePage.css";
import LandingPage from "./components/HomePage/Main";
import Login from "./components/LoginPage/Login";
import SignUp from "./components/SignUpPage/SignUp";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import SendEmail from "./components/ForgotPassword/SendEmail";
import OTPVerification from "./components/ForgotPassword/OtpVerification";
import VerticalNav from "./components/dashboard/sidebarstyle/vertical-nav";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/search-email" element={<SendEmail />} />
        <Route path="/verify-email" element={<OTPVerification />} />
        <Route path="/reset-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<VerticalNav />} />
      </Routes>
    </Router>

    // <div>
    //   <SignUp />
    //   <Login />
    //   <ForgotPassword />
    //   <SendEmail />
    //   <OTPVerification />
    // </div>
  );
}

export default App;
