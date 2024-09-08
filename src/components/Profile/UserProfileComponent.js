import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Row, Col, InputGroup } from "react-bootstrap";
import "./UserProfileComponent.scss";
import avatar from "../../Assets/profilePicAvatar.png";
import { useNavigate } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EditProfileModal from "../Modal/EditProfileModal";
import EditIcon from "@mui/icons-material/Edit"; // MUI Edit icon
import CheckIcon from "@mui/icons-material/Check"; // MUI Check icon

const UserProfileComponent = () => {
  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState({
    profilePicture: avatar,
    firstName: "Martin",
    lastName: "Nwatu",
    email: "martinchukwuemeka67@gmail.com",
    userName: "martinmatics",
    userBio: "I love mathematics",
    phoneNumber: "091-3151-8262",
    address: "No 9 shola ademodi street, Ejigbo, Lagos State",
    gender: "male",
    dateOfBirth: "15th October 2010",
    height: "86 kg",
    activityLevel: "",
    fitnesssLevel: "Active",
    weightGoal: "",
    bmi: "",
  });

  // // State to manage which field is being edited
  // const [isEditing, setIsEditing] = useState({
  //   firstName: false,
  //   lastName: false,
  // });

  // // Function to toggle edit mode
  // const handleEditToggle = (field) => {
  //   setIsEditing({ ...isEditing, [field]: !isEditing[field] });
  // };

  // // Function to handle input changes
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setProfile({ ...profile, [name]: value });
  // };

  const copyToClipboard = () => {
    const referralLink = "palmfit.com/referrals=1579292074940";
    navigator.clipboard.writeText(referralLink);
    alert("Referral link copied to clipboard!");
  };

  return (
    <div className="container-fluid">
      <div className="card mt-5 container-content">
        <div className="card-body text-center">
          <div className="profile-picture">
            <img
              src={profile.profilePicture}
              alt="Profile"
              className="img-thumbnail rounded-circle profile-picture-img"
            />
          </div>
          <Form className="mt-3">
            <Row>
              {/* First Name */}
              <Col md={3}>
                <Form.Group controlId="formFirstName">
                  <Form.Label className="label">First Name</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="profile-icon-container">
                      <i className="fas fa-user profile-icon"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={profile.firstName}
                      readOnly
                      className="custom-input"
                    />
                  </InputGroup>
                </Form.Group>
              </Col>

              {/* Last Name */}
              <Col md={3}>
                <Form.Group controlId="formLastName">
                  <Form.Label className="label">Last Name</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="profile-icon-container">
                      <i className="fas fa-user profile-icon"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="lastName"
                      value={profile.lastName}
                      readOnly
                      className="custom-input"
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formEmail">
                  <Form.Label className="label">Email</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="profile-icon-container">
                      <i className="fas fa-envelope profile-icon"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="email"
                      name="email"
                      value={profile.email}
                      readOnly
                      className="custom-input"
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formUserName">
                  <Form.Label className="label">Username</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="profile-icon-container">
                      <i className="fas fa-user-circle profile-icon"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="userName"
                      value={profile.userName}
                      readOnly
                      className="custom-input"
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <Form.Group controlId="formUserBio">
                  <Form.Label className="label">Bio</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="profile-icon-container">
                      <i className="fas fa-info-circle profile-icon"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="userBio"
                      value={profile.userBio}
                      readOnly
                      className="custom-input"
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formPhoneNumber">
                  <Form.Label className="label">Phone Number</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="profile-icon-container">
                      <i className="fas fa-phone profile-icon"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="phoneNumber"
                      value={profile.phoneNumber}
                      readOnly
                      className="custom-input"
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formAddress">
                  <Form.Label className="label">Address</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="profile-icon-container">
                      <i className="fas fa-map-marker-alt profile-icon"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="address"
                      value={profile.address}
                      readOnly
                      className="custom-input"
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formGender">
                  <Form.Label className="label">Gender</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="profile-icon-container">
                      <i className="fas fa-venus-mars profile-icon"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="gender"
                      value={profile.gender}
                      readOnly
                      className="custom-input"
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>
            <Row></Row>
            <Row>
              <Col md={3}>
                <Form.Group controlId="formAddress">
                  <Form.Label className="label">Date of Birth</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="profile-icon-container">
                      <i className="fas fa-map-marker-alt profile-icon"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="address"
                      value={profile.dateOfBirth}
                      readOnly
                      className="custom-input"
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formGender">
                  <Form.Label className="label">Height</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="profile-icon-container">
                      <i className="fas fa-venus-mars profile-icon"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="gender"
                      value={profile.height}
                      readOnly
                      className="custom-input"
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formAddress">
                  <Form.Label className="label">Activity Level</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="profile-icon-container">
                      <i className="fas fa-map-marker-alt profile-icon"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="address"
                      value={profile.address}
                      readOnly
                      className="custom-input"
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formGender">
                  <Form.Label className="label">Fitness Level</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="profile-icon-container">
                      <i className="fas fa-venus-mars profile-icon"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="gender"
                      value={profile.fitnesssLevel}
                      readOnly
                      className="custom-input"
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <Form.Group controlId="formAddress">
                  <Form.Label className="label">Weight Goal</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="profile-icon-container">
                      <i className="fas fa-map-marker-alt profile-icon"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="address"
                      value={profile.weightGoal}
                      readOnly
                      className="custom-input"
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formGender">
                  <Form.Label className="label">
                    BMI (Body Mass Index)
                  </Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="profile-icon-container">
                      <i className="fas fa-venus-mars profile-icon"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="gender"
                      value={profile.bmi}
                      readOnly
                      className="custom-input"
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </div>
        <div className="referral-section p-4">
          <Row>
            <Col md={6} className="referral-text">
              <h4>Referral</h4>
              <p>Refer your friends and let them join you on this journey.</p>
            </Col>
            <Col md={6} className="referral-link">
              <h4 className="share-referral-link">Share referral link</h4>
              <InputGroup>
                <Form.Control
                  type="text"
                  readOnly
                  value="palmfit.com/referrals=1579292074940" // Replace with your actual referral link
                />
                <Button variant="secondary" onClick={copyToClipboard}>
                  Copy Link
                </Button>
              </InputGroup>
              <div className="mt-4 referral-icons">
                <span className="mr-4 whatsapp">
                  <WhatsAppIcon />
                </span>
                <span className="mr-4 facebook">
                  <FacebookIcon />
                </span>
                <span className="mr-4 twitter">
                  <TwitterIcon />
                </span>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* <div className="referral-section p-4">
        <Row>
          <Col md={6} className="referral-text">
            <h4>Referral</h4>
            <p>Refer your friends and let them join you on this journey.</p>
          </Col>
          <Col md={6} className="referral-link">
            <h4 className="share-referral-link">Share referral link</h4>
            <InputGroup>
              <Form.Control
                type="text"
                readOnly
                value="palmfit.com/referrals=1579292074940" // Replace with your actual referral link
              />
              <Button variant="secondary" onClick={copyToClipboard}>
                Copy Link
              </Button>
            </InputGroup>
            <div className="mt-4 referral-icons">
              <span className="mr-4 whatsapp">
                <WhatsAppIcon />
              </span>
              <span className="mr-4 facebook">
                <FacebookIcon />
              </span>
              <span className="mr-4 twitter">
                <TwitterIcon />
              </span>
            </div>
          </Col>
        </Row>
      </div> */}
    </div>
  );
};
export default UserProfileComponent;
