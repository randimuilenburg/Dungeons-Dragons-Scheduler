import { render } from "@testing-library/react";
import useFetch from "./DataFetching";
import React, { useState, useEffect, useSyncExternalStore } from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";

const dayAvailability = {
  monday: false,
  tuesday: false,
  wednesday: false,
  thursday: false,
  friday: false,
  saturday: false,
  sunday: false,
};

const AvailabilityComponent = (props) => {
  const availabilityMapping = {
    morning: { ...dayAvailability },
    afternoon: { ...dayAvailability },
    evening: { ...dayAvailability },
  };

  // for (let [day, times] of Object.entries(props.availability)) {
  //   for (let timeslot of times) {
  //     availabilityMapping[timeslot][day] = true;
  //     console.log(availabilityMapping);
  //   }

  return (
    <div>
      {/* <h1>
          {Object.entries(availabilityMapping.morning).map(
            ([day, isAvailable]) => (
              <p key={day}>
                {day}: {isAvailable ? "True" : "False"}
              </p>
            )
          )}
        </h1> */}
    </div>
  );
};

const UserPage = () => {
  const currentUrl = window.location.href;
  const currentUrlUser = currentUrl.split("/");
  const lastPartCurrentUser = currentUrlUser[currentUrlUser.length - 1];

  return (
    <div>
      <FetchForProfile lastPartCurrentUser={lastPartCurrentUser} />
    </div>
  );
};

// Profile Pic, Friend and Message Buttons:
const ProfilePicComponent = () => {
  return (
    <Card className="mb-4">
      <Card.Body className="text-center">
        <Card.Img
          src={require("../Images/Randiplayerimg.jpg")}
          alt="avatar"
          className="rounded-circle"
          style={{ width: "150px" }}
          fluid
        />
        <div className="d-flex justify-content-center mb-2">
          <Button>Friend</Button>
          <Button variant="outline-primary" className="ms-1">
            Message
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

// Player Info Component:
const PlayerNameComponent = (props) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Row>
          <Col sm="3">
            <Card.Text>Player Name:</Card.Text>
          </Col>
          <Col sm="9">
            <Card.Text className="text-muted">{props.name}</Card.Text>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col sm="3">
            <Card.Text>Email:</Card.Text>
          </Col>
          <Col sm="9">
            <Card.Text className="text-muted">{props.email}</Card.Text>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col sm="3">
            <Card.Text>Phone:</Card.Text>
          </Col>
          <Col sm="9">
            <Card.Text className="text-muted">{props.phone}</Card.Text>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col sm="3">
            <Card.Text>Years of Experience:</Card.Text>
          </Col>
          <Col sm="9">
            <Card.Text className="text-muted">{props.yearsPlaying}</Card.Text>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col sm="3">
            <Card.Text>Campaigns Played:</Card.Text>
          </Col>
          <Col sm="9">
            <Card.Text className="text-muted">
              {props.campaignsPlayed}
            </Card.Text>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col sm="3">
            <Card.Text>Campaigns in Progress:</Card.Text>
          </Col>
          <Col sm="9">
            <Card.Text className="text-muted">
              {props.currentCampaigns}
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

// Availability Component:
const PlayerAvailabilityComponent = (props) => {
  return (
    <Card className="mb-4 mb-lg-0">
      <div style={{ textAlign: "center" }}>
        <h4>Availability:</h4>
      </div>
      <div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <h5>Morning</h5>
            <h5>Afternoon</h5>
            <h5>Evening</h5>
          </div>
          <AvailabilityComponent availability={props.availability} />
        </div>
      </div>
    </Card>
  );
};

// Character Names Component:
const CharacterNamesComponent = (props) => {
  return <Card.Text className="text-muted">{props.characterNames}</Card.Text>;
};

const FetchForProfile = ({ lastPartCurrentUser }) => {
  const url = "http://localhost:4000/api/users/";
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const fetchUrl = `${url}${lastPartCurrentUser}`;
        const response = await fetch(fetchUrl);
        if (!response.ok) {
          throw new Error("Network response worked!");
        }
        const data = await response.json();
        // {check for response code 404, display error msg accordingly}
        setUserData(data);
      } catch (error) {}
    };

    fetchUserData();
  }, [lastPartCurrentUser]);

  // Capitalizing the first letters of the days
  // function capitalizeFirstLetter(string) {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // }

  console.log(userData);
  return userData ? (
    <div>
      <section style={{ backgroundColor: "#eee" }}>
        <Container className="py-5">
          <Row>
            <Col lg="4">
              <ProfilePicComponent />
              <PlayerAvailabilityComponent
                availability={userData.playerAvailability}
              />
            </Col>
            <Col lg="8">
              <Card className="mb-4">
                <Card.Body>
                  <PlayerNameComponent
                    name={userData.personalInfo.name}
                    email={userData.personalInfo.contact.email}
                    phone={userData.personalInfo.contact.phone}
                    yearsPlaying={userData.playerExperience.yearsPlaying}
                    campaignsPlayed={
                      userData.playerExperience.numberOfCampaignsPlayed
                    }
                    currentCampaigns={
                      userData.playerExperience.numberOfCurrentCampaigns
                    }
                  />
                </Card.Body>
              </Card>
              <Card className="mb-4">
                <Card.Body>
                  <Row>
                    <Col sm="8">
                      <Row>
                        <Col>
                          <Card.Text>Characters:</Card.Text>
                        </Col>
                        <Col>
                          <Card.Text className="text-muted">
                            <CharacterNamesComponent
                              characterNames={userData.characters.map(
                                (character) => character.name
                              )}
                            />
                          </Card.Text>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  ) : (
    <p>Looking for user data...</p>
  );
};
export default UserPage;
