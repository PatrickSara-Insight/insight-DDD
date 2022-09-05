import React, { useRef, useEffect, useContext } from "react";
import { SlideContext } from "../../../store/SlideContext";
import gsap from "gsap";
import { Container } from "react-bootstrap";
import EmployeeCard from "../../common/EmployeeCard";
import PatrickSara from "../../../assets/Patrick_SARA.png";
import Ilson from "../../../assets/Ilson_BISCUOLA.png";

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
      .to(".employee-grid-1", { opacity: 0 }, 9);
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
      <Container className="slide-content-cont employee-sub-cont text-center mb-20">
        <h1 className="title-primary employee" id="employee-title">
          A day in the life
        </h1>
        <h2
          className="title-tertiary text-center employee"
          id="employee-subtitle"
        >
          See what some of our employees have to say
        </h2>
      </Container>
      <ul className="grid grid-cols-1 gap-20 xl:grid-cols-2 slide-content-cont employee-grid employee-grid-1 responsive-grid">
        <EmployeeCard
          name="Partick"
          position="Graduate Consultant"
          quote={`"At Insight, I have been very fortunate to have the opportunity to work on many exciting projects while growing my career alongside a diverse group of transparent, like-minded, inspirational and supportive teammates. I am trusted by my teammates with responsibility and freedom to do the work I enjoy. This year, I look forward to smashing more goals with my teammates #beAmbitious"`}
          src={PatrickSara}
        />
        <EmployeeCard
          name="Ilson"
          position="Technical Specialist"
          quote={`"I’ve had an incredible journey at Insight working on several private and public sector products. I’m constantly exposed to new technologies which has developed my career path into new and exciting areas. I’ve also had the opportunity to use these skills to give back to the community. The company culture and values empowers the individual to grow and be their best self"`}
          src={Ilson}
        />
      </ul>
    </Container>
  );
};

export default Employee;
