import React, { useState } from "react";
import useFetch from "./DataFetching";
import { Row, Col, Container } from "react-bootstrap";

const FriendsList = () => {
  const { data, loading, error } = useFetch("/api/users");
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
              <UsersList users={data} />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const UsersList = ({ users }) => {
  return (
    <div>
      <h2>Profiles:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.personalInfo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FriendsList;
