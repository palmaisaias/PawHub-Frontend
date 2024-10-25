import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Offcanvas } from 'react-bootstrap';
import { FaEdit, FaSave, FaBars } from 'react-icons/fa';
import styled from 'styled-components';
import './NewUserProfile.css';

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 250px;
  height: 250px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const NewUserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'RoboDog',
    age: '3 years',
    breed: 'Golden Retriever',
    gender: 'Male',
    weight: '30 kg',
    spayed: 'Yes',
    microchip: '1234567890',
    vetClinic: 'Happy Tails Vet Clinic',
    vetDoctor: 'Dr. Emily Ross',
    clinicPhone: '(123) 456-7890',
    clinicEmail: 'happyvets@example.com'
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <Button variant="primary" onClick={handleMenuToggle} className="mb-3">
        <FaBars /> Menu
      </Button>

      <Offcanvas show={showMenu} onHide={handleMenuToggle} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-unstyled">
            <li>
              <Button variant="link" onClick={() => alert('Profile Clicked')}>Profile</Button>
            </li>
            <li>
              <Button variant="link" onClick={() => alert('Calendar Clicked')}>Calendar</Button>
            </li>
            <li>
              <Button variant="link" onClick={() => alert('Medical Records Clicked')}>Medical Records</Button>
            </li>
            <li>
              <Button variant="link" onClick={() => alert('Map Clicked')}>Map</Button>
            </li>
            <li>
              <Button variant="link" onClick={() => alert('Pets Clicked')}>Pets</Button>
            </li>
            <li>
              <Button variant="link" onClick={() => alert('Settings Clicked')}>Settings</Button>
            </li>
            <li>
              <Button variant="link" onClick={() => alert('Logout Clicked')}>Logout</Button>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>

      <Container className="new-prof mt-5">
        <Row>
          <Col md={3} className="text-center">
            <ProfileImage src="https://cdn-icons-png.flaticon.com/512/5094/5094257.png" alt="RoboDog" />
            <Button variant="outline-light" onClick={handleEditToggle}>
              {isEditing ? <FaSave /> : <FaEdit />} {isEditing ? 'Save' : 'Edit'}
            </Button>
          </Col>
          <Col md={9}>
            <Card>
              <Card.Body>
                <Card.Title>Dog Information</Card.Title>
                <Form>
                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={profileData.name}
                          onChange={handleInputChange}
                          readOnly={!isEditing}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formAge">
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                          type="text"
                          name="age"
                          value={profileData.age}
                          onChange={handleInputChange}
                          readOnly={!isEditing}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group controlId="formBreed">
                        <Form.Label>Breed</Form.Label>
                        <Form.Control
                          type="text"
                          name="breed"
                          value={profileData.breed}
                          onChange={handleInputChange}
                          readOnly={!isEditing}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formGender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control
                          type="text"
                          name="gender"
                          value={profileData.gender}
                          onChange={handleInputChange}
                          readOnly={!isEditing}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group controlId="formWeight">
                        <Form.Label>Weight</Form.Label>
                        <Form.Control
                          type="text"
                          name="weight"
                          value={profileData.weight}
                          onChange={handleInputChange}
                          readOnly={!isEditing}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formSpayed">
                        <Form.Label>Spayed/Neutered</Form.Label>
                        <Form.Control
                          type="text"
                          name="spayed"
                          value={profileData.spayed}
                          onChange={handleInputChange}
                          readOnly={!isEditing}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={12}>
                      <Form.Group controlId="formMicrochip">
                        <Form.Label>Microchip Number</Form.Label>
                        <Form.Control
                          type="text"
                          name="microchip"
                          value={profileData.microchip}
                          onChange={handleInputChange}
                          readOnly={!isEditing}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
            <Card className="mt-4">
              <Card.Body>
                <Card.Title>Vet Information</Card.Title>
                <Form>
                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group controlId="formVetClinic">
                        <Form.Label>Vet Clinic</Form.Label>
                        <Form.Control
                          type="text"
                          name="vetClinic"
                          value={profileData.vetClinic}
                          onChange={handleInputChange}
                          readOnly={!isEditing}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formVetDoctor">
                        <Form.Label>Vet Doctor</Form.Label>
                        <Form.Control
                          type="text"
                          name="vetDoctor"
                          value={profileData.vetDoctor}
                          onChange={handleInputChange}
                          readOnly={!isEditing}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group controlId="formClinicPhone">
                        <Form.Label>Clinic Phone Number</Form.Label>
                        <Form.Control
                          type="text"
                          name="clinicPhone"
                          value={profileData.clinicPhone}
                          onChange={handleInputChange}
                          readOnly={!isEditing}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formClinicEmail">
                        <Form.Label>Clinic Email</Form.Label>
                        <Form.Control
                          type="text"
                          name="clinicEmail"
                          value={profileData.clinicEmail}
                          onChange={handleInputChange}
                          readOnly={!isEditing}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NewUserProfile;