import React, { useRef, useEffect, useContext } from "react";
import { SlideContext } from "../../../store/SlideContext";
import gsap from "gsap";

const Industry = () => {
  const slideIndex = useContext(SlideContext);

  const industryTL = useRef(
    gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 1 },
    })
  );

  const play = () => {
    industryTL.current.progress(0).play();
    industryTL.current
      .set(".industry-cont", { opacity: 100 })
      .from("#industry-title", { opacity: 0 })
      .from("#industry-subtitle", { opacity: 0 }, 0.25)
      .from(".industry-flex-col", { opacity: 0, y: 20, stagger: 0.1 })
      .to(
        ".industry",
        { opacity: 0, y: 100, stagger: { each: 0.05, from: "end" } },
        9
      );
  };

  const revert = () => {
    industryTL.current.revert();
  };

  useEffect(() => {
    if (slideIndex === 6) {
      console.log("running slide 6");
      play();
    } else {
      revert();
    }
  }, [slideIndex]);

  return (
    <div className="container mx-auto carousel-slide-cont industry-cont">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="slide-header-alt industry" id="industry-title">
          Industries we serve
        </h1>
        <h2 className="slide-body my-2 industry" id="industry-subtitle">
          Skilled professionals in your industry
        </h2>
      </div>
      <dl className="fluid flex flex-col lg:flex-row mt-10 text-center justify-evenly items-center lg:items-start">
        <div className="flex flex-col col-span-12 mx-4">
          <dt className="my-2 slide-stat-title industry industry-flex-col">
            Financial Services
          </dt>
          <dd className="slide-body industry industry-flex-col">
            Enhance your customer experience through data modernisation and open
            banking whilst seamlessly reduce operational costs.
          </dd>
        </div>
        <div className="flex flex-col col-span-12 mx-4">
          <dt className="my-2 slide-stat-title industry industry-flex-col">
            Mining
          </dt>
          <dd className="slide-body industry industry-flex-col">
            Drive better mining production, maintenance & safety outcomes by
            leveraging your existing data assets & integrating with intelligent
            edge and AI.
          </dd>
        </div>
        <div className="flex flex-col col-span-12 mx-4">
          <dt className="my-2 slide-stat-title industry industry-flex-col">
            Manufacturing
          </dt>
          <dd className="slide-body industry industry-flex-col">
            Achieve full visibility of your Overall Equipment Effectiveness
            (OEE) and drive metric improvements across your operations with IoT
            technology.
          </dd>
        </div>
        <div className="flex flex-col col-span-12 mx-4">
          <dt className="my-2 slide-stat-title industry industry-flex-col">
            Higher Education
          </dt>
          <dd className="slide-body industry industry-flex-col">
            Engage your students and staff with a digitally enabled campus
            powered by intelligent apps, integrated platforms and business
            intelligence.
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default Industry;
