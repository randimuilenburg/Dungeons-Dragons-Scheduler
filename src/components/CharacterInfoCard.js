import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
// import { capitialize } from "../utils/StringUtils";

const defaultImage = require("../Images/DefaultImage.jpeg");

const missingData = "N/A";

const CharacterCardAttribute = (props) => {
  return (
    <Col>
      <Card.Text>
        <strong>{props.title}:</strong> {props.value}
      </Card.Text>
    </Col>
  );
};

const CharacterCardForProfile = (props) => {
  const imagePath = props.imagePath || defaultImage;
  const characterName = props.characterName || missingData;
  const characterClass = props.characterClass || missingData;
  const characterAlignment = props.characterAlignment || missingData;
  const characterRace = props.characterRace || missingData;
  const characterLevel = props.characterLevel || missingData;

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imagePath} />
        <Card.Body>
          <Card.Title className="text-center">{characterName}</Card.Title>
          <Row>
            <CharacterCardAttribute title="Class" value={characterClass} />
            <CharacterCardAttribute
              title="Alignment"
              value={characterAlignment}
            />
          </Row>
          <Row>
            <CharacterCardAttribute title="Race" value={characterRace} />
            <CharacterCardAttribute title="Level" value={characterLevel} />
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CharacterCardForProfile;
