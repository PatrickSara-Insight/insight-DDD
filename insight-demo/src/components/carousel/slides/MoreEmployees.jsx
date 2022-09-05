import React, { useRef, useEffect, useContext } from "react";
import { SlideContext } from "../../../store/SlideContext";
import gsap from "gsap";
import { Container } from "react-bootstrap";
import EmployeeCard from "../../common/EmployeeCard";
import PatrickSara from "../../../assets/Patrick_SARA.png";

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
      .from(".moreEmployee-grid", { opacity: 0, duration: 1 }, 0)
      .to(
        ".employee",
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
      <ul className="grid grid-cols-1 gap-20 xl:grid-cols-2 slide-content-cont moreEmployee-grid employee-grid-2 responsive-grid">
        <EmployeeCard
          name="Partick Sara"
          position="Graduate Consultant"
          quote={`"At Insight, I have been very fortunate to have the opportunity to work on many exciting projects while growing my career alongside a diverse group of transparent, like-minded, inspirational and supportive teammates. I am trusted by my teammates with responsibility and freedom to do the work I enjoy. This year, I look forward to smashing more goals with my teammates #beAmbitious"`}
          src={PatrickSara}
        />
        <EmployeeCard
          name="Partick Sara"
          position="Graduate Consultant"
          quote={`"At Insight, I have been very fortunate to have the opportunity to work on many exciting projects while growing my career alongside a diverse group of transparent, like-minded, inspirational and supportive teammates. I am trusted by my teammates with responsibility and freedom to do the work I enjoy. This year, I look forward to smashing more goals with my teammates #beAmbitious"`}
          src={PatrickSara}
        />
      </ul>
    </Container>
  );
};

export default MoreEmployees;
