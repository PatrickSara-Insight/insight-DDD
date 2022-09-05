import React, { useRef, useEffect, useContext, useCallback } from "react";
import { SlideContext } from "../../../store/SlideContext";
import gsap from "gsap";
import ImpactCard from "../../common/ImpactCard";
import { Container } from "react-bootstrap";

const Impact = () => {
  // insert svg graphics to the left of each div.
  const { slideIndex, setSlideIndex } = useContext(SlideContext);
  const SLIDEDURATION = 15000;

  const impactTl = useRef(
    gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 1 },
    })
  );

  const play = () => {
    impactTl.current.revert();
    impactTl.current.progress(0).play();
    impactTl.current
      .set(".impact-cont", { opacity: 100 })
      .from("#impact-title", { opacity: 0, duration: 1.5 }, 0)
      .from(
        "#impact-subtitle",
        {
          opacity: 0,
        },
        0.5
      )
      .from(
        ".impact-card",
        { opacity: 0, stagger: { each: 0.2, from: "start" }, duration: 1.5 },
        1
      )
      .to(
        ".impact",
        { opacity: 0, y: 2000, stagger: { each: 0.05, from: "end" } },
        13.5
      );
  };

  const nextSlide = useCallback(() => {
    setSlideIndex((i) => i + 1);
  }, [setSlideIndex]);

  useEffect(() => {
    if (slideIndex === 3) {
      const timer = setTimeout(() => {
        nextSlide();
      }, SLIDEDURATION);
      play();
      return () => {
        clearTimeout(timer);
      };
    } else {
      impactTl.current.pause();
    }
  }, [slideIndex, nextSlide]);

  return (
    <Container fluid className="carousel-slide-cont impact-cont">
      <Container className="slide-title-cont text-center">
        <h1 className="title-secondary mx-0 mb-2 impact" id="impact-title">
          Local presence, global reach, since 1988
        </h1>
        <h2 className="title-tertiary mb-20 px-4 impact" id="impact-subtitle">
          See how we're making a positive impact
        </h2>
      </Container>
      <dl className="grid grid-cols-1 gap-5 xl:grid-cols-4 slide-content-cont impact-grid responsive-grid">
        <ImpactCard
          stat="#16"
          desc="Australia Best Places to Work"
          descInfo="Awarded in 2022"
        />
        <ImpactCard
          stat="#7"
          desc="Fortune World’s Most Admired Companies"
          descInfo="Awarded in 2021"
        />
        <ImpactCard
          stat="19"
          desc="Countries with Insight Operations"
          descInfo="As of 2022"
        />
        <ImpactCard
          stat="#95"
          desc="on Forbes World's Best Employers"
          descInfo="Awarded in 2021"
        />
        <ImpactCard
          stat="#373"
          desc="on the Fortune 500"
          descInfo="As of 2022"
        />
        <ImpactCard
          stat="3.7k"
          desc="Engineers, Architects and Consultants"
          descInfo="As of 2022"
        />
        <ImpactCard
          stat="11k+"
          desc="Insight Teammates Worldwide"
          descInfo="As of 2022"
        />
        <ImpactCard
          stat="#2"
          desc="Most Gender Diverse Executive Team in Technology"
          descInfo="Awarded in 2021"
        />
      </dl>
    </Container>
  );
};

export default Impact;
