import React, { useRef, useEffect, useContext } from "react";
import { SlideContext } from "../../../store/SlideContext";
import gsap from "gsap";
import { Container } from "react-bootstrap";
import EmployeeCard from "../../common/EmployeeCard";

const MoreEmployees = () => {
  const slideIndex = useContext(SlideContext);

  const moreEmployeeTl = useRef(
    gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 1 },
    })
  );

  const play = () => {
    moreEmployeeTl.current.revert();
    moreEmployeeTl.current.progress(0).play();
    moreEmployeeTl.current
      .set(".moreEmployee-cont", { opacity: 100 })
      .from("#moreEmployee-title", { opacity: 0 })
      .from(
        "#moreEmployee-subtitle",
        {
          opacity: 0,
        },
        0.25
      )
      .from(".moreEmployee-grid", { opacity: 0, duration: 1 }, 1.5)
      .from(".moreEmployee-card", { y: 100, stagger: 0.1, duration: 0.5 }, 1.45)
      .to(
        ".moreEmployee",
        { opacity: 0, y: 2000, stagger: { each: 0.1, from: "end" } },
        8.5
      );
  };

  useEffect(() => {
    if (slideIndex === 9) {
      console.log("animating moreEmployees...");
      play();
    } else {
      moreEmployeeTl.current.pause();
    }
  }, [slideIndex]);

  return (
    <Container fluid className="carousel-slide-cont moreEmployee-cont">
      <Container className="slide-content-cont moreEmployee-sub-cont text-center">
        <h1 className="title-primary moreEmployee" id="moreEmployee-title">
          What we're about
        </h1>
        <h2
          className="title-secondary text-center moreEmployee"
          id="moreEmployee-subtitle"
        >
          See what some of our moreEmployees have to say
        </h2>
      </Container>
      <ul className="grid grid-cols-1 gap-20 lg:grid-cols-3 slide-content-cont moreEmployee-grid">
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
      </ul>
    </Container>
  );
};

export default MoreEmployees;
