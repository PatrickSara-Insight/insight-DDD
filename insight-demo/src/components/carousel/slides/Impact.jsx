import React, { useRef, useEffect, useContext } from "react";
import { SlideContext } from "../../../store/SlideContext";
import gsap from "gsap";

const Impact = () => {
  // insert svg graphics to the left of each div.
  const slideIndex = useContext(SlideContext);

  const tl = useRef(
    gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 1 },
    })
  );

  const slideAnimation = () => {
    tl.current
      .from("#impact-title", { opacity: 0, duration: 1.5 })
      .from(
        "#impact-subtitle",
        {
          opacity: 0,
        },
        0.5
      )
      .from(
        ".impact-col",
        { opacity: 0, stagger: { each: 0.2, from: "center" }, duration: 1.5 },
        1.5
      )
      .to(".impact-cont", { opacity: 0 }, 9);
  };

  useEffect(() => {
    if (slideIndex === 3) {
      console.log("running slide 3");
      slideAnimation();
    }
  }, [slideIndex]);

  return (
    <div className="container mx-auto carousel-slide-cont impact-cont">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="slide-body my-2" id="impact-subtitle">
          See how we're making a positive impact
        </h2>
        <h1 className="slide-header-alt mx-0 my-10" id="impact-title">
          Local presence, global reach, since 1988
        </h1>
      </div>
      <dl className="mt-10 text-center sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8 ">
        <div className="flex flex-col impact-col">
          <dt className="order-2 mt-2 leading-6 slide-body">
            teammates worldwide
          </dt>
          <dd className="order-1 tracking-tight slide-stat-primary">
            12,000 +
          </dd>
        </div>
        <div className="flex flex-col mt-10 sm:mt-0 impact-col">
          <dt className="order-2 mt-2 leading-6 slide-body">
            countries with insight operations
          </dt>
          <dd className="order-1 tracking-tight slide-stat-primary">21</dd>
        </div>
        <div className="flex flex-col mt-10 sm:mt-0 impact-col">
          <dt className="order-2 mt-2 leading-6 slide-body">
            technical resources
          </dt>
          <dd className="order-1 tracking-tight slide-stat-primary">5000 +</dd>
        </div>
      </dl>
    </div>
  );
};

export default Impact;
