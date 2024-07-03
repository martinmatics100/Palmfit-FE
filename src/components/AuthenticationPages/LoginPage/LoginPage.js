import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import LoadingPage from "../../LoadingPage/LoadingPage";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="loader-container">
      {loading ? (
        <LoadingPage loading={loading} />
      ) : (
        <div className="container-fluid">
          <div className="row signup-container">
            <div className="col-md-6 signin-image"></div>
            <div className="col-md-6 p-5">
              <h3 className="text-center mb-4">Login into your account</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                  />
                  <span
                    className="password-toggle"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </span>
                </div>

                <button type="submit" className="btn w-100">
                  Log In
                </button>

                <div className="d-flex justify-content-between mt-2 login-alt">
                  <Link to="/reset-password">Having trouble loggin in?</Link>
                  <span>
                    New user? <Link to="/register">Register</Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
