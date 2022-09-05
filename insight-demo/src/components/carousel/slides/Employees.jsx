import React, { useRef, useEffect, useContext } from "react";
import ValueCard from "../../common/ValueCard";
import { SlideContext } from "../../../store/SlideContext";
import gsap from "gsap";
import { Container } from "react-bootstrap";
import EmployeeCard from "../../common/EmployeeCard";

const Employee = () => {
  const slideIndex = useContext(SlideContext);

  const employeeTl = useRef(
    gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 1 },
    })
  );

  const play = () => {
    employeeTl.current.revert();
    employeeTl.current.progress(0).play();
    employeeTl.current
      .set(".employee-cont", { opacity: 100 })
      .from("#employee-title", { opacity: 0 })
      .from(
        "#employee-subtitle",
        {
          opacity: 0,
        },
        0.25
      )
      .from(".employee-grid", { opacity: 0, duration: 1 }, 1.5)
      .from(".employee-card", { y: 100, stagger: 0.1, duration: 0.5 }, 1.45)
      .to(
        ".employee",
        { opacity: 0, y: 2000, stagger: { each: 0.1, from: "end" } },
        8.5
      );
  };

  useEffect(() => {
    if (slideIndex === 8) {
      console.log("animating employees...");
      play();
    } else {
      employeeTl.current.pause();
    }
  }, [slideIndex]);

  return (
    <Container fluid className="carousel-slide-cont employee-cont">
      <Container className="slide-content-cont employee-sub-cont text-center">
        <h1 className="title-primary employee" id="employee-title">
          What we're about
        </h1>
        <h2
          className="title-secondary text-center employee"
          id="employee-subtitle"
        >
          See what some of our employees have to say
        </h2>
      </Container>
      <ul className="grid grid-cols-1 gap-20 lg:grid-cols-3 slide-content-cont employee-grid">
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
      </ul>
    </Container>
  );
};

export default Employee;
