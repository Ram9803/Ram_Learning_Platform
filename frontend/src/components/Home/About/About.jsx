import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css"
import AboutImage from "../../../images/banner.png";


export default function About() {
    return (
        <div name="footer" className="about">
        <Container>
          <Row>
            <Col>
              <div className="about-text">
                <h1>About Us</h1>
                <p>
                Welcome to Learning Platform, where we merge the power of interactive coding compilers with the convenience of a web-based learning platform. Our mission is to revolutionize the way programming education is delivered, making it accessible, engaging, and effective for learners of all levels.

At Learning Platform, we understand the importance of hands-on experience in learning programming languages. That's why we've created an innovative platform that combines an interactive coding compiler with a user-friendly interface designed for optimal learning experiences.
                </p>
              </div>
            </Col>
            <Col>
              <img src={AboutImage} alt="about" className="about-image" />
            </Col>
          </Row>
        </Container>
      </div>
    );
}