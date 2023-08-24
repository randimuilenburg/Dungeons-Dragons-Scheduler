import React from "react";
import ReactDOM from "react-dom";
import useFetch from "./DataFetching";
import { Link } from "react-router-dom";
import { Button, Col, Row, Container } from "react-bootstrap";

const WelcomeHeader = () => {
  // const { data, loading, error } = useFetch("/api/profiles");
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
        {/* {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <ProfileList profiles={data.players} />
        )} */}
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

// const ProfileList = ({ profiles }) => {
//   return (
//     <div>
//       <h2>Profiles:</h2>
//       <ul>
//         {profiles.map((profile) => (
//           <li key={profile.id}>{profile.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// don't use map command on object

export default WelcomeHeader;
