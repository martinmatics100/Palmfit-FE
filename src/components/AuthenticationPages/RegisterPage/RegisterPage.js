import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { Link } from "react-router-dom";
import Validations from "../Validations";
import LoadingPage from "../../LoadingPage/LoadingPage";

const RegisterPage = () => {
  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [globalError, setGlobalError] = useState(""); // New state for global error message
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    verifyPassword: "",
    termsAccepted: false,
  });

  const navigate = useNavigate();

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
        setGlobalError(validationErrors[key]); // Set global error message

        // Clear global error message after 5 seconds
        setTimeout(() => {
          setGlobalError("");
        }, 5000);
        return; // Stop at the first error found
      }
    }
    // Additional validation for termsAccepted
    if (!values.termsAccepted) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        termsAccepted: "Please accept the terms and conditions",
      }));

      // Clear global error message after 5 seconds
      setTimeout(() => {
        setGlobalError("");
      }, 5000);

      return; // Stop if terms are not accepted
    }
    // Clear global error message if validations pass
    setGlobalError("");

    // If no validation errors, navigate to verify-email page
    navigate("/verify-email");
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
              {/* Global error message rendering with animation */}
              {globalError && (
                <div className={`error-message ${globalError ? "" : "hide"}`}>
                  {globalError}
                </div>
              )}
              <form onSubmit={handleValidations}>
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name <span class="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-person"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8 9a5 5 0 0 0-4.546 2.916A4.992 4.992 0 0 1 8 13a4.992 4.992 0 0 1 4.546-2.084A5 5 0 0 0 8 9z" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      id="firstName"
                      placeholder="Enter your first name"
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name <span class="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-person"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8 9a5 5 0 0 0-4.546 2.916A4.992 4.992 0 0 1 8 13a4.992 4.992 0 0 1 4.546-2.084A5 5 0 0 0 8 9z" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      id="lastName"
                      placeholder="Enter your last name"
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address <span class="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-envelope"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                      </svg>
                    </span>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email address"
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password <span class="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-lock"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 1a4 4 0 0 0-4 4v2H3a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-1V5a4 4 0 0 0-4-4zM4 5V4a4 4 0 1 1 8 0v1H4zm4 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                      </svg>
                    </span>
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
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="verifyPassword" className="form-label">
                    Verify Password <span class="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-lock"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 1a4 4 0 0 0-4 4v2H3a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-1V5a4 4 0 0 0-4-4zM4 5V4a4 4 0 1 1 8 0v1H4zm4 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                      </svg>
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="verifyPassword"
                      className="form-control"
                      id="verifyPassword"
                      placeholder="Enter your password"
                      onChange={handleInput}
                    />
                  </div>
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
                </div>

                <button type="submit" className="btn w-100">
                  Register
                </button>

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
