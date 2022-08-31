import React, { useRef, useEffect, useContext } from "react";
import { SlideContext } from "../../../store/SlideContext";
import gsap from "gsap";
import { Container } from "react-bootstrap";

function Projects() {
  const slideIndex = useContext(SlideContext);

  const projectsTl = useRef(
    gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 1 },
    })
  );

  const backgroundControl = useRef(
    gsap.timeline({
      defaults: {
        ease: "power4.inOut",
        duration: 1,
      },
    })
  );

  const setBackground = () => {
    backgroundControl.current.revert();
    backgroundControl.current.progress(0).play();
    backgroundControl.current
      .to(".background-cont", { yPercent: 100, duration: 0.5 }, 1)
      .to(".logo-vertical", { opacity: 0, duration: 1.5 }, 1.25);
  };

  const play = () => {
    projectsTl.current.progress(0).play();
    projectsTl.current.set(".projects-cont", { opacity: 100 });
  };

  const revert = () => {
    projectsTl.current.revert();
  };

  useEffect(() => {
    if (slideIndex === 8) {
      console.log("slide 8 (projects): animating");
      setBackground();
      play();
    } else {
      revert();
    }
  }, [slideIndex]);

  return (
    <Container fluid className="carousel-slide-cont projects-cont">
      <h1 className="slide-header ambitious" id="be-ambitious-title">
        Be Ambitious.
      </h1>
      <h2 className="slide-subheader my-2 ambitious" id="ambitious-subtitle">
        You have what it takes to achieve your bold technology goals.
      </h2>
    </Container>
  );
}

export default Projects;
