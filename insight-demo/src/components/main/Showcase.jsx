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

const Showcase = () => {
  return (
    <Container fluid className="showcase-cont">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="slide-header expertise-slide-header gray mx-0 ">
          Industries we serve
        </h1>
        <h2 className="slide-subheader gray mx-0 mt-2">
          We offer breadth and depth — combining deep industry expertise and
          technical skills
        </h2>
      </div>
      <div className="max-w-5xl">
        <h1 className="slide-header ambitious" id="be-ambitious-title">
          Now is the time to be ambitious.
        </h1>
      </div>
    </Container>
  );
};

export default Showcase;
