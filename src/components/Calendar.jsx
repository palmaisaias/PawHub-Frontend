// Calendar.jsx

import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { Offcanvas, Button, Form } from "react-bootstrap";
import "./Calendar.css";
import pawhub from "../assets/pawhub.png";

function Calendar() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [events, setEvents] = useState([]);

  const handleDateClick = (info) => {
    alert(`You clicked on date: ${info.dateStr}`);
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.elements["title"].value;
    const date = form.elements["date"].value;
    if (title && date) {
      setEvents([...events, { title, date }]);
    }
    form.reset();
  };

  return (
    <div className="calendar-page">
      <div className="calendar-main">
        <FullCalendar
          plugins={[
            dayGridPlugin,
            interactionPlugin,
            timeGridPlugin,
            listPlugin,
          ]}
          initialView="dayGridMonth"
          events={events}
          dateClick={handleDateClick}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
          }}
        />
      </div>
      <div className="calendar-sidebar">
        <Button
          variant="primary"
          onClick={() => setShowOffcanvas(true)}
          className="hidden-menu"
        >
          Menu
        </Button>
        <Offcanvas
          show={showOffcanvas}
          onHide={() => setShowOffcanvas(false)}
          className="calendar-offcanvas"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <img src={pawhub} alt="Logo" style={{ maxHeight: "60px" }} />
            </Offcanvas.Title>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="push-menu">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="push-menu">
                  Settings
                </a>
              </li>
              <li>
                <a href="#" className="logout-menu">
                  Logout
                </a>
              </li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
        <div className="add-event-form">
          <Form onSubmit={handleAddEvent}>
            <Form.Group className="mb-3" controlId="eventTitle">
              <Form.Label>Event Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Enter event title"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="eventDate">
              <Form.Label>Event Date</Form.Label>
              <Form.Control type="date" name="date" required />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="add-event-button"
            >
              Add Event
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
