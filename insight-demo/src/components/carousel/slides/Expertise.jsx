import React, { useRef, useEffect, useContext } from "react";
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
  const slideIndex = useContext(SlideContext);

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
      .to(".expertise", { opacity: 0, stagger: { each: 0.2, from: "end" } }, 9);
  };

  useEffect(() => {
    if (slideIndex === 5) {
      console.log("animating expertise...");
      play();
    } else {
      expertiseTl.current.pause();
    }
  }, [slideIndex]);

  return (
    <Container fluid className="carousel-slide-cont mx-auto expertise-cont">
      <div className="max-w-7xl mx-auto text-center">
        <h1
          className="slide-header expertise-slide-header mx-0"
          id="expertise-title"
        >
          Our areas of expertise
        </h1>
        <h2
          className="slide-subheader mx-0 mt-2 expertise"
          id="expertise-subtitle"
        >
          Tackle today’s ever-changing business environment alongside teams of
          technical experts with decades of industry experience.
        </h2>
      </div>
      <div>
        <dl className="mt-5 lg:mx-20 grid grid-cols-1 gap-5 lg:grid-cols-3 expertise-grid">
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
      </div>
    </Container>
  );
}

export default Expertise;
