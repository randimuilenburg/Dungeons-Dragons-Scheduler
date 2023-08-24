import React, { useState } from "react";
import useFetch from "./DataFetching";
import { Row, Col, Container } from "react-bootstrap";

const FriendsList = () => {
  const { data, loading, error } = useFetch("/api/profiles");
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} lg={8}>
            <h3>View current players:</h3>
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : (
              <ProfileList profiles={data.players} />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const ProfileList = ({ profiles }) => {
  return (
    <div>
      <h2>Profiles:</h2>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>{profile.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FriendsList;
