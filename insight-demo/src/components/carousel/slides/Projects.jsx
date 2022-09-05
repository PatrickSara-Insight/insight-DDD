import React, { useRef, useEffect, useContext } from "react";
import { SlideContext } from "../../../store/SlideContext";
import gsap from "gsap";
import { Container, Image } from "react-bootstrap";
import image from "../../../logos.png";

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
      .to(".background-cont", { yPercent: 100, duration: 2 }, 1)
      .to(".logo-vertical", { opacity: 0, duration: 1.5 }, 0);
  };

  const play = () => {
    projectsTl.current.revert();
    projectsTl.current.progress(0).play();
    projectsTl.current
      .set(".projects-cont", { opacity: 100 }, 3)
      .to(".projects.cont", { opacity: 0 }, 9);
  };

  useEffect(() => {
    if (slideIndex === 11) {
      console.log("animating projects...");
      setBackground();
      play();
    } else {
      projectsTl.current.pause();
    }
  }, [slideIndex]);

  return (
    <Container fluid className="carousel-slide-cont projects-cont">
      <Image fluid alt="" src={image} className="project-logos" />
    </Container>
  );
}

export default Projects;
