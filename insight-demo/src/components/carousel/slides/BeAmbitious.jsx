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
      .fromTo("#be-ambitious-title", { opacity: 0 }, { opacity: 100 })
      .to("#be-ambitious-title", { opacity: 0 }, 9);
  };

  useEffect(() => {
    if (slideIndex === 4) {
      console.log("running slide 1");
      slideAnimation();
    }
  }, [slideIndex]);

  return (
    <Container fluid className="carousel-slide-cont">
      <h1 className="slide-header" id="be-ambitious-title">
        Be Amb<span id="ambitious-it-span">it</span>ious.
      </h1>
      <h2 className="slide-subheader my-2 ">
        You have what it takes to achieve your bold technology goals.
      </h2>
    </Container>
  );
}

export default BeAmbitious;
