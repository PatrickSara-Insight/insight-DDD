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
      .from("#ambitious-subtitle", { opacity: 0 }, 0.5)
      .to(".ambitious", { opacity: 0, stagger: { each: 0.2, from: "end" } }, 9);
  };

  useEffect(() => {
    if (slideIndex === 7) {
      console.log("running slide 7");
      slideAnimation();
    }
  }, [slideIndex]);

  return (
    <Container fluid className="carousel-slide-cont">
      <h1 className="slide-header ambitious" id="be-ambitious-title">
        Be Ambitious.
      </h1>
      <h2 className="slide-subheader my-2 ambitious" id="ambitious-subtitle">
        You have what it takes to achieve your bold technology goals.
      </h2>
    </Container>
  );
}

export default BeAmbitious;
