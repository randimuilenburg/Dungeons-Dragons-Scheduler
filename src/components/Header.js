import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs lg={4}>
            {
              <img
                className="dragonPic"
                src={require("../Images/Dragon.jpg")}
                alt="Blue Dragon"
              />
            }
          </Col>
          <Col xs lg={4}>
            {<h2 className="header">The Dungeon Scheduler</h2>}
          </Col>
          <Col xs lg={4}>
            {
              <img
                className="swordPic"
                src={require("../Images/Sword.jpg")}
                alt="Sword"
              />
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
