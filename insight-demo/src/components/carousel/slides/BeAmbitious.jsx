import React, { useRef, useEffect, useContext } from "react";
import { SlideContext } from "../../../store/SlideContext";
import gsap from "gsap";
import { Container } from "react-bootstrap";

function BeAmbitious() {
  const slideIndex = useContext(SlideContext);

  const tl = useRef(
    gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 1 },
    })
  );

  const slideAnimation = () => {
    tl.current
      .from("#be-ambitious-title", { opacity: 0 })
      .to("#be-ambitious-title", { opacity: 0 }, 9);
  };

  useEffect(() => {
    if (slideIndex === 1) {
      console.log("running slide 1");
      slideAnimation();
    }
  }, [slideIndex]);

  return (
    <Container fluid className="carousel-slide-cont">
      <h1 className="slide-header" id="be-ambitious-title">
        Be Ambitious.
      </h1>
    </Container>
  );
}

export default BeAmbitious;
