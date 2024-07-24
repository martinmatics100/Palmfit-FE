import React, { useEffect, useState } from "react";
import LoadingPage from "../../LoadingPage/LoadingPage";
import "./VerifyEmail.scss";
import Message from "../../Messages/Message";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState(new Array(5).fill(""));
  const [message, setMessage] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  function handleChange(element, index) {
    if (isNaN(element.target.value)) return false;

    setOtp([
      ...otp.map((data, indx) =>
        indx === index ? element.target.value : data
      ),
    ]);

    if (element.target.value && element.target.nextSibling) {
      element.target.nextSibling.focus();
    }
  }

  function handleKeyDown(element, index) {
    if (element.key === "Backspace" && !element.target.value && index > 0) {
      element.target.previousSibling.focus();
    }
  }

  function handlePaste(element) {
    const value = element.clipboardData.getData("text");

    if (isNaN(value)) return false;
    const updatedValue = value.toString().split("").slice(0, otp.length);
    setOtp(updatedValue);

    const focusedInput = element.target.parentNode.querySelector("input:focus");

    if (focusedInput) {
      focusedInput.blur();
    }

    // const lastInput = element.target.parentNode.querySelector(
    //   'input[type="password"]:last-child'
    // );

    // if (lastInput) {
    //   lastInput.focus();
    // }
  }

  const handleVerify = () => {
    const otpValue = otp.join("");
    if (otpValue.length !== otp.length) {
      // Do nothing if OTP is not fully inputted
      return;
    }

    // Reset message before setting a new one
    setMessage(null);

    // Simulate an API call
    setTimeout(() => {
      if (otpValue === "12345") {
        setMessage({ type: "success", content: "OTP verified successfully!" });
        setTimeout(() => {
          navigate("/login"); // Redirect to the login page
        }, 3000); // Short delay to allow the message to be visible
      } else {
        setMessage({
          type: "error",
          content: "Invalid OTP. Please try again.",
        });
      }
    }, 1000); // Simulate API delay
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingPage loading={loading} />
      ) : (
        <div className="otp">
          <h2>Verify your email</h2>
          <p>
            A verification code was sent to your email. Please enter the code
            below
          </p>
          {message && <Message type={message.type} message={message.content} />}
          <div className="otp-container">
            {otp.map((data, index) => {
              return (
                <input
                  type="password"
                  value={data}
                  maxLength={1}
                  onChange={(element) => handleChange(element, index)}
                  onKeyDown={(element) => handleKeyDown(element, index)}
                  onPaste={(element) => {
                    handlePaste(element);
                  }}
                />
              );
            })}
          </div>

          <center>
            <p className="mt-4">
              Didn’t get a code? <a href="#">Resend</a>
            </p>
            <button className="mt-4" onClick={handleVerify}>
              Verify
            </button>
          </center>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
