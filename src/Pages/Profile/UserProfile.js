import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Row, Col, InputGroup } from "react-bootstrap";
import "./UserProfile.css";
import avatar from "../../Assets/profilePicAvatar.png";
import LoadingPage from "../../components/LoadingPage/LoadingPage";
import { useNavigate } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EditProfileModal from "../../components/Modal/EditProfileModal";

const UserProfile = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

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
    gender: "",
  });

  const [newProfilePicture, setNewProfilePicture] = useState("");

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile((prevProfile) => ({
        ...prevProfile,
        profilePicture: reader.result,
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newProfilePicture) {
      setProfile((prevProfile) => ({
        ...prevProfile,
        profilePicture: newProfilePicture,
      }));
      setNewProfilePicture("");
    }
    handleClose();
  };

  const copyToClipboard = () => {
    const referralLink = "palmfit.com/referrals=1579292074940";
    navigator.clipboard.writeText(referralLink);
    alert("Referral link copied to clipboard!");
  };

  return (
    <div className="loader-container">
      {loading ? (
        <LoadingPage loading={loading} />
      ) : (
        <div className="container-fluid">
          <div className="card mt-5 container-content">
            <div className="card-body text-center">
              <div className="profile-picture">
                <img
                  src={profile.profilePicture}
                  alt="Profile"
                  className="img-thumbnail rounded-circle profile-picture-img"
                />
                <input
                  type="file"
                  className="form-control-file mt-2"
                  onChange={handleProfilePictureChange}
                />
              </div>
              <Form className="mt-3">
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formFirstName">
                      <Form.Label className="label">First Name</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <i className="fas fa-user"></i>
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
                  <Col md={6}>
                    <Form.Group controlId="formLastName">
                      <Form.Label className="label">Last Name</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <i className="fas fa-user"></i>
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
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formEmail">
                      <Form.Label className="label">Email</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <i className="fas fa-envelope"></i>
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
                  <Col md={6}>
                    <Form.Group controlId="formUserName">
                      <Form.Label className="label">Username</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <i className="fas fa-user-circle"></i>
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
                  <Col md={6}>
                    <Form.Group controlId="formUserBio">
                      <Form.Label className="label">Bio</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <i className="fas fa-info-circle"></i>
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
                  <Col md={6}>
                    <Form.Group controlId="formPhoneNumber">
                      <Form.Label className="label">Phone Number</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <i className="fas fa-phone"></i>
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
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formAddress">
                      <Form.Label className="label">Address</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <i className="fas fa-map-marker-alt"></i>
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
                  <Col md={6}>
                    <Form.Group controlId="formGender">
                      <Form.Label className="label">Gender</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <i className="fas fa-venus-mars"></i>
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
              </Form>
              <Button className="mt-3" onClick={handleShow}>
                Edit Profile
              </Button>
            </div>
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

          <EditProfileModal
            show={show}
            handleClose={handleClose}
            profile={profile}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      )}
    </div>
  );
};

export default UserProfile;
