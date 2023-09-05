import React, { useState, useEffect, useSyncExternalStore } from "react";
import useFetch from "./DataFetching";
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  Card,
  Button,
  ProgressBar,
  ListGroup,
} from "react-bootstrap";

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
        console.log(fetchUrl);
        if (!response.ok) {
          throw new Error("Network response worked!");
        }
        console.log(response);
        const data = await response.json();
        // {check for response code 404, display error msg accordingly}
        setUserData(data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
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
                    <Button>Follow</Button>
                    <Button variant="outline-primary" className="ms-1">
                      Message
                    </Button>
                  </div>
                </Card.Body>
              </Card>
              <Card className="mb-4 mb-lg-0">
                <Card.Body className="p-0">
                  <ListGroup flush className="rounded-3">
                    {Object.entries(userData.playerAvailability)
                      .filter(([day, times]) => times.length > 0)
                      .map(([day, times]) => (
                        <ListGroup.Item
                          key={day}
                          className="d-flex justify-content-between align-items-center p-3"
                        >
                          <i
                            className={`fab ${
                              userData.playerAvailability[day]
                                ? "fa-check text-primary"
                                : "fa-times text-danger"
                            } fa-lg`}
                          ></i>
                          <span>
                            {day.charAt(0).toUpperCase() +
                              day.slice(1).toLowerCase()}
                          </span>
                        </ListGroup.Item>
                      ))}
                  </ListGroup>
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
                  {/* <Row>
                    <Col sm="3">
                      <Card.Text>Characters</Card.Text>
                    </Col>
                    <Col sm="9">
                      <Card.Text className="text-muted">
                        {userData.characters.map((character) => character.name)}
                      </Card.Text>
                    </Col>
                  </Row>
                  <hr /> */}
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
