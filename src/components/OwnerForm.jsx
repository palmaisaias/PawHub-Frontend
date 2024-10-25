import React, { useState } from 'react';
import * as Form from '@radix-ui/react-form';
import './OwnerForm.css'; // Importing custom CSS for styling
import { FiPhone, FiMail, FiUser, FiLock } from 'react-icons/fi';

const OwnerForm = () => {
  const [formData, setFormData] = useState({
    password: '',
    owner_email: '',
    owner_name: '',
    owner_phone: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Sending data to backend:', formData);

    try {
      const response = await fetch('http://127.0.0.1:5000/owner/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
      } else {
        alert('Failed to submit the form.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred: ' + error.message);
    }
  };

  return (
    <div className='owner-body'>
    <div className="page-container">
      <Form.Root className="form-container" onSubmit={handleSubmit}>
        <div className="form-header">
          <img src="https://media1.thehungryjpeg.com/thumbs2/ori_3834771_1gk8okh4e691nnkdnjoracsrjk6vvibgouabxn8c_happy-people-walking-with-dogs-in-the-city-park-cartoon-character-adu.jpg" alt="Dog park" className="form-header-image" />
          <h2 className="form-heading">Owner Registration Form</h2>
          <p className="form-subheading">Join us to keep track of all your dog's appointments and needs!</p>
        </div>
        <Form.Field className="form-field" name="owner_name">
          <Form.Label className="form-label">Owner Name</Form.Label>
          <div className="input-icon-wrapper">
            <FiUser className="input-icon" />
            <Form.Control asChild>
              <input
                type="text"
                name="owner_name"
                placeholder="Enter your name"
                value={formData.owner_name}
                onChange={handleChange}
                required
              />
            </Form.Control>
          </div>
        </Form.Field>

        <Form.Field className="form-field" name="owner_email">
          <Form.Label className="form-label">Owner Email</Form.Label>
          <div className="input-icon-wrapper">
            <FiMail className="input-icon" />
            <Form.Control asChild>
              <input
                type="email"
                name="owner_email"
                placeholder="Enter your email"
                value={formData.owner_email}
                onChange={handleChange}
                required
              />
            </Form.Control>
          </div>
        </Form.Field>

        <Form.Field className="form-field" name="password">
          <Form.Label className="form-label">Password</Form.Label>
          <div className="input-icon-wrapper">
            <FiLock className="input-icon" />
            <Form.Control asChild>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Control>
          </div>
        </Form.Field>

        <Form.Field className="form-field" name="owner_phone">
          <Form.Label className="form-label">Owner Phone</Form.Label>
          <div className="input-icon-wrapper">
            <FiPhone className="input-icon" />
            <Form.Control asChild>
              <input
                type="tel"
                name="owner_phone"
                placeholder="Enter your phone number"
                value={formData.owner_phone}
                onChange={handleChange}
                required
              />
            </Form.Control>
          </div>
        </Form.Field>

        <Form.Submit asChild>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </Form.Submit>
      </Form.Root>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 DogApp. All Rights Reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Help</a>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
};

export default OwnerForm;