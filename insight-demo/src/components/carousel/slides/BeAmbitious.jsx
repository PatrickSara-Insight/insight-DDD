import React, { useRef, useEffect, useContext } from "react";
import { SlideContext } from "../../../store/SlideContext";

import { Container } from "react-bootstrap";

function BeAmbitious() {
  const slideIndex = useContext(SlideContext);

  useEffect(() => {
    if (slideIndex === 1) {
      console.log("running slide 1 animation");
    }
  }, [slideIndex]);

  return (
    <Container fluid className="carousel-slide-cont">
      <h1 className="slide-header">Be Ambitious.</h1>
    </Container>
  );
}

export default BeAmbitious;
