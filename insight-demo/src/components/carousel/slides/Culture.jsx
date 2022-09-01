import React, { useRef, useEffect, useContext } from "react";
import ValueCard from "../../common/ValueCard";
import { SlideContext } from "../../../store/SlideContext";
import gsap from "gsap";

const Culture = () => {
  const slideIndex = useContext(SlideContext);

  const cultureTl = useRef(
    gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 1 },
    })
  );

  const play = () => {
    cultureTl.current.revert();
    cultureTl.current.progress(0).play();
    cultureTl.current
      .set(".culture-cont", { opacity: 100 })
      .from("#culture-title", { opacity: 0 })
      .from(
        "#culture-subtitle",
        {
          opacity: 0,
        },
        0.25
      )
      .from(".culture-grid", { opacity: 0, duration: 1 }, 2)
      .from(".culture-card", { y: 50, stagger: 0.1, duration: 0.5 }, 1.85)
      .to(
        ".culture",
        { opacity: 0, yPercent: 100, stagger: { each: 0.05, from: "end" } },
        9
      );
  };

  useEffect(() => {
    if (slideIndex === 2) {
      console.log("animating culture...");
      play();
    } else {
      cultureTl.current.pause();
    }
  }, [slideIndex]);

  return (
    <div className="container mx-auto carousel-slide-cont culture-cont">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="slide-header culture" id="culture-title">
          Core Values
        </h1>
        <h2 className="slide-subheader culture" id="culture-subtitle">
          Our success starts with our culture
        </h2>
      </div>
      <ul class="grid grid-cols-1 gap-6 sm:grid-cols-3 mt-10 sm:mx-auto culture-grid">
        <ValueCard
          title="Hunger"
          desc="We are change agents, united in our passion to improve every day
                and deliver outstanding results for our clients, partners and
                Insight."
        />
        <ValueCard
          title="Heart"
          desc="We are teammates. We take care of each other, our clients and
                our communities."
        />
        <ValueCard
          title="Harmony"
          desc="We are a team of diverse individuals who value inclusivity and
                create meaningful connections so we can win together."
        />
      </ul>
    </div>
  );
};

export default Culture;
