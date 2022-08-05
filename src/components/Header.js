import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Container>
        <Row>
          {/* <Col></Col> */}
          <Col xs lg="6">
            {swordImage()}
          </Col>
          <Col xs lg="8">
            {schedulerHeader()}
          </Col>
          <Col xs lg="10">
            {dragonImage()}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

// Helper Functions:

const schedulerHeader = () => {
  return <h1 className="header">The Dungeon Scheduler</h1>;
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
