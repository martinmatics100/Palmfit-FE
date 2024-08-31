import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./SupportHelp.scss";
import LoadingPage from "../../LoadingPage/LoadingPage";

const SupportHelp = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const [ticket, setTicket] = useState({
    name: "",
    email: "",
    issue: "",
    description: "",
  });

  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTicket({ ...ticket, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle ticket submission logic here
    console.log("Ticket Submitted:", ticket);
  };

  const handleAccordionToggle = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="loader-container">
      {loading ? (
        <LoadingPage loading={loading} />
      ) : (
        <Container className="support-help">
          <Row>
            <Col xs={12} md={6} className="mb-4">
              <h2>FAQ</h2>
              <div className="accordion">
                <div className="accordion-item">
                  <div
                    className="accordion-header"
                    onClick={() => handleAccordionToggle(0)}
                  >
                    How do I reset my password?
                  </div>
                  <div
                    className={`accordion-body ${
                      activeAccordion === 0 ? "show" : ""
                    }`}
                  >
                    You can reset your password by going to the account settings
                    and selecting "Reset Password". You'll receive an email with
                    instructions to reset your password.
                  </div>
                </div>
                <div className="accordion-item">
                  <div
                    className="accordion-header"
                    onClick={() => handleAccordionToggle(1)}
                  >
                    How do I update my profile information?
                  </div>
                  <div
                    className={`accordion-body ${
                      activeAccordion === 1 ? "show" : ""
                    }`}
                  >
                    Navigate to the "Account Settings" section and click on
                    "Edit Profile". You can update your name, email, and other
                    details there.
                  </div>
                </div>
                <div className="accordion-item">
                  <div
                    className="accordion-header"
                    onClick={() => handleAccordionToggle(2)}
                  >
                    How do I track my workouts?
                  </div>
                  <div
                    className={`accordion-body ${
                      activeAccordion === 2 ? "show" : ""
                    }`}
                  >
                    Use the "Workout Tracker" feature in the app to log and
                    monitor your workout routines. You can add new workouts, set
                    goals, and track progress.
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={12} md={6} className="mb-4">
              <h2>Billing Questions</h2>
              <div className="accordion">
                <div className="accordion-item">
                  <div
                    className="accordion-header"
                    onClick={() => handleAccordionToggle(3)}
                  >
                    How do I view my billing history?
                  </div>
                  <div
                    className={`accordion-body ${
                      activeAccordion === 3 ? "show" : ""
                    }`}
                  >
                    You can view your billing history by navigating to the
                    "Subscription & Billing" section in the app. All your past
                    invoices and payment details will be listed there.
                  </div>
                </div>
                <div className="accordion-item">
                  <div
                    className="accordion-header"
                    onClick={() => handleAccordionToggle(4)}
                  >
                    How do I update my payment method?
                  </div>
                  <div
                    className={`accordion-body ${
                      activeAccordion === 4 ? "show" : ""
                    }`}
                  >
                    To update your payment method, go to the "Subscription &
                    Billing" section and select "Update Payment Method". You can
                    add a new card or update existing payment information.
                  </div>
                </div>
                <div className="accordion-item">
                  <div
                    className="accordion-header"
                    onClick={() => handleAccordionToggle(5)}
                  >
                    How do I cancel my subscription?
                  </div>
                  <div
                    className={`accordion-body ${
                      activeAccordion === 5 ? "show" : ""
                    }`}
                  >
                    To cancel your subscription, visit the "Subscription &
                    Billing" section and select "Cancel Subscription". Follow
                    the prompts to complete the cancellation.
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6} className="mb-4">
              <h2>Email Support</h2>
              <p>
                If you need further assistance, feel free to contact us via
                email at{" "}
                <a href="mailto:support@palmfit.com">palmfit@gmail.com</a>.
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
      )}
    </div>
  );
};

export default SupportHelp;
