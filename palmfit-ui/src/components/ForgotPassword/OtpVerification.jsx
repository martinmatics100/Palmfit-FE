import React, { useState } from "react";
import loginImage from "../../images/login-signup.svg";
import "../../styles/otpVerification.css";
import { Link } from "react-router-dom";

const OTPVerification = () => {
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const [verificationSuccess, setVerificationSuccess] = useState(false);

  const handleChange = (index, event) => {
    const newOTP = [...otp];
    newOTP[index] = event.target.value;
    setOTP(newOTP);

    // Auto focus next input box
    if (index < 5 && event.target.value !== "") {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleVerification = () => {
    const enteredOTP = otp.join("");
    // Here you would compare the entered OTP with the actual OTP for verification
    // For demonstration, I'm assuming the correct OTP is '123456'
    const correctOTP = "";
    if (enteredOTP === correctOTP) {
      setVerificationSuccess(true);
    } else {
      setVerificationSuccess(false);
      alert("Incorrect OTP. Please try again.");
    }
  };

  return (
    <div className="container-fluid">
      <div className="OtpVerification-container row">
        <div className="col-md-6 p-0 d-flex align-items-center">
          <img src={loginImage} alt="" className="img-fluid" />
        </div>
        <div className="col-md-5">
          <div className="OtpVerification-right-container">
            <h3>Palmfit</h3>
            <p>Verify your email</p>
            <p>
              A verification code was sent to your email, please enter the code
              below.
            </p>
            <form className="d-flex flex-column align-items-center mb-3">
              <div className="form-group input d-flex">
                {otp.map((value, index) => (
                  <input
                    key={index}
                    id={`otp-input-${index}`}
                    type="text"
                    maxLength="1"
                    value={value}
                    onChange={(e) => handleChange(index, e)}
                    className="form-control mr-2 text-center"
                    style={{ marginRight: "5px" }}
                  />
                ))}
              </div>

              <div className="form-group logs">
                <Link to={"/reset-password"}>
                  <button
                    type="submit"
                    className="mt-3 p-2 form-control log"
                    onClick={handleVerification}
                  >
                    Verify OTP
                  </button>{" "}
                </Link>
                {verificationSuccess && (
                  <p className="text-success mt-3">
                    OTP Verified Successfully!
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
