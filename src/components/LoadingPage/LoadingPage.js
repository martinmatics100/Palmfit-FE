import React from "react";
import PropagateLoader from "react-spinners/RingLoader";
import "./LoadingPage.css"; // Import the CSS file

const LoadingPage = ({ loading }) => {
  return (
    <div className="loading-page-container">
      <PropagateLoader
        color={"#1A8D8D"}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default LoadingPage;
