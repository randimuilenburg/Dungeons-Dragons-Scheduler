import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs lg="4">
            {dragonImage()}
          </Col>
          <Col xs lg="4">
            {schedulerHeader()}
          </Col>
          <Col xs lg="4">
            {swordImage()}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

// Helper Functions:

const schedulerHeader = () => {
  return <h2 className="header">The Dungeon Scheduler</h2>;
};

const dragonImage = () => {
  return (
    <img
      className="dragonPic"
      src={require("../Images/Dragon.jpg")}
      alt="Blue Dragon"
    />
  );
};

const swordImage = () => {
  return (
    <img
      className="swordPic"
      src={require("../Images/Sword.jpg")}
      alt="Sword"
    />
  );
};

export default Header;
