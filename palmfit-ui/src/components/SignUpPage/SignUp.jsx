import React, { useState } from "react";
import loginImage from "../../images/login-signup.svg";
import "../../styles/SignUp.css";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setTermsChecked(e.target.checked);
    setErrors({
      ...errors,
      termsCheckbox: "",
    });
  };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    verifyPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({
      ...errors,
      [id]: value
        ? ""
        : `${id.charAt(0).toUpperCase() + id.slice(1)} is required`,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required`;
      }
    });
    if (!termsChecked) {
      newErrors.termsCheckbox = "Please agree to the terms and conditions";
    }
    setErrors(newErrors);

    // If there are no errors, you can proceed with form submission
    if (Object.keys(newErrors).length === 0) {
      // Perform registration or further actions here
      console.log("Form submitted successfully");
    } else {
      // Clear errors after 5 seconds
      setTimeout(() => {
        setErrors({});
      }, 5000);
    }
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        <div className="col-md-6 p-0 d-flex align-items-center">
          <img src={loginImage} alt="login-image" className="img-fluid" />
        </div>
        <div className="col-md-5">
          <div className="register-right-container">
            <h3>Palmfit</h3>
            <p>Register for PalmFit</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group input">
                <label htmlFor="firstname">First name</label>
                <input
                  id="firstName"
                  type="text"
                  className="form-control"
                  placeholder="Enter your first name"
                  onChange={handleChange}
                />
                {errors.firstName && (
                  <div className="error">{errors.firstName}</div>
                )}
              </div>
              <div className="form-group input">
                <label htmlFor="lastname">Last name</label>
                <input
                  id="lastName"
                  type="text"
                  className="form-control"
                  placeholder="Enter your last name"
                  onChange={handleChange}
                />
                {errors.lastName && (
                  <div className="error">{errors.lastName}</div>
                )}
              </div>
              <div className="form-group input">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="text"
                  className="form-control"
                  placeholder="Enter your email address"
                  onChange={handleChange}
                />
                {errors.email && <div className="error">{errors.email}</div>}
              </div>
              <div className="form-group input">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter your password"
                  onChange={handleChange}
                />
                {errors.password && (
                  <div className="error">{errors.password}</div>
                )}
              </div>
              <h5>
                Must have uppercase, lowercase, number and special character
              </h5>
              <div className="form-group input">
                <label htmlFor="verifyPassword">Verify Password</label>
                <input
                  id="verifyPassword"
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter your password"
                  onChange={handleChange}
                />
                {errors.verifyPassword && (
                  <div className="error">{errors.verifyPassword}</div>
                )}
                <span
                  className="toggle-password"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? "Hide password" : "Show password"}
                </span>
              </div>
              <div className="terms form-group mt-2">
                {errors.termsCheckbox && (
                  <div className="error">{errors.termsCheckbox}</div>
                )}
                <input
                  type="checkbox"
                  id="termsCheckbox"
                  onChange={handleCheckboxChange}
                />

                <label htmlFor="termsCheckbox">
                  I have read and understood the <a href="#">Privacy Policy</a>{" "}
                  and <a href="#">Terms & Conditions.</a>
                </label>
              </div>

              <br />
              <div className="form-group logs">
                <button type="submit" className="mt-1 p-2 form-control log">
                  Register
                </button>
              </div>
              <div className="registers">
                <span>
                  Already have an account? <a href="#">Login</a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
