// Calendar.jsx

import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { Offcanvas, Button, Form, Modal } from 'react-bootstrap';
import './Calendar.css';

function Calendar() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  const handleDateClick = (info) => {
    const eventsForTheDay = events.filter(event => event.date === info.dateStr);
    setModalInfo({ date: info.dateStr, events: eventsForTheDay });
    setShowModal(true);
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.elements["title"].value;
    const date = form.elements["date"].value;
    const time = form.elements["time"].value;
    if (title && date) {
      setEvents([...events, { title, date, time }]);
    }
    form.reset();
  };

  return (
    <div className="calendar-page">
      <div className="calendar-main">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin]}
          initialView="dayGridMonth"
          events={events}
          dateClick={handleDateClick}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
          }}
        />
      </div>
      <div className="calendar-sidebar">
        <Button variant="primary" onClick={() => setShowOffcanvas(true)} className="hidden-menu">
          Menu
        </Button>
        <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)} className="calendar-offcanvas">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul className="list-unstyled">
              <li><a href="#" className="push-menu">Dashboard</a></li>
              <li><a href="#" className="push-menu">Settings</a></li>
              <li><a href="#" className="logout-menu">Logout</a></li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
        <div className="add-event-form">
          <Form onSubmit={handleAddEvent}>
            <Form.Group className="mb-3" controlId="eventTitle">
              <Form.Label>Event Title</Form.Label>
              <Form.Control type="text" name="title" placeholder="Enter event title" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="eventDate">
              <Form.Label>Event Date</Form.Label>
              <Form.Control type="date" name="date" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="eventTime">
              <Form.Label>Event Time</Form.Label>
              <Form.Control type="time" name="time" required />
            </Form.Group>
            <Button variant="primary" type="submit" className="add-event-button">
              Add Event
            </Button>
          </Form>
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Events on {modalInfo.date}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalInfo.events && modalInfo.events.length > 0 ? (
            <ul>
              {modalInfo.events.map((event, index) => (
                <li key={index}>{event.title} at {event.time}</li>
              ))}
            </ul>
          ) : (
            <p>No events for this day.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Calendar;
