import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CharacterCardForProfile = (props) => {
  const imagePath = props.imagePath || require("../Images/DefaultImage.jpeg");

  // if (props.characters && props.characters.length > 0) {
  //     const firstCharacter = props.characters[0]
  // }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imagePath} />
      <Card.Body>
        {/* <Card.Title>{props.characters[0]}</Card.Title> */}
        {/* <Card.Text>{props.characters.information.class}</Card.Text> */}
      </Card.Body>
    </Card>
  );
};

export default CharacterCardForProfile;
