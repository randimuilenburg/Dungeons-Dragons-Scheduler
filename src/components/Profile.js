// import React, { useState } from "react";
// import useFetch from "./DataFetching";
// import { Row, Col, Container } from "react-bootstrap";

// const MyProfile = () => {
//   const { data, loading, error } = useFetch("/api/profiles");

//   return (
//     <div>
//       <Container>
//         <Row>
//           <Col xs={12} lg={8}>
//             <h3>My info:</h3>
//             {loading ? (
//               <p>Loading...</p>
//             ) : error ? (
//               <p>Error: {error}</p>
//             ) : (
//               <ProfileList profiles={[data.players[0]]} />
//             )}
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// const ProfileList = ({ profiles }) => {
//   return (
//     <div>
//       <ul>
//         {profiles.map((profile) => (
//           <ul key={profile.id}>
//             <li>
//               <p>{profile.name}</p>
//             </li>
//             <li>
//               <p>{profile.character}</p>
//             </li>
//             <li>
//               <p>{profile["character race"]}</p>
//             </li>
//             <li>
//               <p>{profile["character class"]}</p>
//             </li>
//           </ul>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MyProfile;

// Step 1: h1 tag with url ex: <h1>localhost:3000/profiles/8</h1>
// Step 2: now just the number ex: <h1>8</h1>
// Step 3: Add useFetch hook to get data for that user, ex. localhost:4000/api/users/8
// Step 4: save that user data to state

import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function EditButton() {
  return (
    <div className="gradient-custom-2" style={{ backgroundColor: "#9de2ff" }}>
      <Container className="py-5 h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col lg="9" xl="7">
            <Card>
              <div
                className="rounded-top text-white d-flex flex-row"
                style={{ backgroundColor: "#000", height: "200px" }}
              >
                <div
                  className="ms-4 mt-5 d-flex flex-column"
                  style={{ width: "150px" }}
                >
                  <Card.Img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder image"
                    className="mt-4 mb-2 img-thumbnail"
                    fluid
                    style={{ width: "150px", zIndex: "1" }}
                  />
                  <Button
                    variant="outline-dark"
                    style={{ height: "36px", overflow: "visible" }}
                  >
                    Edit profile
                  </Button>
                </div>
                <div className="ms-3" style={{ marginTop: "130px" }}>
                  <h5>Andy Horwitz</h5>
                  <p>New York</p>
                </div>
              </div>
              <div
                className="p-4 text-black"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <p className="mb-1 h5">253</p>
                    <p className="small text-muted mb-0">Photos</p>
                  </div>
                  <div className="px-3">
                    <p className="mb-1 h5">1026</p>
                    <p className="small text-muted mb-0">Followers</p>
                  </div>
                  <div>
                    <p className="mb-1 h5">478</p>
                    <p className="small text-muted mb-0">Following</p>
                  </div>
                </div>
              </div>
              <Card.Body className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                    <p className="font-italic mb-1">Web Developer</p>
                    <p className="font-italic mb-1">Lives in New York</p>
                    <p className="font-italic mb-0">Photographer</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <p className="lead fw-normal mb-0">Recent photos</p>
                  <p className="mb-0">
                    <a href="#!" className="text-muted">
                      Show all
                    </a>
                  </p>
                </div>
                <Row>
                  <Col className="mb-2">
                    <Card.Img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                      alt="image 1"
                      className="w-100 rounded-3"
                    />
                  </Col>
                  <Col className="mb-2">
                    <Card.Img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                      alt="image 1"
                      className="w-100 rounded-3"
                    />
                  </Col>
                </Row>
                <Row className="g-2">
                  <Col className="mb-2">
                    <Card.Img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                      alt="image 1"
                      className="w-100 rounded-3"
                    />
                  </Col>
                  <Col className="mb-2">
                    <Card.Img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                      alt="image 1"
                      className="w-100 rounded-3"
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
