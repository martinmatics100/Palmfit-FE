import React, { useEffect, useState } from "react";
import LoadingPage from "../../LoadingPage/LoadingPage";

const PrivacySettings = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="loader-container">
      {loading ? (
        <LoadingPage loading={loading} />
      ) : (
        <div>
          <h1>Privacy</h1>
        </div>
      )}
    </div>
  );
};

export default PrivacySettings;
