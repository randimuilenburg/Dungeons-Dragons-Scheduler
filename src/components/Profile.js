import React, { useState } from "react";
import useFetch from "./DataFetching";
import { Row, Col, Container } from "react-bootstrap";

const MyProfile = () => {
  const { data, loading, error } = useFetch("/api/profiles");

  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} lg={8}>
            <h3>My info:</h3>
            {/* <p>Player name: {player.name}</p> */}
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : (
              <ProfileList profiles={[data.players[0]]} />
              // <ProfileList profiles={playerInfo} />
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
      {/* <h2>Profile:</h2> */}
      <ul>
        {profiles.map((profile) => (
          <ul key={profile.id}>
            <li>
              <p>{profile.name}</p>
            </li>
            <li>
              <p>{profile.character}</p>
            </li>
            <li>
              <p>{profile["character race"]}</p>
            </li>
            <li>
              <p>{profile["character class"]}</p>
            </li>
          </ul>

          // <li key={profile.id}>{profile.character}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyProfile;
