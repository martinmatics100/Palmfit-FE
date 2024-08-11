import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { Link } from "react-router-dom";
import Validations from "../Validations";
import LoadingPage from "../../LoadingPage/LoadingPage";
import Message from "../../Messages/Message";

const RegisterPage = () => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [globalError, setGlobalError] = useState(""); // New state for global error message
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    verifyPassword: "",
    termsAccepted: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // State for tracking submission

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

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
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

  const handleValidations = async (e) => {
    e.preventDefault();
    const validationErrors = Validations(values);

    // Additional validation for password match
    if (values.password !== values.verifyPassword) {
      validationErrors.verifyPassword = "Passwords do not match";
    }

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

    setIsSubmitting(true); // Start loading

    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate delay
      navigate("/verify-email"); // Navigate on success
    } catch (error) {
      setGlobalError("Registration failed. Please try again.");
      setTimeout(() => {
        setGlobalError("");
      }, 5000);
    } finally {
      setIsSubmitting(false); // Stop loading
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
              {/* Display global error message using Message component */}
              {globalError && <Message type="error" message={globalError} />}
              <form onSubmit={handleValidations}>
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name <span className="text-danger">*</span>
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
                      value={values.firstName}
                      onChange={handleInput}
                    />
                  </div>
                  {errors.firstName && (
                    <Message type="error" message={errors.firstName} />
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name <span className="text-danger">*</span>
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
                      value={values.lastName}
                      onChange={handleInput}
                    />
                  </div>
                  {errors.lastName && (
                    <Message type="error" message={errors.lastName} />
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address <span className="text-danger">*</span>
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
                      value={values.email}
                      onChange={handleInput}
                    />
                  </div>
                  {errors.email && (
                    <Message type="error" message={errors.email} />
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password <span className="text-danger">*</span>
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
                        <path d="M8 1a3 3 0 0 0-3 3v3H3.5A1.5 1.5 0 0 0 2 8.5v6A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 12.5 7H11V4a3 3 0 0 0-3-3zM5 4a3 3 0 0 1 6 0v3H5V4zm8 4.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h9z" />
                      </svg>
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      value={values.password}
                      onChange={handleInput}
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary toggle-button"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                  {errors.password && (
                    <Message type="error" message={errors.password} />
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="verifyPassword" className="form-label">
                    Confirm Password <span className="text-danger">*</span>
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
                        <path d="M8 1a3 3 0 0 0-3 3v3H3.5A1.5 1.5 0 0 0 2 8.5v6A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 12.5 7H11V4a3 3 0 0 0-3-3zM5 4a3 3 0 0 1 6 0v3H5V4zm8 4.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h9z" />
                      </svg>
                    </span>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="verifyPassword"
                      className="form-control"
                      id="verifyPassword"
                      placeholder="Confirm your password"
                      value={values.verifyPassword}
                      onChange={handleInput}
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary toggle-button"
                      onClick={toggleConfirmPasswordVisibility}
                    >
                      {showConfirmPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                  {errors.verifyPassword && (
                    <Message type="error" message={errors.verifyPassword} />
                  )}
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="termsAccepted"
                    name="termsAccepted"
                    checked={values.termsAccepted}
                    onChange={handleInput}
                  />
                  <label className="form-check-label" htmlFor="termsAccepted">
                    I accept the <a href="#">terms and conditions</a>{" "}
                    <span className="text-danger">*</span>
                  </label>
                  {errors.termsAccepted && (
                    <Message type="error" message={errors.termsAccepted} />
                  )}
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Register"}
                </button>
                <p className="mt-3 text-center">
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterPage;
