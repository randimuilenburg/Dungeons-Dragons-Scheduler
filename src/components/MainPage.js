import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { Form, Button, Label, Col, Row, Container } from "react-bootstrap";

const welcomeHeader = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col xs={12} lg={8} className="text-center"></Col>
          <h2>Welcome, Traveler.</h2>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col xs lg="2"></Col>
          <h1>Are you ready to begin?</h1>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col xs lg="2"></Col>
          <LogInButton />
        </Row>
      </Container>
    </div>
  );
};

const LogInButton = () => {
  return (
    <Link to="/Login">
      <Button variant="danger">Log in.</Button>
    </Link>
  );
};

export default welcomeHeader;
