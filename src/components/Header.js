import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

// Adding text on image hover:
// const ImageWithHoverText = ({ imagePath, hoverText }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseOver = () => {
//     setIsHovered(true);
//   };

//   const handleMouseOut = () => {
//     setIsHovered(false);
//   };

//   return (
//     <div
//       onMouseOver={handleMouseOver}
//       onMouseOut={handleMouseOut}
//       style={{ display: 'inline-block' }}
//     >
//       <img src={imagePath} alt="Image" />
//       {isHovered && <div>{hoverText}</div>}
//     </div>
//   );
// };

// export default ImageWithHoverText;

// function App() {
//   const [isShown, setIsShown] = useState(false);
// }

// return (
//   <div className="App">
//     <button
//       onMouseEnter={() => setIsShown(true)}
//       onMouseLeave={() => setIsShown(false)}
//     >
//       Hover over me!
//     </button>
//     {isShown && <div>Hovering text!</div>}
//   </div>
// );

const Header = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs lg="4">
            {
              <img
                className="dragonPic"
                src={require("../Images/Dragon.jpg")}
                alt="Blue Dragon"
              />
            }
          </Col>
          <Col xs lg="4">
            {<h2 className="header">The Dungeon Scheduler</h2>}
          </Col>
          <Col xs lg="4">
            {
              <img
                className="swordPic"
                src={require("../Images/Sword.jpg")}
                alt="Sword"
              />
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
