import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function bannerBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link to="/LandingPage">
            <Navbar.Brand style={{ color: "white" }}>Main</Navbar.Brand>
          </Link>{" "}
          <Link
            to="/Profile"
            style={{
              color: "white",
            }}
          >
            <Nav.Link>Profile</Nav.Link>
          </Link>
          <Link to="/Friends" style={{ color: "white" }}>
            <Nav.Link>Friends</Nav.Link>
          </Link>
          <Link to="/UpcomingSessions" style={{ color: "white" }}>
            <Nav.Link>Upcoming Sessions</Nav.Link>
          </Link>
          <Link to="/LogOut" style={{ color: "white" }}>
            <Nav.Link>Log Out</Nav.Link>
          </Link>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default bannerBar;
