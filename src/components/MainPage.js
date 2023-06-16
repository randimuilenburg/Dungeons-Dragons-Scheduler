import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { Button, Col, Row, Container } from "react-bootstrap";

const welcomeHeader = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col xs={12} lg={8} className="text-center">
            <h2>Welcome, Traveler.</h2>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col xs={12} lg={8}>
            <h1>Are you ready to begin?</h1>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col xs={12} lg={6}>
            <LogInButton />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const LogInButton = () => {
  return (
    <Link to="/Login">
      <Button variant="danger" size="xl">
        Let's go.
      </Button>
    </Link>
  );
};

export default welcomeHeader;
