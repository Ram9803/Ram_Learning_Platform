import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaPlusCircle, FaPeopleCarry, FaRegKeyboard, FaCreativeCommonsNc, FaGlobe } from "react-icons/fa";
import { MdOutlineScience } from "react-icons/md";
// import { DiJavascript1, DiAndroid } from "react-icons/di";
import "./Category.css";

export default function Category() {

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  return (
    <div style={{backgroundColor:"white"}}>
    <Container name="about" className="category" >
      <h5 className="category-heading">Different Tracks Available</h5>
      <Row>
        <Col>
          <Card className="category-card" style={{ width: "22rem" }}>
            <Card.Body>
              <MdOutlineScience className="category-card-icon" size={50} />
              <Card.Title>Science</Card.Title>
              <Card.Text>
              The systematic study of the structure and behavior of the physical and natural world 
              through observation, experimentation, and the testing of theories against the evidence 
              obtained.
              </Card.Text>
            </Card.Body>
            <Button className="category-card-button" onClick={handleClick}>Explore</Button>
          </Card>
        </Col>
        <Col>
          <Card className="category-card" style={{ width: "22rem" }}>
            <Card.Body>
              <FaPlusCircle className="category-card-icon" size={50} />
              <Card.Title>Mathematics</Card.Title>
              <Card.Text>
              Mathematics is an area of knowledge that includes the topics of numbers, formulas and related structures, 
              shapes and the spaces in which they are contained, and quantities and their changes.
              </Card.Text>
            </Card.Body>
            <Button className="category-card-button" onClick={handleClick}>Explore</Button>
          </Card>
        </Col>
        <Col>
          <Card className="category-card" style={{ width: "22rem" }}>
            <Card.Body>
              <FaPeopleCarry className="category-card-icon" size={50} />
              <Card.Title>Social Studies</Card.Title>
              <Card.Text>
              Social studies is the combined study of humanities, the arts, 
              and social sciences, mainly including history, economics, and civics and how people interact with one another. 
              </Card.Text>
            </Card.Body>
            <Button className="category-card-button" onClick={handleClick}>Explore</Button>
          </Card>
        </Col>
        <Col>
          <Card className="category-card" style={{ width: "22rem" }}>
            <Card.Body>
              <FaRegKeyboard className="category-card-icon" size={50} />
              <Card.Title>General Knowledge</Card.Title>
              <Card.Text>
              General knowledge refers to a broad range of information and facts about various subjects, including history, 
              geography, science, culture, and current events. It's knowledge that is not specialized and is considered to be
               common among educated individuals.
              </Card.Text>
            </Card.Body>
            <Button className="category-card-button" onClick={handleClick}>Explore</Button>
          </Card>
        </Col>
        <Col>
          <Card className="category-card" style={{ width: "22rem" }}>
            <Card.Body>
              <FaCreativeCommonsNc className="category-card-icon" size={50} />
              <Card.Title>Economics</Card.Title>
              <Card.Text>
              Economics focuses on the production, distribution, and consumption of goods and services. 
              The study of economics is primarily concerned with analyzing the choices that individuals, businesses, governments, 
              and nations make to allocate limited resources.
              </Card.Text>
            </Card.Body>
            <Button className="category-card-button" onClick={handleClick}>Explore</Button>
          </Card>
        </Col>
        <Col>
          <Card className="category-card" style={{ width: "22rem" }}>
            <Card.Body>
              <FaGlobe className="category-card-icon" size={50} />
              <Card.Title>Geography</Card.Title>
              <Card.Text>
              Geography is the study of places and the relationships between people and their environments. 
              Geographers explore both the physical properties of Earth's surface and the human societies spread across it.
              </Card.Text>
            </Card.Body>
            <Button className="category-card-button" onClick={handleClick}>Explore</Button>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
}
