import React, { useEffect, useState } from "react";
import LoadingPage from "../../components/LoadingPage/LoadingPage";
import UserProfileComponent from "../../components/Profile/UserProfileComponent";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="loader-container">
      {loading ? <LoadingPage loading={loading} /> : <UserProfileComponent />}
    </div>
  );
};

export default UserProfile;
