import React, { useRef, useEffect, useContext, useCallback } from "react";
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
  const { slideIndex, setSlideIndex } = useContext(SlideContext);
  const SLIDEDURATION = 10000;

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
      .from(".gptw-grid", { opacity: 0, duration: 1.5 }, 1)
      .to(
        ".gptw",
        { opacity: 0, y: 1500, stagger: { each: 0.05, from: "end" } },
        8.5
      );
  };

  const nextSlide = useCallback(() => {
    setSlideIndex((i) => i + 1);
  }, [setSlideIndex]);

  useEffect(() => {
    if (slideIndex === 4) {
      const timer = setTimeout(() => {
        nextSlide();
      }, SLIDEDURATION);
      play();
      return () => {
        clearTimeout(timer);
      };
    } else {
      gptwTl.current.pause();
    }
  }, [slideIndex, nextSlide]);

  return (
    <Container fluid className="carousel-slide-cont gptw-cont">
      <Container className="slide-title-cont flex flex-col lg:flex-row justify-center items-center lg:items-start mb-4 lg:mb-20">
        <Image
          className="gptw-logo gptw"
          alt="great place to work award"
          src={gptw}
        />
        <div className="flex flex-col justify-start items-center mx-auto text-left gptw">
          <h1 className="title-secondary my-2" id="gptw-title">
            Insight Benefits
          </h1>
          <h2 className="title-tertiary my-2" id="gptw-subtitle">
            No. 16 Australia Best Places To Work
          </h2>
        </div>
      </Container>
      <dl className="slide-content-cont rounded-lg shadow-lg grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10 gptw-grid bg-white p-2 lg:p-6 gptw-grid responsive-grid gptw">
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

export default GPTW;
