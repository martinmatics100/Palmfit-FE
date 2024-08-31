import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./SettingsPage.scss";
import Subscrpition from "../MealPlanComponent/MealPlanPage";
import NotificationSettings from "./Notification/NotificationSettings";
import SupportHelp from "./SupportHelp/SupportHelp";
import PrivacySettings from "./Privacy/PrivacySettings";

const SettingsPage = () => {
  const [activeSection, setActiveSection] = useState("notifications");

  return (
    <Container className="settings-page">
      {/* Navigation Links */}
      <Row className="settings-nav">
        <Col>
          <Button
            variant="link"
            className={activeSection === "notifications" ? "active" : ""}
            onClick={() => setActiveSection("notifications")}
          >
            Notification Settings
          </Button>
          <Button
            variant="link"
            className={activeSection === "privacy" ? "active" : ""}
            onClick={() => setActiveSection("privacy")}
          >
            Privacy Settings
          </Button>
          {/* <Button
            variant="link"
            className={activeSection === "subscription" ? "active" : ""}
            onClick={() => setActiveSection("subscription")}
          >
            Subscription & Billing
          </Button> */}
          <Button
            variant="link"
            className={activeSection === "support" ? "active" : ""}
            onClick={() => setActiveSection("support")}
          >
            Support & Help
          </Button>
        </Col>
      </Row>

      {/* Render the Active Section */}
      <Row className="settings-content">
        <Col>
          {activeSection === "notifications" && (
            <div>
              <h2>Notification Settings</h2>
              <p>
                Palmfit may still send you important notifications about your
                account and content outside of your preferred notification
                settings..
              </p>
              <NotificationSettings />
            </div>
          )}
          {activeSection === "privacy" && (
            <div>
              <h2>Privacy Settings</h2>
              <p>Control your privacy preferences and data sharing options.</p>
              <PrivacySettings />
            </div>
          )}
          {/* {activeSection === "subscription" && (
            <div>
              <h2>Subscription & Billing</h2>
              <p>
                View and manage your subscription, payment methods, and billing
                history.
              </p>
            </div>
          )} */}
          {activeSection === "support" && (
            <div>
              <h2>Support & Help</h2>
              <p>
                Access support resources, FAQs, and contact customer support.
              </p>
              <SupportHelp />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SettingsPage;
