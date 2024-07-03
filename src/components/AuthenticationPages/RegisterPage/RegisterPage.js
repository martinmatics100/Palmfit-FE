import React from "react";
import { useState, useEffect } from "react";
import PropagateLoader from "react-spinners/MoonLoader";
import "./Register.css";
import { Link } from "react-router-dom";
import Validations from "../Validations";
import LoadingPage from "../../LoadingPage/LoadingPage";

const RegisterPage = () => {
  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    verifyPassword: "",
    termsAccepted: false,
  });

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    // Clear error message for the current input field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined, // Clear the error for this field
    }));

    setValues((prevValues) => ({
      ...prevValues,
      [name]: newValue,
    }));
  };
  const handleValidations = (e) => {
    e.preventDefault();
    const validationErrors = Validations(values);
    // Find the first field that has an error
    for (const key in validationErrors) {
      if (validationErrors.hasOwnProperty(key)) {
        setErrors({ [key]: validationErrors[key] });
        return; // Stop at the first error found
      }
    }
    // Additional validation for termsAccepted
    if (!values.termsAccepted) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        termsAccepted: "Please accept the terms and conditions",
      }));
    }
  };
  return (
    <div className="loader-container">
      {loading ? (
        <LoadingPage loading={loading} />
      ) : (
        <div className="container-fluid">
          <div className="row signup-container">
            <div className="col-md-6 signup-image"></div>
            <div className="col-md-6 p-5">
              <h3 className="text-center mb-4">Register For Palmfit</h3>
              <form onSubmit={handleValidations}>
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name <span class="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    id="firstName"
                    placeholder="Enter your first name"
                    onChange={handleInput}
                  />
                  {errors.firstName && (
                    <p className="error-message">{errors.firstName}</p>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name <span class="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    id="lastName"
                    placeholder="Enter your last name"
                    onChange={handleInput}
                  />
                  {errors.lastName && (
                    <p className="error-message">{errors.lastName}</p>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address <span class="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email address"
                    onChange={handleInput}
                  />
                  {errors.email && (
                    <p className="error-message">{errors.email}</p>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password <span class="text-danger">*</span>
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    onChange={handleInput}
                  />
                  <span
                    className="password-toggle"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </span>
                  {errors.password && (
                    <p className="error-message">{errors.password}</p>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="verifyPassword" className="form-label">
                    Verify Password <span class="text-danger">*</span>
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="verifyPassword"
                    className="form-control"
                    id="verifyPassword"
                    placeholder="Enter your password"
                    onChange={handleInput}
                  />
                  {errors.verifyPassword && (
                    <p className="error-message">{errors.verifyPassword}</p>
                  )}
                </div>

                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    name="termsAccepted"
                    className="form-check-input"
                    id="terms"
                    onChange={handleInput}
                  />{" "}
                  <span class="text-danger">*</span>
                  <label className="form-check-label ml-1" htmlFor="terms">
                    I have read and understood the <a href="">Privacy Policy</a>{" "}
                    and <a href="">Terms & Conditions</a>.
                  </label>
                  {errors.termsAccepted && (
                    <p className="error-message">{errors.termsAccepted}</p>
                  )}
                </div>
                <Link to="/verify-email">
                  <button type="submit" className="btn w-100">
                    Register
                  </button>
                </Link>
                <div className="d-flex justify-content-center mt-2 login-alt">
                  {/* <a href="#">Forgotten Password?</a> */}
                  <span>
                    Existing member? <Link to="/login">Login</Link>
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
