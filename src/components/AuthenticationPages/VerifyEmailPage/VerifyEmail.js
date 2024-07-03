import React, { useEffect, useState } from "react";
import LoadingPage from "../../LoadingPage/LoadingPage";
import { Link, useNavigate } from "react-router-dom";
import "./VerifyEmail.css";

const VerifyEmail = () => {
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // Array to store each OTP digit
  const inputRefs = []; // Array to store refs for each input field
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const handleInputChange = (index, event) => {
    const value = event.target.value;
    if (!isNaN(value) && value.length <= 1) {
      // Allow only numeric input
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input field if available
      if (index < otp.length - 1 && value !== "") {
        inputRefs[index + 1].focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join(""); // Join array into a single string
    // Handle OTP verification logic here (e.g., API call)
    console.log("Verifying OTP:", otpValue);

    // Example: Simulate success after verifying
    if (otpValue === "123456") {
      // Replace this condition with actual verification logic
      alert("OTP Verified Successfully!");
      navigate("/dashboard"); // Redirect to the dashboard after successful verification
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  const handleResendOTP = () => {
    // Implement resend OTP logic here (e.g., resend API call)
    console.log("Resend OTP requested");
    // Show a message or update state indicating OTP has been resent
  };

  return (
    <div>
      {loading ? (
        <LoadingPage loading={loading} />
      ) : (
        <div className="container-fluid">
          <div className="row signup-container">
            <div className="col-md-6 verify-image d-none d-md-block"></div>
            <div className="col-md-6 p-5 form">
              <h3 className="text-justify mb-4">Verify your email</h3>
              <h6>
                A verification code was sent to your email, please enter the
                code below.
              </h6>
              <form onSubmit={handleSubmit} className="otp-form-container">
                <div className="form-group mt-4 d-flex justify-content-between">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(ref) => (inputRefs[index] = ref)}
                      type="text"
                      maxLength="1"
                      className="form-control otp-input"
                      style={{
                        width: "60px",
                        textAlign: "center",
                        marginRight: "30px",
                      }}
                      value={digit}
                      onChange={(e) => handleInputChange(index, e)}
                    />
                  ))}
                </div>
                <div className="mt-3 resend">
                  <p>
                    Didn't receive the code?{" "}
                    <a href="" onClick={handleResendOTP}>
                      Resend
                    </a>
                  </p>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100 mt-3 submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
