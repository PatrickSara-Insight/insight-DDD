import React, { useRef, useEffect, useContext } from "react";
import { SlideContext } from "../../../store/SlideContext";
import gsap from "gsap";
import ImpactCard from "../../common/ImpactCard";
import Earth from "../../../assets/world.svg";
import Teammates from "../../../assets/group.svg";
import Operator from "../../../assets/operator.svg";

const Impact = () => {
  // insert svg graphics to the left of each div.
  const slideIndex = useContext(SlideContext);

  const impactTl = useRef(
    gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 1 },
    })
  );

  const play = () => {
    impactTl.current.revert();
    impactTl.current.progress(0).play();
    impactTl.current
      .set(".impact-cont", { opacity: 100 })
      .from("#impact-title", { opacity: 0, duration: 1.5 }, 0)
      .from(
        "#impact-subtitle",
        {
          opacity: 0,
        },
        0.5
      )
      .from(
        ".impact-card",
        { opacity: 0, stagger: { each: 0.2, from: "start" }, duration: 1.5 },
        1
      )
      .to(
        ".impact",
        { opacity: 0, y: 1500, stagger: { each: 0.05, from: "end" } },
        9
      );
  };

  useEffect(() => {
    if (slideIndex === 3) {
      console.log("animating impact...");
      play();
    } else {
      impactTl.current.pause();
    }
  }, [slideIndex]);

  return (
    <div className="container mx-auto carousel-slide-cont impact-cont">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="slide-body my-2 impact" id="impact-subtitle">
          See how we're making a positive impact
        </h2>
        <h1 className="slide-header-alt mx-0 my-10 impact" id="impact-title">
          Local presence, global reach, since 1988
        </h1>
      </div>
      <ul className="mt-3 grid grid-cols-1 gap-10 sm:grid-cols-3">
        <ImpactCard
          stat="12,000 +"
          desc="teammates worldwide"
          bg="bg-red"
          svg={Teammates}
        />
        <ImpactCard
          stat="21"
          desc="countries with insight operations"
          bg="bg-fuchsia"
          svg={Earth}
        />
        <ImpactCard
          stat="5,000 +"
          desc="technical resources"
          bg="bg-purple"
          svg={Operator}
        />
      </ul>
    </div>
  );
};

export default Impact;
