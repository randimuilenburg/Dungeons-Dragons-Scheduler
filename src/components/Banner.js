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

function BannerBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* <Navbar.Brand href="/home">Home</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/myprofile">Account</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/friends">Friends</Nav.Link>
          <Nav.Link href="/upcomingsessions">Upcoming Sessions</Nav.Link>
          <Nav.Link href="/logOut">Log Out</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default BannerBar;
