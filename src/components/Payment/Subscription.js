import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./SubscriptionComponent.scss"; // Import the SCSS file
import LoadingPage from "../LoadingPage/LoadingPage";

const SubscriptionComponent = () => {
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
        <Container className="subscription-container">
          <Row className="justify-content-center">
            {/* Use responsive grid classes to make the columns side by side on larger screens and stack on smaller screens */}
            <Col md={6} sm={12} className="active-plan-section mb-3 mb-md-0">
              <Card className="active-plan-card">
                <Card.Body>
                  <Card.Title className="text-start">Active plan</Card.Title>
                  <Card.Text className="text-start">
                    You are currently not subscribed to any plan. Check below
                    for our pricing to get started.
                  </Card.Text>
                  <Button variant="success" className="subscribe-button">
                    Subscribe
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} sm={12} className="wallet-section">
              <Card className="wallet-card">
                <Card.Body>
                  <Card.Title className="wallet-title">
                    Palmfit Wallet
                  </Card.Title>
                  <Card.Text className="wallet-balance">#29,500</Card.Text>
                  <Card.Text className="wallet-status">Paid Out</Card.Text>
                </Card.Body>
              </Card>
              <Button
                variant="outline-success"
                className="fund-wallet-button mt-3"
              >
                Fund Wallet
              </Button>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default SubscriptionComponent;
