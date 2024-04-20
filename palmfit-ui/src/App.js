import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes component
import "./App.css";
// import "./styles/HomePage.css";
import LandingPage from "./components/HomePage/Main";
import Login from "./components/LoginPage/Login";
import SignUp from "./components/SignUpPage/SignUp";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </Router>

    // <div>
    //   <LandingPage />
    //   <Login />
    //   <SignUp />
    //   <ForgotPassword />
    // </div>
  );
}

export default App;
