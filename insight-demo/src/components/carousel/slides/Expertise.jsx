import React, { useRef, useEffect, useContext, useCallback } from "react";
import { SlideContext } from "../../../store/SlideContext";
import gsap from "gsap";
import { Container } from "react-bootstrap";
import ExpertiseCard from "../../common/ExpertiseCard";
import ModernWorkplace from "../../../assets/expertise-modern-workplace-icon.png";
import ModernApps from "../../../assets/modern-apps-icon.png";
import ModernInfra from "../../../assets/expertise-modern-infrastructure-icon.png";
import IntelligentEdge from "../../../assets/expertise-intelligent-edge-icon.png";
import DataAI from "../../../assets/expertise-data-and-ai-icon.png";
import Cybersecurity from "../../../assets/expertise-cybersecurity-icon.png";

function Expertise() {
  const { slideIndex, setSlideIndex } = useContext(SlideContext);
  const SLIDEDURATION = 15000;

  const expertiseTl = useRef(
    gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 1 },
    })
  );

  const play = () => {
    expertiseTl.current.revert();
    expertiseTl.current.progress(0).play();
    expertiseTl.current
      .set(".expertise-cont", { opacity: 100 })
      .from("#expertise-title", { opacity: 0 })
      .from("#expertise-subtitle", { opacity: 0 }, 0.5)
      .from(
        ".expertise-card",
        { opacity: 0, stagger: { each: 0.2, from: "start" }, duration: 1.5 },
        1
      )
      .to(
        ".expertise",
        { opacity: 0, y: 2000, stagger: { each: 0.05, from: "end" } },
        13.5
      );
  };

  const nextSlide = useCallback(() => {
    setSlideIndex((i) => i + 1);
  }, [setSlideIndex]);

  useEffect(() => {
    if (slideIndex === 5) {
      const timer = setTimeout(() => {
        nextSlide();
      }, SLIDEDURATION);
      play();
      return () => {
        clearTimeout(timer);
      };
    } else {
      expertiseTl.current.pause();
    }
  }, [slideIndex, nextSlide]);

  return (
    <Container fluid className="carousel-slide-cont expertise-cont">
      <Container className="slide-title-cont text-center mb-20">
        <h1
          className="title-primary expertise-slide-header expertise mx-0"
          id="expertise-title"
        >
          Our areas of expertise
        </h1>
        <h2
          className="title-tertiary mx-0 mt-2 expertise"
          id="expertise-subtitle"
        >
          Tackle today’s ever-changing business environment alongside teams of
          technical experts with decades of industry experience.
        </h2>
      </Container>
      <dl className="slide-content-cont grid grid-cols-1 gap-5 xl:grid-cols-3 expertise-grid responsive-grid">
        <ExpertiseCard
          title="Modern workplace"
          descInfo="Top-tier support, productivity tools, and end-to-end IT asset maagement."
          svg={ModernWorkplace}
        />
        <ExpertiseCard
          title="Modern apps"
          descInfo="Transform legacy applications and create a culture that embraces agile approaches."
          svg={ModernApps}
        />
        <ExpertiseCard
          title="Modern infrastructure"
          descInfo="Architect, modernise and manage cloud app, data centers and networking solutions."
          svg={ModernInfra}
        />
        <ExpertiseCard
          title="Intelligent edge"
          descInfo="Collect, analyse and act on data across entire organisations to support real-time decision-making."
          svg={IntelligentEdge}
        />
        <ExpertiseCard
          title="Data and AI"
          descInfo="Leverage data modeling, artificial intelligence and business analysis to navigate hurdles"
          svg={DataAI}
        />
        <ExpertiseCard
          title="Cybersecurity"
          descInfo="Develop comprehensive securiyy strategies that protect networks, end users, and data. "
          svg={Cybersecurity}
        />
      </dl>
    </Container>
  );
}

export default Expertise;
