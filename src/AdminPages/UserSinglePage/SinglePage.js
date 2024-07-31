import React, { useEffect, useState } from "react";
import "./SinglePage.scss";
import LoadingPage from "../../components/LoadingPage/LoadingPage";
const SinglePage = () => {
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
        <div className="single">
          <h1>hello world</h1>
        </div>
      )}
    </div>
  );
};

export default SinglePage;
