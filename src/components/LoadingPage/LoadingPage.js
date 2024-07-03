import React from "react";
import PropagateLoader from "react-spinners/MoonLoader";

const LoadingPage = ({ loading }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        backgroundColor: "#f2f2f2",
      }}
    >
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
