import React, { useEffect, useState } from "react";
import "./SinglePage.scss";
import dayjs from "dayjs";
import LoadingPage from "../../../components/LoadingPage/LoadingPage";
import userPlaceholder from "../../../Assets/profilePicAvatar.png";
import { fetchUserById } from "../../../api/UserServices";
import { useParams } from "react-router-dom";
import ErrorPage from "../../../components/Error/ErrorPage";

const SinglePage = () => {
  const { userId } = useParams();
  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      setLoading(true);
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
    return <ErrorPage message={error} />;
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

  // Enum descriptions
  const HeightUnitMap = {
    1: "Cm",
    2: "In",
    3: "Ft",
  };

  const WeightUnitMap = {
    1: "Kg",
    2: "lbs",
  };

  const WeightGoalMap = {
    1: "Lose Weight",
    2: "Maintain Weight",
    3: "Gain Weight",
  };

  // Function to map enum values to human-readable text
  const mapEnumValue = (value, type) => {
    if (type === "gender") {
      return value === 1 ? "Male" : value === 2 ? "Female" : null;
    } else if (type === "accountStatus") {
      return value === "1" ? "Active" : value === "2" ? "Inactive" : null;
    } else if (type === "onlineStatus") {
      return value === "1" ? "Online" : value === "2" ? "Offline" : null;
    } else if (type === "heightUnit") {
      return HeightUnitMap[value] || "Not available";
    } else if (type === "weightUnit") {
      return WeightUnitMap[value] || "Not available";
    } else if (type === "weightGoal") {
      return WeightGoalMap[value] || "Not available";
    } else {
      return value || "Not available";
    }
  };

  // Utility function to format dates
  const getDaySuffix = (day) => {
    if (day === 1 || day === 21 || day === 31) {
      return "st";
    } else if (day === 2 || day === 22) {
      return "nd";
    } else if (day === 3 || day === 23) {
      return "rd";
    } else {
      return "th";
    }
  };

  // Function to format the date string
  const formatDate = (dateString) => {
    if (!dateString || dateString === "0001-01-01T00:00:00") return null;

    const date = dayjs(dateString);
    const day = date.date(); // Get the day of the month
    const suffix = getDaySuffix(day); // Determine the suffix

    return `${day}${suffix}-${date.format("MMMM-YYYY")}`; // Format the date with the correct suffix
  };

  // Function to render values with appropriate class
  const renderValue = (value, type) => {
    if (type === "date") {
      const formattedDate = formatDate(value);
      return (
        <span className={!formattedDate ? "not-available" : ""}>
          {formattedDate || "Not available"}
        </span>
      );
    } else if (type === "height" || type === "weight") {
      return (
        <span className={!value || value === 0 ? "not-available" : ""}>
          {value && value !== 0 ? `${value}` : "Not available"}
        </span>
      );
    } else {
      const mappedValue = mapEnumValue(value, type);
      return (
        <span
          className={!mappedValue || mappedValue === 0 ? "not-available" : ""}
        >
          {mappedValue || "Not available"}
        </span>
      );
    }
  };

  return (
    <div className="single-page-container">
      <div className="user-details">
        <div className="user-header">
          <img
            src={imageUrl || userPlaceholder}
            alt="User Profile"
            className="user-image"
          />
          <h2>{renderValue(`${firstName} ${lastName}`, "text")}</h2>
          <p className="user-username">{renderValue(userName, "text")}</p>
        </div>

        <div className="user-info">
          <div className="info-group">
            <label>Email:</label>
            <p>{renderValue(email, "text")}</p>
          </div>
          <div className="info-group">
            <label>Gender:</label>
            <p>{renderValue(gender, "gender")}</p>
          </div>
          <div className="info-group">
            <label>Date of Birth:</label>
            <p>{renderValue(dateOfBirth, "date")}</p>
          </div>
          <div className="info-group">
            <label>Phone Number:</label>
            <p>{renderValue(phoneNumber, "text")}</p>
          </div>
          <div className="info-group">
            <label>Address:</label>
            <p>
              {renderValue(
                `${street || ""}, ${city || ""}, ${state || ""}, ${
                  postalCode || ""
                }, ${country || ""}`,
                "text"
              )}
            </p>
          </div>
          <div className="info-group">
            <label>Height:</label>
            <p>
              {renderValue(height, "height")}{" "}
              {renderValue(heightUnit, "heightUnit")}
            </p>
          </div>
          <div className="info-group">
            <label>Weight:</label>
            <p>
              {renderValue(weight, "weight")}{" "}
              {renderValue(weightUnit, "weightUnit")}
            </p>
          </div>
          <div className="info-group">
            <label>Activity Level:</label>
            <p>{renderValue(activityLevel, "text")}</p>
          </div>
          <div className="info-group">
            <label>Fitness Level:</label>
            <p>{renderValue(fitnessLevel, "text")}</p>
          </div>
          <div className="info-group">
            <label>Weight Goal:</label>
            <p>{renderValue(weightGoal, "weightGoal")}</p>
          </div>
          <div className="info-group">
            <label>Subscription Plan:</label>
            <p>{renderValue(subscriptionPlan, "text")}</p>
          </div>
          <div className="info-group">
            <label>Subscription Expiry:</label>
            <p>{renderValue(subscriptionExpiry, "date")}</p>
          </div>
          <div className="info-group">
            <label>Account Status:</label>
            <p>{renderValue(accountStatus, "accountStatus")}</p>
          </div>
          <div className="info-group">
            <label>Online Status:</label>
            <p>{renderValue(onlineStatus, "onlineStatus")}</p>
          </div>
          <div className="info-group">
            <label>Last Login:</label>
            <p>{renderValue(lastLogin, "date")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
