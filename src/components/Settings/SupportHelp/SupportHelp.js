import React, { useState } from "react";
import { Container, Row, Col, Accordion, Form, Button } from "react-bootstrap";
import "./SupportHelp.scss";

const SupportHelp = () => {
  const [ticket, setTicket] = useState({
    name: "",
    email: "",
    issue: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTicket({ ...ticket, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle ticket submission logic here
    console.log("Ticket Submitted:", ticket);
  };

  return (
    <Container className="support-help">
      <Row>
        <Col xs={12} md={6} className="mb-4">
          <h2>FAQ</h2>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>How do I reset my password?</Accordion.Header>
              <Accordion.Body>
                You can reset your password by going to the account settings and
                selecting "Reset Password". You'll receive an email with
                instructions to reset your password.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                How do I update my profile information?
              </Accordion.Header>
              <Accordion.Body>
                Navigate to the "Account Settings" section and click on "Edit
                Profile". You can update your name, email, and other details
                there.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>How do I track my workouts?</Accordion.Header>
              <Accordion.Body>
                Use the "Workout Tracker" feature in the app to log and monitor
                your workout routines. You can add new workouts, set goals, and
                track progress.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>

        <Col xs={12} md={6} className="mb-4">
          <h2>Billing Questions</h2>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                How do I view my billing history?
              </Accordion.Header>
              <Accordion.Body>
                You can view your billing history by navigating to the
                "Subscription & Billing" section in the app. All your past
                invoices and payment details will be listed there.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                How do I update my payment method?
              </Accordion.Header>
              <Accordion.Body>
                To update your payment method, go to the "Subscription &
                Billing" section and select "Update Payment Method". You can add
                a new card or update existing payment information.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                How do I cancel my subscription?
              </Accordion.Header>
              <Accordion.Body>
                To cancel your subscription, visit the "Subscription & Billing"
                section and select "Cancel Subscription". Follow the prompts to
                complete the cancellation.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={6} className="mb-4">
          <h2>Email Support</h2>
          <p>
            If you need further assistance, feel free to contact us via email at{" "}
            <a href="mailto:support@palmfit.com">support@palmfit.com</a>.
          </p>
        </Col>

        <Col xs={12} md={6} className="mb-4">
          <h2>Phone Support</h2>
          <p>
            You can reach us by phone at (123) 456-7890. Our support team is
            available from 9 AM to 5 PM, Monday to Friday.
          </p>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <h2>Submit a Ticket</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={ticket.name}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={ticket.email}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formIssue" className="mb-3">
              <Form.Label>Issue</Form.Label>
              <Form.Control
                type="text"
                placeholder="Brief description of the issue"
                name="issue"
                value={ticket.issue}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formDescription" className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Detailed description of the issue"
                name="description"
                value={ticket.description}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit Ticket
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SupportHelp;
