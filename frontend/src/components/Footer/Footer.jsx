import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "../../images/logo.png";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col xs={2}>
            <div className="footer-logo">
              {/* <img src={icon} alt="logo" /> */}
          <img className="nav-logo" src={logo} alt="logo" />
      
            </div>
          </Col>
          <Col xs={6}>
            <div className="footer-text">
              <h2>Contact US</h2>
              <p>
              We are a group of enthusiastic students dedicated to learning and exchanging knowledge. 
              Our doors are always open to fresh ideas and partnerships. For inquiries, feel free to reach out to us at {" "}
                <a href="mailto:u2097125@uel.ac.uk">Here</a><br/>
                Copyright © 2024, All rights reserved.
              </p>
            </div>
          </Col>
          <Col className="colum">
            <Row>
              <div className="footer-text">
                <h2>Follow Us</h2>
                <p>
                  <a
                    className="footer-icon"
                    href="https://www.facebook.com/"
                  >
                    <FaFacebookSquare className="footer-icon" size={40} />
                  </a>
                  <a
                    className="footer-icon"
                    href="https://www.instagram.com/"
                  >
                    <FaInstagram className="footer-icon" size={40} />
                  </a>
                  <a
                    className="footer-icon"
                    href="https://twitter.com/"
                  >
                    <FaTwitterSquare className="footer-icon" size={40} />
                  </a>
                  <a
                    className="footer-icon"
                    href="https://www.linkedin.com/"
                  >
                    <FaLinkedin className="footer-icon" size={40} />
                  </a>
                </p>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
