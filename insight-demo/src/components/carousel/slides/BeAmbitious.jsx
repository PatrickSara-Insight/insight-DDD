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
    bATl.current.progress(0).play();
    bATl.current
      .set(".ba-cont", { opacity: 100 })
      .from("#be-ambitious-title", { opacity: 0 })
      .from("#ambitious-subtitle", { opacity: 0 }, 0.5)
      .to(".ambitious", { opacity: 0, stagger: { each: 0.2, from: "end" } }, 9);
  };

  const revert = () => {
    bATl.current.revert();
  };

  useEffect(() => {
    if (slideIndex === 7) {
      console.log("running slide 7");
      play();
    } else {
      revert();
    }
  }, [slideIndex]);

  return (
    <Container fluid className="carousel-slide-cont ba-cont">
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
