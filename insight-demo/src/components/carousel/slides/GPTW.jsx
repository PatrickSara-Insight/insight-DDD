import React, { useRef, useEffect, useContext } from "react";
import { SlideContext } from "../../../store/SlideContext";
import gsap from "gsap";
import { Image } from "react-bootstrap";
import gptw from "../../../gptw-no-bg.png";

const GPTW = () => {
  const slideIndex = useContext(SlideContext);

  const gptwTl = useRef(
    gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 1 },
    })
  );

  const play = () => {
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

  const revert = () => {
    gptwTl.current.revert();
  };

  useEffect(() => {
    if (slideIndex === 4) {
      console.log("running slide 4");
      play();
    } else {
      revert();
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
      <dl className="mt-10 text-center sm:mx-auto sm:grid sm:grid-cols-1 sm:gap-4 md:gap-8 md:grid-cols-4">
        <div className="flex flex-col gptw-col gptw">
          <dt className="order-2 mt-2 leading-6 slide-body">
            FORTUNE 500 Company
          </dt>
          <dd className="order-1 tracking-tight slide-stat-primary">No. 360</dd>
        </div>
        <div className="flex flex-col mt-10 sm:mt-0 gptw-col gptw">
          <dt className="order-2 mt-2 leading-6 slide-body">
            Fortune World's Most Admired Cmpanies
          </dt>
          <dd className="order-1 tracking-tight slide-stat-primary">2021</dd>
        </div>
        <div className="flex flex-col mt-10 sm:mt-0 gptw-col gptw">
          <dt className="order-2 mt-2 leading-6 slide-body">
            2nd Most Gender Diverse Executive Team in Technology
          </dt>
          <dd className="order-1 tracking-tight slide-stat-primary">The Org</dd>
        </div>
        <div className="flex flex-col mt-10 sm:mt-0 gptw-col gptw">
          <dt className="order-2 mt-2 leading-6 slide-body">
            Human Rights Campaign Foundation's 2021
          </dt>
          <dd className="order-1 tracking-tight slide-stat-primary">95/100</dd>
        </div>
        <div className="flex flex-col mt-10 sm:mt-0 gptw-col gptw">
          <dt className="order-2 mt-2 leading-6 slide-body">
            LGBTQ Workplace Equality
          </dt>
          <dd className="order-1 tracking-tight slide-stat-primary">100/100</dd>
        </div>
        <div className="flex flex-col mt-10 sm:mt-0 gptw-col gptw">
          <dt className="order-2 mt-2 leading-6 slide-body">
            Reconciliation Australia: Reflect Reconciliation Action Plan
          </dt>
          <dd className="order-1 tracking-tight slide-stat-primary">2022</dd>
        </div>
        <div className="flex flex-col mt-10 sm:mt-0 gptw-col gptw">
          <dt className="order-2 mt-2 leading-6 slide-body">
            Partnership with the Indigenous Literacy Foundation
          </dt>
          <dd className="order-1 tracking-tight slide-stat-primary">2022</dd>
        </div>
        <div className="flex flex-col mt-10 sm:mt-0 gptw-col gptw">
          <dt className="order-2 mt-2 leading-6 slide-body">
            Forbes World's Best Employers 2021
          </dt>
          <dd className="order-1 tracking-tight slide-stat-primary">No. 95</dd>
        </div>
      </dl>
    </div>
  );
};

export default GPTW;
