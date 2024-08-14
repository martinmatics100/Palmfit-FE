import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { styles } from "../Styles";
// import Avatar from "../Avatar";
import { Avatar } from "@mui/material";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    console.log("Sending email", email);
  };
  return (
    <div
      style={{ ...styles.emailFormWindow, ...{ height: "100%", opacity: "1" } }}
    >
      <div style={{ height: "0px" }}>
        <div style={styles.stripe} />
      </div>

      <div
        className="transition-5"
        style={{
          ...styles.loadingDiv,
          ...{ zIndex: loading ? "10" : "-1", opacity: loading ? "0.33" : "0" },
        }}
      />
      <CircularProgress
        className="transition-5"
        style={{
          ...styles.loadingIcon,
          ...{
            zIndex: loading ? "10" : "-1",
            opacity: loading ? "1" : "0",
            fontSize: "150px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      />

      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Avatar
          style={{
            position: "relative",
            left: "45%",
            top: "10%",
          }}
        />

        <div style={{ ...styles.topText }}>
          Welcome to palmfit <br /> support
        </div>

        <form
          onSubmit={(e) => handleSubmit(e)}
          style={{ position: "relative", width: "100%", top: "19.75%" }}
        >
          <input
            style={{ ...styles.emailInput }}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email..."
          />
        </form>

        <div style={{ ...styles.bottomText }}>
          Enter your email <br /> to get started.
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
