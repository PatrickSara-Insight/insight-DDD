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
import ModernApps from "../../assets/modern-apps-icon.png";
import ModernInfra from "../../assets/expertise-modern-infrastructure-icon.png";
import IntelligentEdge from "../../assets/expertise-intelligent-edge-icon.png";
import DataAI from "../../assets/expertise-data-and-ai-icon.png";
import Cybersecurity from "../../assets/expertise-cybersecurity-icon.png";
import ValueCard from "../common/ValueCard";
import IndustryCard from "../common/IndustryCard";
import Construction from "../../assets/construction-industry-icon.png";
import Financial from "../../assets/financial-industry-icon.png";
import Healthcare from "../../assets/healthcare-industry-icon.png";
import Manufacturing from "../../assets/manufacturing-industry-icon.png";
import Retail from "../../assets/retail-industry-icon.png";
import Service from "../../assets/service-provider-industry-icon.png";
import SmallBusiness from "../../assets/small-medium-industry-icon.png";
import Travel from "../../assets/travel-industry-icon.png";
import Employee from "../carousel/slides/Employees";
import EmployeeCard from "../common/EmployeeCard";
import MicrosoftLogo from "../../assets/microsoft-logo-white.png";
import MicrosoftCard from "../common/MicrosoftCard";
import gptw from "../../gptw-no-bg.png";
import PatrickSara from "../../assets/Patrick_SARA.png";
import PublicSector from "../../assets/public-sector.png";
import ProjectCont from "../common/ProjectCont";
import Education from "../../assets/education.png";
import Entertainment from "../../assets/entertainment-financial.png";
import Manfacturing from "../../assets/manufacturing_utilities.png";
import Mining from "../../assets/mining.png";
import QR from "../../assets/DDDQR.png";

const Showcase = () => {
  return (
    <Container fluid className="showcase-cont">
      <Container className="slide-content-cont culture-sub-cont text-center min-w-fit mx-0">
        <h1 className="title-primary culture" id="culture-title">
          Core Values
        </h1>
        <h2
          className="title-secondary text-center culture"
          id="culture-subtitle"
        >
          Our success starts with our culture
        </h2>
      </Container>
      <dl className="grid grid-cols-1 gap-4 lg:grid lg:gap-20 xl:grid-cols-3 slide-content-cont culture-grid responsive-grid">
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
    </Container>
  );
};

export default Showcase;
