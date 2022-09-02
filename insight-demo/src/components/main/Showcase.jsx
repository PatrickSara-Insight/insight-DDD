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
import ValueCard from "../common/ValueCard";

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
        <dl className="mt-5 lg:mx-20 grid grid-cols-1 gap-5 lg:grid-cols-3 culture-grid">
          <ValueCard
            title="Hunger"
            desc="We are change agents, united in our passion to improve every day
                and deliver outstanding results for our clients, partners and
                Insight."
            bg="bg-red"
          />
          <ValueCard
            title="Heart"
            desc="We are teammates. We take care of each other, our clients and
                our communities."
            bg="bg-fuchsia"
          />
          <ValueCard
            title="Harmony"
            desc="We are a team of diverse individuals who value inclusivity and
                create meaningful connections so we can win together."
            bg="bg-purple"
          />
        </dl>
      </div>
    </Container>
  );
};

export default Showcase;
