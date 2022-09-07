import React, { useRef, useEffect, useContext, useCallback } from "react";
import { SlideContext } from "../../../store/SlideContext";
import gsap from "gsap";
import { Container } from "react-bootstrap";
import EmployeeCard from "../../common/EmployeeCard";
import Thomas from "../../../assets/Thomas.png";
import Claire from "../../../assets/Claire_DOMASZ.png";

const MoreEmployees = () => {
  const { slideIndex, setSlideIndex } = useContext(SlideContext);
  const SLIDEDURATION = 20000;

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
      .to(".employee", { opacity: 0 }, 18.5);
  };

  const nextSlide = useCallback(() => {
    setSlideIndex((i) => i + 1);
  }, [setSlideIndex]);

  useEffect(() => {
    if (slideIndex === 9) {
      const timer = setTimeout(() => {
        nextSlide();
      }, SLIDEDURATION);
      play();
      return () => {
        clearTimeout(timer);
      };
    } else {
      moreEmployeeTl.current.pause();
    }
  }, [slideIndex, nextSlide]);

  return (
    <Container fluid className="carousel-slide-cont moreEmployee-cont">
      <Container className="slide-content-cont employee-sub-cont text-center">
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
      <ul className="grid grid-cols-1 lg:grid-cols-2 slide-content-cont moreEmployee-grid employee-grid-2">
        <EmployeeCard
          name="Claire"
          position="UX Consultant"
          quote={`"I began my career at Insight as a graduate consultant, fresh from getting my degree. I have had the opportunity to work on a variety of different projects in different ways, making each one interesting and unique. The amazing Strategy & Design team has welcomed me in and taught me so much on each project, helping me to continue to grow as a designer and as a person."`}
          src={Claire}
        />
        <EmployeeCard
          name="Thomas"
          position="Power Platforms Team Lead"
          quote={`"At Insight, I have been very fortunate to have the opportunity to work on many exciting projects while growing my career alongside a diverse group of transparent, like-minded, inspirational and supportive teammates. I am trusted by my teammates with responsibility and freedom to do the work I enjoy. This year, I look forward to smashing more goals with my teammates #beAmbitious"`}
          src={Thomas}
        />
      </ul>
    </Container>
  );
};

export default MoreEmployees;
