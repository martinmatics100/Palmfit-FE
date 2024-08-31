import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import { FaInfoCircle } from "react-icons/fa";
import LoadingPage from "../../LoadingPage/LoadingPage";
import "./NotificationSettings.scss";

const NotificationSettings = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const [notifications, setNotifications] = useState(() => {
    const savedNotifications = localStorage.getItem("notifications");
    return savedNotifications
      ? JSON.parse(savedNotifications)
      : {
          workoutReminders: true,
          mealPlanNotifications: true,
          goalTrackingAlerts: true,
          motivationalMessages: true,
          healthAndWellnessTips: true,
          activityLevelReminders: true,
          appUpdatesAndNews: true,
          safetyAlerts: true,
        };
  });

  const [showInfo, setShowInfo] = useState({});

  useEffect(() => {
    localStorage.setItem("notifications", JSON.stringify(notifications));
  }, [notifications]);

  const handleNotificationChange = (type, value) => {
    setNotifications({
      ...notifications,
      [type]: value,
    });
  };

  const handleInfoToggle = (key) => {
    setShowInfo((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));

    if (!showInfo[key]) {
      setTimeout(() => {
        setShowInfo((prev) => ({
          ...prev,
          [key]: false,
        }));
      }, 5000); // 5 seconds
    }
  };

  const notificationLabels = {
    workoutReminders: "Workout Reminders Notification",
    mealPlanNotifications: "Meal Plan Notifications",
    goalTrackingAlerts: "Goal Tracking Alerts",
    motivationalMessages: "Motivational Messages",
    healthAndWellnessTips: "Health and Wellness Tips",
    activityLevelReminders: "Activity Level Reminders",
    appUpdatesAndNews: "App Updates and News",
    safetyAlerts: "Safety Alerts",
  };

  const notificationInfo = {
    workoutReminders: "Receive reminders for your scheduled workouts.",
    mealPlanNotifications: "Get notifications about your meal plans.",
    goalTrackingAlerts: "Alerts to help you track your fitness goals.",
    motivationalMessages: "Get Daily motivational messages to keep you going.",
    healthAndWellnessTips:
      "Get Tips to improve your overall health and wellness.",
    activityLevelReminders: "Get Reminders to keep your activity levels up.",
    appUpdatesAndNews: "Stay informed about the latest updates and news.",
    safetyAlerts: "Get alerts regarding safety tips and information.",
  };

  return (
    <div className="loader-container">
      {loading ? (
        <LoadingPage loading={loading} />
      ) : (
        <Container className="notification-settings">
          <Form>
            <Row>
              {Object.keys(notifications).map((key) => (
                <Col xs={12} sm={6} md={4} className="mb-3" key={key}>
                  <div className="label-with-info">
                    <Form.Label>{notificationLabels[key]}</Form.Label>
                    <FaInfoCircle
                      className="info-icon"
                      onClick={() => handleInfoToggle(key)}
                    />
                  </div>
                  {/* Conditionally render the info message */}
                  {showInfo[key] && (
                    <div className="info-message">{notificationInfo[key]}</div>
                  )}
                  <ToggleButtonGroup
                    type="radio"
                    name={key}
                    value={notifications[key] ? 1 : 0}
                    onChange={(val) => handleNotificationChange(key, val === 1)}
                    className="toggle-group"
                  >
                    <ToggleButton
                      id={`${key}-on`}
                      value={1}
                      className={`btn-on ${
                        notifications[key] ? "selected" : ""
                      }`}
                    >
                      On
                    </ToggleButton>
                    <ToggleButton
                      id={`${key}-off`}
                      value={0}
                      className={`btn-off ${
                        !notifications[key] ? "selected" : ""
                      }`}
                    >
                      Off
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Col>
              ))}
            </Row>
          </Form>
        </Container>
      )}
    </div>
  );
};

export default NotificationSettings;
