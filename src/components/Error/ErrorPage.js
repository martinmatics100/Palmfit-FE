import React from "react";
import "./ErrorPage.scss";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-page-wrapper">
      <div className="error-page">
        <h1>Oops! Something went wrong.</h1>
        <p>We apologize for the inconvenience. Please try again later.</p>
        <p>
          If this issue persists, please{" "}
          <Link to="/submit-ticket">submit a ticket</Link>.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
