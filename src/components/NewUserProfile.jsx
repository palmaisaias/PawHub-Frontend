import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Offcanvas, Dropdown } from 'react-bootstrap';
import { FaEdit, FaSave, FaBars, FaUser, FaCalendarAlt, FaClipboard, FaMapMarkedAlt, FaDog, FaCog, FaPlus } from 'react-icons/fa';
import styled from 'styled-components';
import './NewUserProfile.css';
import pawhub from '../assets/pawhub.png';

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 250px;
  height: 250px;
  object-fit: cover;
  margin-bottom: 20px;
`;

function EnhancedOffcanvas({ showMenu, handleMenuToggle }) {
  const [pets, setPets] = useState(['Buddy', 'Max', 'Charlie']);

  return (
    <Offcanvas show={showMenu} onHide={handleMenuToggle} placement="start">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <img src={pawhub} alt="Logo" style={{ maxHeight: '60px' }} />
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ul className="list-unstyled">
          {/* Top options */}
          <li>
            <Button variant="link" onClick={() => alert('Profile Clicked')} className="push-menu d-flex align-items-center">
              <FaUser className="me-2" /> Profile
            </Button>
          </li>
          <li>
            <Button variant="link" onClick={() => alert('Calendar Clicked')} className="push-menu d-flex align-items-center">
              <FaCalendarAlt className="me-2" /> Calendar
            </Button>
          </li>
          <li>
            <Button variant="link" onClick={() => alert('Medical Records Clicked')} className="push-menu d-flex align-items-center">
              <FaClipboard className="me-2" /> Medical Records
            </Button>
          </li>
          <li>
            <Button variant="link" onClick={() => alert('Map Clicked')} className="push-menu d-flex align-items-center">
              <FaMapMarkedAlt className="me-2" /> Map
            </Button>
          </li>

          {/* First border */}
          <hr />

          {/* Pets dropdown */}
          <li>
            <Dropdown>
              <Dropdown.Toggle variant="link" className="push-menu d-flex align-items-center">
                <FaDog className="me-2" /> Pets
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {pets.map((pet, index) => (
                  <Dropdown.Item key={index} onClick={() => alert(`${pet} Clicked`)}>
                    {pet}
                  </Dropdown.Item>
                ))}
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => alert('Add Dog Clicked')} className="d-flex align-items-center">
                  <FaPlus className="me-2" /> Add Dog
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>

          {/* Second border */}
          <hr />

          {/* Settings and Logout */}
          <li>
            <Button variant="link" onClick={() => alert('Settings Clicked')} className="push-menu d-flex align-items-center">
              <FaCog className="me-2" /> Settings
            </Button>
          </li>
          <li>
            <Button variant="link" onClick={() => alert('Logout Clicked')} className="logout-menu d-flex align-items-center">
              logout
            </Button>
          </li>
        </ul>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

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

      <EnhancedOffcanvas showMenu={showMenu} handleMenuToggle={handleMenuToggle} />

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
