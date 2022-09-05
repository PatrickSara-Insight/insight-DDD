import React, { useRef, useEffect, useContext } from "react";
import { SlideContext } from "../../../store/SlideContext";
import gsap from "gsap";
import { Container } from "react-bootstrap";

function BeAmbitious() {
  const slideIndex = useContext(SlideContext);

  const bATl = useRef(
    gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 1 },
    })
  );

  const play = () => {
    bATl.current.revert();
    bATl.current.progress(0).play();
    bATl.current
      .set(".ba-cont", { opacity: 100 })
      .from("#be-ambitious-title", { opacity: 0 })
      .from("#ambitious-subtitle", { opacity: 0 }, 0.5)
      .to(".ambitious", { opacity: 0, stagger: { each: 0.2, from: "end" } }, 9);
  };

  useEffect(() => {
    if (slideIndex === 10) {
      console.log("animating be ambitious...");
      play();
    } else {
      bATl.current.pause();
    }
  }, [slideIndex]);

  return (
    <Container className="carousel-slide-cont">
      <h1 className="slide-header ambitious" id="be-ambitious-title">
        Now is the time to be ambitious.
      </h1>
    </Container>
  );
}

export default BeAmbitious;
