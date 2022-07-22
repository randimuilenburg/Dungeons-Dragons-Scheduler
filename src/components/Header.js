import React from "react";
import { Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col xs lg="8">
          {dragonHeader()}
        </Col>
      </Row>
    </div>
  );
};

// Helper Functions:

const dragonHeader = () => {
  return <h1 className="header">The Dungeon Scheduler</h1>;
};

export default Header;
