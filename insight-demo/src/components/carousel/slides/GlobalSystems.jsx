import React, { useRef, useEffect, useContext } from "react";
import { SlideContext } from "../../../store/SlideContext";
import gsap from "gsap";

const GlobalSystems = () => {
  const slideIndex = useContext(SlideContext);

  const globalSystemsTl = useRef(
    gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 1 },
    })
  );

  const play = () => {
    globalSystemsTl.current.revert();
    globalSystemsTl.current.progress(0).play();
    globalSystemsTl.current
      .set(".global-cont", { opacity: 100 })
      .from("#global-title", { opacity: 0 })
      .from("#global-subtitle", { opacity: 0 }, 0.25)
      .from(".global-flex-col", { opacity: 0, y: 20, stagger: 0.1 })
      .to(
        ".global",
        { opacity: 0, yPercent: 100, stagger: { each: 0.05, from: "end" } },
        9
      );
  };

  useEffect(() => {
    if (slideIndex === 5) {
      console.log("animating global systems...");
      play();
    } else {
      globalSystemsTl.current.pause();
    }
  }, [slideIndex]);

  return (
    <div className="container mx-auto carousel-slide-cont global-cont">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="slide-header-alt global" id="global-title">
          A Global Systems Integrator
        </h1>
        <h2 className="slide-body my-2 global" id="global-subtitle">
          A single team with expertise across all aspects of modern IT solutions
          to architect, manage and execute initiatives from end-to-end
        </h2>
      </div>
      <dl className="fluid flex flex-col md:flex-row mt-10 text-center justify-evenly items-center md:items-start">
        <div className="flex flex-col col-span-12 mx-4">
          {/* <div>insert svg</div> */}
          <dt className="my-2 slide-stat-title global global-flex-col">
            Digital Innovation
          </dt>
          <dd className="slide-body global global-flex-col">
            <ul>
              <li>Design Thinking</li>
              <li>UX Design</li>
              <li>Full Stack Development</li>
              <li>Data &#38; AI</li>
              <li>IoT Edge</li>
            </ul>
          </dd>
        </div>
        <div className="flex flex-col col-span-12 mx-4">
          {/* <div>insert svg</div> */}
          <dt className="my-2 slide-stat-title global global-flex-col">
            Connected Workforce
          </dt>
          <dd className="slide-body global global-flex-col">
            <ul>
              <li>Digital Workplace</li>
              <li>Content &#38; Collaboration</li>
              <li>Enterprise Mobility</li>
              <li>Lab Services</li>
            </ul>
          </dd>
        </div>
        <div className="flex flex-col col-span-12 mx-4">
          {/* <div>insert svg</div> */}
          <dt className="my-2 slide-stat-title global global-flex-col">
            Transformation
          </dt>
          <dd className="slide-body global global-flex-col">
            <ul>
              <li>Digital Transformation</li>
              <li>Agile Delivery</li>
              <li>Cyber Security</li>
              <li>Data Platforms</li>
            </ul>
          </dd>
        </div>
        <div className="flex flex-col col-span-12 mx-4">
          {/* <div>insert svg</div> */}
          <dt className="my-2 slide-stat-title global global-flex-col">
            Advisory
          </dt>
          <dd className="slide-body global global-flex-col">
            <ul>
              <li>Strategy</li>
              <li>Architecture</li>
              <li>Coaching</li>
              <li>Training</li>
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default GlobalSystems;
