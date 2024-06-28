import React from "react";
import { useState, useEffect } from "react";
import PropagateLoader from "react-spinners/MoonLoader";
import "./Register.css";
import authImage from "../../../Assets/authImage.svg";

const RegisterPage = () => {
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="loader-container">
      {Loading ? (
        <div
          className="loader-container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
            backgroundColor: "#f2f2f2",
          }}
        >
          <PropagateLoader
            color={"#1A8D8D"}
            loading={Loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="container-fluid">
          <div className="row signup-container">
            <div className="col-md-6 signup-image"></div>
            <div className="col-md-6 p-5">
              <h3 className="text-center mb-4">Register For Palmfit</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="First Name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Last Name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="verifyPassword" className="form-label">
                    Verify Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="verifyPassword"
                    placeholder="Verify Password"
                  />
                </div>
                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="terms"
                  />
                  <label className="form-check-label" htmlFor="terms">
                    I have read and understood the Privacy Policy and Terms &
                    Conditions.
                  </label>
                </div>
                <button type="submit" className="btn w-100">
                  Register
                </button>

                <div className="d-flex justify-content-between">
                  <a href="#">Forgotten Password?</a>
                  <span>
                    Already have an account? <a href="#">Login</a>
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

export default RegisterPage;
