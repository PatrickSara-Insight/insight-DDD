import React, { useRef, useEffect, useContext } from "react";
import { SlideContext } from "../../../store/SlideContext";
import gsap from "gsap";
import { Image, Container } from "react-bootstrap";
import gptw from "../../../gptw-no-bg.png";
import GptwCard from "../../common/GptwCard";
import AnnualLeave from "../../../assets/holiday.svg";
import SocialEvents from "../../../assets/party.svg";
import Balance from "../../../assets/balance.svg";
import Technology from "../../../assets/technology.svg";
import Parents from "../../../assets/parents.svg";
import Hands from "../../../assets/hands.svg";
import Study from "../../../assets/study.svg";
import Health from "../../../assets/health.svg";

const GPTW = () => {
  const slideIndex = useContext(SlideContext);

  const gptwTl = useRef(
    gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 1 },
    })
  );

  const play = () => {
    gptwTl.current.revert();
    gptwTl.current.progress(0).play();
    gptwTl.current
      .set(".gptw-cont", { opacity: 100 })
      .from("#gptw-title", { opacity: 0, duration: 1.5 })
      .from(
        "#gptw-subtitle",
        {
          opacity: 0,
        },
        0.25
      )
      .from(
        ".gptw-logo",
        {
          opacity: 0,
        },
        0.25
      )
      .from(
        ".gptw-col",
        {
          opacity: 0,
          y: 10,
          stagger: { each: 0.1, from: "start" },
          duration: 1,
        },
        2
      )
      .to(
        ".gptw",
        { opacity: 0, y: 1500, stagger: { each: 0.05, from: "end" } },
        9
      );
  };

  useEffect(() => {
    if (slideIndex === 4) {
      console.log("animating great place to work...");
      play();
    } else {
      gptwTl.current.pause();
    }
  }, [slideIndex]);

  return (
    <Container
      fluid
      className="container mx-auto carousel-slide-cont gptw-cont"
    >
      <div className="flex flex-row justify-center items-start">
        <Image
          className="gptw-logo gptw"
          alt="great place to work award"
          src={gptw}
        />
        <div className="flex flex-col justify-start items-center mx-auto text-left gptw">
          <h1 className="slide-header" id="gptw-title">
            Insight Benefits
          </h1>
          <h2 className="slide-subheader my-2" id="gptw-subtitle">
            No. 16 Australia Best Places To Work
          </h2>
        </div>
      </div>
      <div className="lg:min-w-full">
        <dl className="rounded-lg shadow-lg mt-5 lg:mx-10 grid grid-cols-4 gap-3 gptw-grid bg-slate-100 pb-10 gptw">
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

export default GPTW;
