import React, { useRef, useEffect, useContext, useCallback } from "react";
import { SlideContext } from "../../../store/SlideContext";
import gsap from "gsap";
import { Container } from "react-bootstrap";
import PublicSector from "../../../assets/public-sector.png";
import ProjectCont from "../../common/ProjectCont";
import Education from "../../../assets/education.png";
import Entertainment from "../../../assets/entertainment-financial.png";
import Manfacturing from "../../../assets/manufacturing_utilities.png";
import Mining from "../../../assets/mining.png";

function Projects() {
  const { slideIndex, setSlideIndex } = useContext(SlideContext);
  const SLIDEDURATION = 2000;

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
      .to(".logo-vertical", { opacity: 0, duration: 1.5 }, 0)
      .to(".qr-code", { opacity: 0, duration: 1.5 }, 0);
  };

  // const play = () => {
  //   projectsTl.current.revert();
  //   projectsTl.current.progress(0).play();
  //   projectsTl.current
  //     .set(".projects-cont", { opacity: 100 }, 3)
  //     .to(".projects-cont", { opacity: 0 }, 9);
  // };

  const nextSlide = useCallback(() => {
    setSlideIndex(0);
  }, [setSlideIndex]);

  useEffect(() => {
    if (slideIndex === 11) {
      const timer = setTimeout(() => {
        nextSlide();
      }, SLIDEDURATION);
      // play();
      setBackground();
      return () => {
        clearTimeout(timer);
      };
    } else {
      projectsTl.current.pause();
    }
  }, [slideIndex, nextSlide]);

  return (
    <Container fluid className="carousel-slide-cont projects-cont">
      {/* <Container
        fluid
        className="flex flex-col justify-evenly items-center projects-container"
      >
        <ProjectCont title="Public Sector" src={PublicSector} />
        <ProjectCont title="Education" src={Education} />
        <ProjectCont title="Entertainment  &#38; Finance" src={Entertainment} />
        <ProjectCont
          title="Manufacturing  &#38; Utilities"
          src={Manfacturing}
        />
        <ProjectCont title="Mining" src={Mining} />
      </Container> */}
    </Container>
  );
}

export default Projects;
