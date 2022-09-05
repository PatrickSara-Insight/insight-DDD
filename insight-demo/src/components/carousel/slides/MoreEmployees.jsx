import React, { useRef, useEffect, useContext } from "react";
import { SlideContext } from "../../../store/SlideContext";
import gsap from "gsap";
import { Container } from "react-bootstrap";
import EmployeeCard from "../../common/EmployeeCard";
import PatrickSara from "../../../assets/Patrick_SARA.png";
import Claire from "../../../assets/Claire_DOMASZ.png";

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
      .set("#moreEmployee-title", { opacity: 100 })
      .from(".moreEmployee-grid", { opacity: 0, duration: 1 }, 0)
      .to(".moreEmployee-grid", { opacity: 0 }, 8.5)
      .to(".moreEmployee-cont", { opacity: 0 }, 8.75);
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
        <h1 className="title-primary employee" id="moreEmployee-title">
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
          name="Claire"
          position="UX Consultant"
          quote={`"I began my career at Insight as a graduate consultant, fresh from getting my degree. I have had the opportunity to work on a variety of different projects in different ways, making each one interesting and unique. The amazing Strategy & Design team has welcomed me in and taught me so much on each project, helping me to continue to grow as a designer and as a person."`}
          src={Claire}
        />
        <EmployeeCard
          name="Thomas"
          position="Power Platform Team Lead"
          quote={`"At Insight, I have been very fortunate to have the opportunity to work on many exciting projects while growing my career alongside a diverse group of transparent, like-minded, inspirational and supportive teammates. I am trusted by my teammates with responsibility and freedom to do the work I enjoy. This year, I look forward to smashing more goals with my teammates #beAmbitious"`}
          src={PatrickSara}
        />
      </ul>
    </Container>
  );
};

export default MoreEmployees;
