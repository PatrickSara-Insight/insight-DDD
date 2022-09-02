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
const Showcase = () => {
  return (
    <Container fluid className="showcase-cont">
      <div className="container md:mx-8 lg:mx-20 xl:mx-40">
        <h1 className="slide-header text-center gray">Title</h1>
        <h2 className="slide-subheader text-center gray">Some subtitle text</h2>
      </div>

      <div className="lg:min-w-7xl">
        <dl className="rounded-lg shadow-lg mt-5 lg:mx-10 grid grid-cols-4 gap-3 gptw-grid bg-slate-100 pb-10">
          <GptwCard title="Additional annual leave" svg={AnnualLeave} />
          <GptwCard title="Social events" svg={SocialEvents} />
          <GptwCard title="Work life balance days" svg={Balance} />
          <GptwCard title="Technology benefit" svg={Technology} />
          <GptwCard title="Paid parental leave" svg={Parents} />
          <GptwCard title="Rewards and Recognition program" svg={Hands} />
          <GptwCard title="Study assistance allowance" svg={Study} />
          <GptwCard title="Health and wellness benefit" svg={Health} />
        </dl>
      </div>
    </Container>
  );
};

export default Showcase;
