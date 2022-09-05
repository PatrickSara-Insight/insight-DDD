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

const Showcase = () => {
  return (
    <Container fluid className="showcase-cont">
      <Container className="slide-title-cont text-center">
        <Image alt="microsoft logo" src={MicrosoftLogo} />
        <h1
          className="slide-header-alt mx-0 my-10 microsoft"
          id="microsoft-title"
        >
          Our head is only in one cloud
        </h1>
      </Container>
      <dl className="grid grid-cols-1 gap-5 lg:grid-cols-5 slide-content-cont microsoft-grid">
        <MicrosoftCard desc="Solution Assessment (Aus) Partner of the Year" />
        <MicrosoftCard desc="12 Advanced Specialisations in Azure, Security &#38; Modern Work" />
        <MicrosoftCard desc="18 Microsoft Gold Competencies" />
        <MicrosoftCard desc="Migration to Azure Partner of the Year" />
        <MicrosoftCard desc="Azure Security Deployment Global Partner of the Year" />
        <MicrosoftCard desc="Microsoft Azure Expert MSP and pure-play cloud strategy" />
        <MicrosoftCard desc="Data &#38; AI Inner Circle Partner" />
        <MicrosoftCard desc="IoT G10 &#38; Microsoft Bonsai Partner" />
        <MicrosoftCard desc="Elite DevOps &#38; GitHub Verified Partner" />
        <MicrosoftCard desc="Global LSP, CSP, and Surface Partner" />
      </dl>
    </Container>
  );
};

export default Showcase;
