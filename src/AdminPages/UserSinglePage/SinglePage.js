import React, { useEffect, useState } from "react";
import "./SinglePage.scss";
import LoadingPage from "../../components/LoadingPage/LoadingPage";
import userPlaceholder from "../../Assets/profilePicAvatar.png";
import { fetchUserById } from "../../api/UserServices";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const { userId } = useParams();
  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      setLoading(true); // Set loading to true before fetching data
      try {
        const user = await fetchUserById(userId);
        setUserDetails(user);
      } catch (error) {
        setError("Failed to load user details");
      } finally {
        setLoading(false);
      }
    };

    // Simulate loading delay like in LoginPage
    setTimeout(() => {
      getUserData();
    }, 3000);
  }, [userId]);

  if (loading) {
    return <LoadingPage loading={loading} />;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!userDetails) {
    return <div className="no-user">User not found</div>;
  }

  const {
    imageUrl,
    firstName,
    lastName,
    userName,
    email,
    gender,
    dateOfBirth,
    phoneNumber,
    street,
    city,
    state,
    postalCode,
    country,
    height,
    heightUnit,
    weight,
    weightUnit,
    activityLevel,
    fitnessLevel,
    weightGoal,
    subscriptionPlan,
    subscriptionExpiry,
    accountStatus,
    onlineStatus,
    lastLogin,
  } = userDetails;

  return (
    <div className="single-page-container">
      <div className="user-details">
        <div className="user-header">
          <img
            src={imageUrl || userPlaceholder}
            alt="User Profile"
            className="user-image"
          />
          <h2>
            {firstName} {lastName}
          </h2>
          <p className="user-username">@{userName}</p>
        </div>

        <div className="user-info">
          <div className="info-group">
            <label>Email:</label>
            <p>{email || "Not available"}</p>
          </div>
          <div className="info-group">
            <label>Gender:</label>
            <p>
              {gender === "Male"
                ? "Male"
                : gender === "Female"
                ? "Female"
                : "Not available"}
            </p>
          </div>
          <div className="info-group">
            <label>Date of Birth:</label>
            <p>{dateOfBirth || "Not available"}</p>
          </div>
          <div className="info-group">
            <label>Phone Number:</label>
            <p>{phoneNumber || "Not available"}</p>
          </div>
          <div className="info-group">
            <label>Address:</label>
            <p>
              {street}, {city}, {state}, {postalCode},{" "}
              {country || "Not available"}
            </p>
          </div>
          <div className="info-group">
            <label>Height:</label>
            <p>
              {height} {heightUnit || "Not available"}
            </p>
          </div>
          <div className="info-group">
            <label>Weight:</label>
            <p>
              {weight} {weightUnit || "Not available"}
            </p>
          </div>
          <div className="info-group">
            <label>Activity Level:</label>
            <p>{activityLevel || "Not available"}</p>
          </div>
          <div className="info-group">
            <label>Fitness Level:</label>
            <p>{fitnessLevel || "Not available"}</p>
          </div>
          <div className="info-group">
            <label>Weight Goal:</label>
            <p>{weightGoal || "Not available"}</p>
          </div>
          <div className="info-group">
            <label>Subscription Plan:</label>
            <p>{subscriptionPlan || "Not available"}</p>
          </div>
          <div className="info-group">
            <label>Subscription Expiry:</label>
            <p>{subscriptionExpiry || "Not available"}</p>
          </div>
          <div className="info-group">
            <label>Account Status:</label>
            <p>{accountStatus || "Not available"}</p>
          </div>
          <div className="info-group">
            <label>Online Status:</label>
            <p>{onlineStatus || "Not available"}</p>
          </div>
          <div className="info-group">
            <label>Last Login:</label>
            <p>{lastLogin || "Not available"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
