import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./NotificationSettings.scss";

const NotificationSettings = () => {
  // Initialize state with data from localStorage or default values
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
          hydrationReminders: true,
          sleepTrackingNotifications: true,
          subscriptionAndBillingAlerts: true,
          appUpdatesAndNews: true,
          safetyAlerts: true,
        };
  });

  // Save settings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("notifications", JSON.stringify(notifications));
  }, [notifications]);

  const handleNotificationChange = (type, value) => {
    setNotifications({
      ...notifications,
      [type]: value,
    });
  };

  return (
    <Container className="notification-settings">
      <Form>
        <Row>
          {Object.keys(notifications).map((key) => (
            <Col xs={12} sm={6} md={4} className="mb-3" key={key}>
              <Form.Label>{key.replace(/([A-Z])/g, " $1").trim()}</Form.Label>
              <div className="radio-group">
                <Form.Check
                  type="radio"
                  label="On"
                  name={key}
                  checked={notifications[key]}
                  onChange={() => handleNotificationChange(key, true)}
                  className={notifications[key] ? "checked" : ""}
                />
                <Form.Check
                  type="radio"
                  label="Off"
                  name={key}
                  checked={!notifications[key]}
                  onChange={() => handleNotificationChange(key, false)}
                  className={!notifications[key] ? "checked" : ""}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Form>
    </Container>
  );
};

export default NotificationSettings;
