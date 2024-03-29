import React, { useState } from "react";
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

// DONT USE THIS RIGHT NOW

// const FetchUsersForProfiles = () => {
//   const { data, loading, error } = useFetch("/api/users");
//   return (
//     <div>
//       <Container>
//         <Row>
//           <Col xs={12} lg={8}>
//             <h3>View current players:</h3>
//             {loading ? (
//               <p>Loading...</p>
//             ) : error ? (
//               <p>Error: {error}</p>
//             ) : (
//               <UsersList users={data} />
//             )}
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

const userProfile = () => {
  return (
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
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "150px" }}
                  fluid
                />
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
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
                  <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-globe fa-lg text-warning"></i>
                    <span>https://mdbootstrap.com</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
                    <i
                      className="fab fa-github fa-lg"
                      style={{ color: "#333333" }}
                    ></i>
                    <span>mdbootstrap</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
                    <i
                      className="fab fa-twitter fa-lg"
                      style={{ color: "#55acee" }}
                    ></i>
                    <span>@mdbootstrap</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
                    <i
                      className="fab fa-instagram fa-lg"
                      style={{ color: "#ac2bac" }}
                    ></i>
                    <span>mdbootstrap</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
                    <i
                      className="fab fa-facebook fa-lg"
                      style={{ color: "#3b5998" }}
                    ></i>
                    <span>mdbootstrap</span>
                  </ListGroup.Item>
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
                    <Card.Text className="text-muted">Johnatan Smith</Card.Text>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm="3">
                    <Card.Text>Email</Card.Text>
                  </Col>
                  <Col sm="9">
                    <Card.Text className="text-muted">
                      example@example.com
                    </Card.Text>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm="3">
                    <Card.Text>Phone</Card.Text>
                  </Col>
                  <Col sm="9">
                    <Card.Text className="text-muted">(097) 234-5678</Card.Text>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm="3">
                    <Card.Text>Mobile</Card.Text>
                  </Col>
                  <Col sm="9">
                    <Card.Text className="text-muted">(098) 765-4321</Card.Text>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm="3">
                    <Card.Text>Address</Card.Text>
                  </Col>
                  <Col sm="9">
                    <Card.Text className="text-muted">
                      Bay Area, San Francisco, CA
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
                    <Card.Text className="mb-1" style={{ fontSize: ".77rem" }}>
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
                    <Card.Text className="mb-1" style={{ fontSize: ".77rem" }}>
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
  );
};

export default userProfile;
