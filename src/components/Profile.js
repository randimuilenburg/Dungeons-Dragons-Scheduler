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
            <Col>
              <Breadcrumb className="bg-light rounded-3 p-3 mb-4">
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">User</Breadcrumb.Item>
                <Breadcrumb.Item active>User Profile</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>

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
                  <p className="text-muted mb-1">
                    Years of experience:{" "}
                    {userData.playerExperience.yearsPlaying}
                  </p>
                  <p className="text-muted mb-1">
                    Campaigns played:{" "}
                    {userData.playerExperience.numberOfCampaignsPlayed}{" "}
                  </p>
                  <p className="text-muted mb-1">
                    Campaigns completed:{" "}
                    {userData.playerExperience.numberOfCampaignsPlayed}{" "}
                  </p>
                  <p className="text-muted mb-1">
                    Campaigns in progress:
                    {userData.playerExperience.numberOfCurrentCampaigns}{" "}
                  </p>
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
                      <Card.Text>Full Name</Card.Text>
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
                      <Card.Text>Characters</Card.Text>
                    </Col>
                    <Col sm="9">
                      <Card.Text className="text-muted">
                        {userData.characters.map((character) => character.name)}
                      </Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              <Row>
                <Col md="6">
                  <Card className="mb-4 mb-md-0">
                    <Card.Body>
                      <Card.Text className="mb-4">
                        <span className="text-primary font-italic me-1">
                          assignment
                        </span>{" "}
                        Project Status
                      </Card.Text>
                      <Card.Text
                        className="mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Web Design
                      </Card.Text>
                      <ProgressBar now={80} />
                      <Card.Text
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Website Markup
                      </Card.Text>
                      <ProgressBar now={72} />
                      <Card.Text
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        One Page
                      </Card.Text>
                      <ProgressBar now={89} />
                      <Card.Text
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Mobile Template
                      </Card.Text>
                      <ProgressBar now={55} />
                      <Card.Text
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Backend API
                      </Card.Text>
                      <ProgressBar now={66} />
                    </Card.Body>
                  </Card>
                </Col>

                <Col md="6">
                  <Card className="mb-4 mb-md-0">
                    <Card.Body>
                      <Card.Text className="mb-4">
                        <span className="text-primary font-italic me-1">
                          assignment
                        </span>{" "}
                        Project Status
                      </Card.Text>
                      <Card.Text
                        className="mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Web Design
                      </Card.Text>
                      <ProgressBar now={80} />
                      <Card.Text
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Website Markup
                      </Card.Text>
                      <ProgressBar now={72} />
                      <Card.Text
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        One Page
                      </Card.Text>
                      <ProgressBar now={89} />
                      <Card.Text
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Mobile Template
                      </Card.Text>
                      <ProgressBar now={55} />
                      <Card.Text
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Backend API
                      </Card.Text>
                      <ProgressBar now={66} />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
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
