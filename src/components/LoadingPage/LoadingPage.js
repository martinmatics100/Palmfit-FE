import React from "react";

const LoadingPage = ({ state }) => {
  return (
    <div className={styles.con} style={{ display: state ? "block" : "none" }}>
      <img src={loading} className={styles.color_overlay_image} />
    </div>
  );
};

export default LoadingPage;
