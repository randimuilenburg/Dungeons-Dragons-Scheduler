import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

function CarouselCharacterCards() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img
          alt="Character 1"
          width="500"
          height="500"
          src={require("../Images/Barb.jpeg")}
        />
        <Carousel.Caption>
          <h3>Character 1</h3>
          <p>Insert card here.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          alt="Character 1"
          width="500"
          height="500"
          src={require("../Images/Barb.jpeg")}
        />
        <Carousel.Caption>
          <h3>Character 2</h3>
          <p>Insert card here.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          alt="Character 1"
          width="500"
          height="500"
          src={require("../Images/Barb.jpeg")}
        />
        <Carousel.Caption>
          <h3>Character 3</h3>
          <p>Insert card here.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselCharacterCards;
