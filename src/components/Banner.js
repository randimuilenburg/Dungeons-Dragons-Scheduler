// import React from "react";
// import { Routes, BrowserRouter, Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";

// function BannerBar() {
//   return (
//     <Navbar bg="dark" data-bs-theme="dark">
//       <Container>
//         <Link to="/LandingPage" style={{ color: "white" }}>
//           <Navbar.Brand style={{ color: "white" }}>Main</Navbar.Brand>
//         </Link>
//         <Link to="/Profile" style={{ color: "white" }}>
//           Profile
//         </Link>
//         <Link to="/Friends" style={{ color: "white" }}>
//           Friends
//         </Link>
//         <Link to="/UpcomingSessions" style={{ color: "white" }}>
//           Upcoming Sessions
//         </Link>
//         <Link to="/LogOut" style={{ color: "white" }}>
//           Log Out
//         </Link>
//       </Container>
//     </Navbar>
//   );
// }

// export default BannerBar;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function BannerBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
        <Nav className="me-auto">
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/friends">Friends</Nav.Link>
          <Nav.Link href="/upcomingsessions">Upcoming Sessions</Nav.Link>
          <Nav.Link href="/logOut">Log Out</Nav.Link>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
        </Nav>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}

export default BannerBar;
