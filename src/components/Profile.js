// import { render } from "@testing-library/react";
// import useFetch from "./DataFetching";
import React, { useState, useEffect, useSyncExternalStore } from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import PlayerAvailability from "./PlayerAvailability";
import CharacterCardForProfile from "./CharacterInfoCard";
import CarouselCharacterCards from "./CarouselCharacterCards";

const dayAvailability = {
  monday: false,
  tuesday: false,
  wednesday: false,
  thursday: false,
  friday: false,
  saturday: false,
  sunday: false,
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
          // fluid
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

// Row Styling Component for Player Info Card:
const PlayerInfoRowComponent = (props) => {
  return (
    <Row>
      <Col sm="3">
        <Card.Text>{props.title}:</Card.Text>
      </Col>
      <Col sm="9">
        <Card.Text className="text-muted">{props.value}</Card.Text>
      </Col>
    </Row>
  );
};

// Player Info Component:
const PlayerInfoComponent = (props) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <PlayerInfoRowComponent title="Player Name" value={props.name} />
        <hr />
        <PlayerInfoRowComponent title="Email" value={props.email} />
        <hr />
        <PlayerInfoRowComponent title="Phone" value={props.phone} />
        <hr />
        <PlayerInfoRowComponent
          title="Years of Experience"
          value={props.yearsPlaying}
        />
        <hr />
        <PlayerInfoRowComponent
          title="Campaigns Played"
          value={props.campaignsPlayed}
        />
        <hr />
        <PlayerInfoRowComponent
          title="Current Campaigns"
          value={props.currentCampaigns}
        />
      </Card.Body>
    </Card>
  );
};

// Availability Component:
// See PlayerAvailability.js component

// Character Names Component:
const CharacterNamesComponent = (props) => {
  return (
    <div>
      {props.characterNames.map((characterName, index) => {
        const urlFriendlyCharacterName = characterName.replace(/ /g, "-");
        return (
          <Link
            key={index}
            to={`/CharacterInfo/${urlFriendlyCharacterName}`}
            className="text-muted"
          >
            {characterName}
          </Link>
        );
      })}
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
              <ProfilePicComponent />
              <PlayerAvailability availability={userData.playerAvailability} />
            </Col>
            <Col lg="8">
              <Card className="mb-4">
                <Card.Body>
                  <PlayerInfoComponent
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
                          {/* <Card.Text className="text-muted"> */}
                          <CharacterNamesComponent
                            characterNames={userData.characters.map(
                              (character) => character.name
                            )}
                          />
                          {/* </Card.Text> */}
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <CharacterCardForProfile
                characterName={userData.characters.name}
              />
              {/* (Carousel will take userData.characters and map through characters, creating
              card for each and displaying that.) */}
              <CarouselCharacterCards />
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
