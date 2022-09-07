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
      <Container className="slide-title-cont text-center ">
        <h1 className="gray title-secondary mx-0 mb-2 impact" id="impact-title">
          Local presence, global reach, since 1988
        </h1>
        <h2 className="gray title-tertiary px-4 impact" id="impact-subtitle">
          See how we're making a positive impact
        </h2>
      </Container>
      <dl className="grid grid-cols-2 lg:grid-cols-4 slide-content-cont impact-grid">
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

export default Showcase;
