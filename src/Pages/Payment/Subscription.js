import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Subscription = () => {
  return (
    <Container className="fund-wallet-container mt-4">
      <Row className="mb-4 text-align-center">
        <Card className="active-plan-card p-3">
          <Card.Body>
            <Card.Title>Active plan</Card.Title>
            <Card.Text>
              You are currently not subscribed to any plan. Check below for our
              pricing to get started.
            </Card.Text>
            <Button variant="success">Subscribe</Button>
          </Card.Body>
        </Card>
      </Row>
      <Row className="mb-4 text-align-center"></Row>
    </Container>
  );
};

export default Subscription;
