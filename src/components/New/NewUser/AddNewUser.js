import React, { useEffect, useState } from "react";
import "./AddNewUser.scss";
import LoadingPage from "../../LoadingPage/LoadingPage";

const AddNewUser = ({ inputs, title }) => {
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
          <h1>Hello world</h1>
        </div>
      )}
    </div>
  );
};

export default AddNewUser;
