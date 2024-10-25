import React from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Tabs, Tab } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./ownerProfile.css";

const OwnerProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="profile-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="background-image" />
        <div className="profile-picture">
          <LazyLoadImage
            effect="blur"
            src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png"
            alt="Profile"
            className="profile-image" // Add a class for styling
          />
        </div>
      </div>

      {/* User Information Box */}
      <div className="user-info-box">
        <h2>John Doe</h2>
        <p>Software Engineer, Tech Enthusiast</p>
        <div className="social-icons">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
          <FontAwesomeIcon icon={faTwitter} size="2x" />
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </div>
      </div>

      {/* Navigation Bar */}
      <Tabs value={false} onChange={(e, value) => navigate(value)}>
        <Tab label="Overview" value="/overview" />
        <Tab label="Projects" value="/projects" />
        <Tab label="Contact" value="/contact" />
      </Tabs>

      {/* Additional User Information */}
      <div className="additional-info">
        <div className="info-row">
          <strong>Location:</strong> San Francisco, CA
        </div>
        <div className="info-row">
          <strong>Email:</strong> john.doe@example.com
        </div>
        <div className="info-row">
          <strong>Phone:</strong> (123) 456-7890
        </div>
      </div>
    </div>
  );
};

export default OwnerProfile;
