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
import gptw from "../../gptw-no-bg.png";

const Showcase = () => {
  return (
    <Container fluid className="showcase-cont">
      <Container className="slide-title-cont flex flex-row justify-center items-start mb-16">
        <Image
          className="gptw-logo gptw"
          alt="great place to work award"
          src={gptw}
        />
        <div className="flex flex-col justify-start items-center mx-auto text-left gptw">
          <h1 className="title-primary" id="gptw-title">
            Insight Benefits
          </h1>
          <h2 className="title-tertiary my-4" id="gptw-subtitle">
            No. 16 Australia Best Places To Work
          </h2>
        </div>
      </Container>
      <dl className="slide-content-cont rounded-lg shadow-lg grid grid-cols-4 gap-10 gptw-grid bg-white gptw-grid responsive-grid gptw">
        <GptwCard title="Additional annual leave" svg={AnnualLeave} />
        <GptwCard title="Social events" svg={SocialEvents} />
        <GptwCard title="Work life balance days" svg={Balance} />
        <GptwCard title="Technology benefit" svg={Technology} />
        <GptwCard title="Paid parental leave" svg={Parents} />
        <GptwCard title="Rewards and Recognition program" svg={Hands} />
        <GptwCard title="Study assistance allowance" svg={Study} />
        <GptwCard title="Health and wellness benefit" svg={Health} />
      </dl>
    </Container>
  );
};

export default Showcase;
