import React, { useRef, useEffect, useContext } from "react";
import gsap from "gsap";
import Logo from "../../LogoTrimmed.png";
import { Container, Image } from "react-bootstrap";
import GptwCard from "../common/GptwCard";
import ImpactCard from "../common/ImpactCard";
import AnnualLeave from "../../assets/holiday.svg";
import SocialEvents from "../../assets/party.svg";
import Balance from "../../assets/balance.svg";
import Technology from "../../assets/technology.svg";
import Parents from "../../assets/parents.svg";
import Hands from "../../assets/hands.svg";
import Study from "../../assets/study.svg";
import Health from "../../assets/health.svg";
import ExpertiseCard from "../common/ExpertiseCard";
import ModernWorkplace from "../../assets/expertise-modern-workplace-icon.png";

const Showcase = () => {
  return (
    <Container fluid className="showcase-cont">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="slide-header expertise-slide-header gray mx-0 ">
          Our areas of expertise
        </h1>
        <h2 className="slide-subheader gray mx-0 mt-2">
          Tackle today’s ever-changing business environment alongside teams of
          technical experts with decades of industry experience.
        </h2>
      </div>
      <div>
        <dl className="mt-5 lg:mx-10 grid grid-cols-1 gap-5 lg:grid-cols-3 expertise-grid">
          <ExpertiseCard
            title="Modern Workplace"
            descInfo="Top-tier support, productivity tools, and end-to-end IT asset maagement."
            svg={ModernWorkplace}
          />
          <ExpertiseCard
            title="Modern Workplace"
            descInfo="Top-tier support, productivity tools, and end-to-end IT asset maagement."
            svg={ModernWorkplace}
          />
          <ExpertiseCard
            title="Modern Workplace"
            descInfo="Top-tier support, productivity tools, and end-to-end IT asset maagement."
            svg={ModernWorkplace}
          />
          <ExpertiseCard
            title="Modern Workplace"
            descInfo="Top-tier support, productivity tools, and end-to-end IT asset maagement."
            svg={ModernWorkplace}
          />
          <ExpertiseCard
            title="Modern Workplace"
            descInfo="Top-tier support, productivity tools, and end-to-end IT asset maagement."
            svg={ModernWorkplace}
          />
          <ExpertiseCard
            title="Modern Workplace"
            descInfo="Top-tier support, productivity tools, and end-to-end IT asset maagement."
            svg={ModernWorkplace}
          />
        </dl>
      </div>
    </Container>
  );
};

export default Showcase;
