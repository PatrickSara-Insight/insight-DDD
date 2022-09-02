import React, { useRef, useEffect, useContext } from "react";
import { SlideContext } from "../../../store/SlideContext";
import gsap from "gsap";
import { Image } from "react-bootstrap";
import gptw from "../../../gptw-no-bg.png";
import GptwCard from "../../common/GptwCard";

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
      .to(".gptw-cont", { opacity: 0 }, 9)
      .to(".gptw", { yPercent: 100, stagger: { each: 0.05, from: "end" } }, 9);
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
    <div className="container mx-auto carousel-slide-cont gptw-cont">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <Image
          className="gptw-logo gptw"
          alt="great place to work award"
          src={gptw}
        />
        <div className="max-w-4xl mx-auto text-center gptw">
          <h2 className="slide-subheader my-2" id="gptw-subtitle">
            Australia Best Places To Work 2022
          </h2>
          <h1 className="slide-header" id="gptw-title">
            No. 16
          </h1>
        </div>
      </div>
      {/* insert benefits here */}
    </div>
  );
};

export default GPTW;
