import React, { useState } from 'react';
import './DogProfile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card, Badge, ListGroup, ProgressBar, Tooltip, OverlayTrigger, Modal, Button } from 'react-bootstrap';
import { Chart } from 'react-google-charts';
import Calendar from 'react-calendar';
import { FaPaw, FaBone, FaHeartbeat } from 'react-icons/fa';

const DogProfile = ({ dog = {} }) => {
  const {
    name = 'Buddy',
    photo = 'https://i.pinimg.com/originals/60/de/b3/60deb334a5026627eecabbbc98def86c.jpg',
    breed = 'Golden Retriever',
    age = '3',
    description = 'A very friendly and loyal dog who loves to play and interact with people.',
    traits = ['Loyal', 'Playful', 'Good with kids', 'Energetic'],
    medications = [
      { name: 'Heartguard', dosage: 'Monthly' },
      { name: 'Flea & Tick', dosage: 'Monthly' },
      { name: 'Joint Supplement', dosage: 'Daily' }
    ],
    exercise = '2 hours per day',
    feedingSchedule = 'Twice daily',
    vetVisits = [
      { date: new Date(2024, 2, 15), reason: 'Annual Checkup' },
      { date: new Date(2024, 5, 22), reason: 'Vaccination' }
    ]
  } = dog;

  const [showModal, setShowModal] = useState(false);
  const [selectedVisit, setSelectedVisit] = useState(null);

  const medicationData = [
    ['Medication', 'Dosage Frequency'],
    ...medications.map((med) => [med.name, med.dosage === 'Daily' ? 1 : 30]),
  ];

  const chartOptions = {
    title: 'Medication Dosage Frequency',
    is3D: true,
    backgroundColor: 'transparent',
    chartArea: { width: '80%', height: '70%' },
    colors: ['#17a2b8', '#6c757d', '#28a745'],
    legend: { position: 'bottom' },
    titleTextStyle: { color: '#343a40', fontSize: 18 },
  };

  const onDateClick = (value) => {
    const visit = vetVisits.find((visit) => visit.date.toDateString() === value.toDateString());
    if (visit) {
      setSelectedVisit(visit);
      setShowModal(true);
    }
  };

  const tileContent = ({ date, view }) => {
    if (vetVisits.find((visit) => visit.date.toDateString() === date.toDateString())) {
      return (
        <div className="calendar-dot" />
      );
    }
  };

  return (
    <div className="custom-body">
    <div className="dog-profile-container">
      <Row className="align-items-center mb-5">
        <Col md={4} className="text-center">
          <img 
            src={photo} 
            alt={`${name}'s profile`} 
            className="dog-photo rounded-circle" 
          />
        </Col>
        <Col md={8} className="dog-details">
          <h2 className="text-primary mb-3">{name}</h2>
          <p className="text-muted">
            Breed: {breed} <br />
            Age: {age} years
          </p>
          <p className="dog-description">{description}</p>
          <div className="dog-traits mb-4">
            <h5>Personality Traits:</h5>
            <ListGroup variant="flush">
              {traits.length > 0 ? (
                traits.map((trait, index) => (
                  <ListGroup.Item key={index} className="border-0">
                    <FaPaw className="me-2 text-primary" /> {trait}
                  </ListGroup.Item>
                ))
              ) : (
                <ListGroup.Item className="border-0 text-muted">No traits listed</ListGroup.Item>
              )}
            </ListGroup>
          </div>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col md={12} className="text-center">
          <h4 className="text-secondary">Medications</h4>
          <ListGroup variant="flush" className="medication-list">
            {medications.length > 0 ? (
              medications.map((medication, index) => (
                <ListGroup.Item key={index} className="border-0 d-flex align-items-center">
                  <Badge pill bg="info" className="me-2">{medication.name}</Badge>
                  {medication.dosage}
                </ListGroup.Item>
              ))
            ) : (
              <ListGroup.Item className="border-0 text-muted">No medications listed</ListGroup.Item>
            )}
          </ListGroup>
          <div className="mt-4">
            <Chart
              chartType="PieChart"
              data={medicationData}
              options={chartOptions}
              width={'100%'}
              height={'300px'}
            />
          </div>
        </Col>
      </Row>
      <Row className="dog-additional-info">
        <Col md={4} className="text-center mb-4">
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title className="text-secondary">
                <FaBone className="me-2 text-primary" />Exercise Routine
              </Card.Title>
              <Card.Text>{exercise}</Card.Text>
              <ProgressBar now={80} label={`${80}%`} variant="success" />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="text-center mb-4">
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title className="text-secondary">
                <FaPaw className="me-2 text-primary" />Feeding Schedule
              </Card.Title>
              <Card.Text>{feedingSchedule}</Card.Text>
              <ProgressBar now={50} label={`${50}%`} variant="warning" />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="text-center mb-4">
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title className="text-secondary">
                <FaHeartbeat className="me-2 text-primary" />Veterinary Visits
              </Card.Title>
              <Calendar
                onClickDay={onDateClick}
                tileContent={tileContent}
                className="mx-auto"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal for Vet Visit Details */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Vet Visit Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedVisit && (
            <>
              <p><strong>Date:</strong> {selectedVisit.date.toDateString()}</p>
              <p><strong>Reason:</strong> {selectedVisit.reason}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </div>
  );
};

export default DogProfile;
