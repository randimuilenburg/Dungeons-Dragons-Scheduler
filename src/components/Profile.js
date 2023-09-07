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
  // 1. construct day:bool object
  const availabilityMapping = {
    morning: { ...dayAvailability },
    afternoon: { ...dayAvailability },
    evening: { ...dayAvailability },
  };

  console.log(availabilityMapping);
  // {
  //   "monday": [],
  //   "tuesday": ["evening"],
  //   "wednesday": [],
  //   "thursday": ["evening"],
  //   "friday": ["evening"],
  //   "saturday": ["afternoon", "evening"],
  //   "sunday": ["afternoon", "evening"]
  // }
  // 2. For every entry in availavility, each value updates
  // tuesday: ["evening"]
  // use Object.entries => tuple key, value
  // key, value = Object.entries(availability)
  // let key = tuesday;
  // let value = ["evening"];

  // let a = Object.entries(props.availability);
  // console.log(a);

  for (let [day, times] of Object.entries(props.availability)) {
    console.log(times);
    for (let timeslot of times) {
      availabilityMapping[timeslot][day] = true;
      console.log(availabilityMapping);
    }
    // return availabilityMapping.morning;

    return (
      <div>
        <h1>
          {Object.entries(availabilityMapping.morning).map(
            ([day, isAvailable]) => (
              <p key={day}>
                {day}: {isAvailable ? "True" : "False"}
              </p>
            )
          )}
        </h1>
      </div>
    );
  }
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

  console.log(userData);
  return userData ? (
    <div>
      <section style={{ backgroundColor: "#eee" }}>
        <Container className="py-5">
          <Row>
            <Col lg="4">
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
              <Card className="mb-4 mb-lg-0">
                <div style={{ textAlign: "center" }}>
                  <h5>Availability:</h5>
                </div>
                <Card.Body className="p-0">
                  <div className="availability-card">
                    {Object.entries(userData.playerAvailability).map(
                      ([day, times]) => (
                        <div key={day} className="availability-day">
                          <div
                            className={`day-circle ${
                              times.length > 0
                                ? "bg-success text-black"
                                : "bg-white text-black"
                            }`}
                          >
                            {day.charAt(0).toUpperCase()}
                            {day.charAt(1).toLowerCase()}
                            {day.charAt(2).toLowerCase()}
                          </div>
                          <div className="availability-times">
                            <AvailabilityComponent
                              availability={userData.playerAvailability}
                            />
                            <div
                              className={`availability-time ${
                                times.includes("morning") ? "available" : ""
                              }`}
                            >
                              <span>Morning</span>
                            </div>
                            <div
                              className={`availability-time ${
                                times.includes("afternoon") ? "available" : ""
                              }`}
                            >
                              <span>Afternoon</span>
                            </div>
                            <div
                              className={`availability-time ${
                                times.includes("evening") ? "available" : ""
                              }`}
                            >
                              <span>Evening</span>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="8">
              <Card className="mb-4">
                <Card.Body>
                  <Row>
                    <Col sm="3">
                      <Card.Text>Player Name</Card.Text>
                    </Col>
                    <Col sm="9">
                      <Card.Text className="text-muted">
                        {userData.personalInfo.name}
                      </Card.Text>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col sm="3">
                      <Card.Text>Email</Card.Text>
                    </Col>
                    <Col sm="9">
                      <Card.Text className="text-muted">
                        {userData.personalInfo.contact.email}
                      </Card.Text>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col sm="3">
                      <Card.Text>Phone</Card.Text>
                    </Col>
                    <Col sm="9">
                      <Card.Text className="text-muted">
                        {userData.personalInfo.contact.phone}
                      </Card.Text>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col sm="3">
                      <Card.Text>Years of Experience:</Card.Text>
                    </Col>
                    <Col sm="9">
                      <Card.Text className="text-muted">
                        {userData.playerExperience.yearsPlaying}
                      </Card.Text>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col sm="3">
                      <Card.Text>Campaigns Completed:</Card.Text>
                    </Col>
                    <Col sm="9">
                      <Card.Text className="text-muted">
                        {userData.playerExperience.numberOfCampaignsPlayed}
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
                        {userData.playerExperience.numberOfCurrentCampaigns}
                      </Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Card className="mb-4">
                <Card.Body>
                  <Row>
                    <Col sm="8">
                      <Row>
                        <Col>
                          <Card.Text>Characters</Card.Text>
                        </Col>
                        <Col>
                          <Card.Text className="text-muted">
                            {userData.characters.map(
                              (character) => character.name
                            )}
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
