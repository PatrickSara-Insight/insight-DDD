import React, { useRef, useEffect, useContext } from "react";
import { SlideContext } from "../../../store/SlideContext";
import gsap from "gsap";
import ImpactCard from "../../common/ImpactCard";

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
        <h2 className="slide-subheader my-2 px-4 impact" id="impact-subtitle">
          See how we're making a positive impact
        </h2>
        <h1 className="slide-header-alt mx-0 my-10 impact" id="impact-title">
          Local presence, global reach, since 1988
        </h1>
      </div>
      <div>
        <dl className="mt-5 lg:mx-10 grid grid-cols-1 gap-5 lg:grid-cols-4 impact-grid">
          <ImpactCard
            stat="#16"
            desc="Australia Best Places to Work"
            descInfo="Awarded in 2022"
          />
          <ImpactCard
            stat="#7"
            desc="Fortune World’s Most Admired Companies"
            descInfo="Awarded in 2021"
          />
          <ImpactCard
            stat="19"
            desc="countries with Insight operations"
            descInfo="As of 2022"
          />
          <ImpactCard
            stat="#95"
            desc="on Forbes World's Best Employers"
            descInfo="Awarded in 2021"
          />
          <ImpactCard
            stat="#373"
            desc="on the Fortune 500"
            descInfo="As of 2022"
          />
          <ImpactCard
            stat="3.7k"
            desc="engineers, architects and consultants
"
            descInfo="As of 2022"
          />
          <ImpactCard
            stat="11k+"
            desc="Insight teammates worldwide"
            descInfo="As of 2022"
          />
          <ImpactCard
            stat="#2"
            desc="Most Gender Diverse Executive Team in Technology"
            descInfo="Awarded in 2021"
          />
        </dl>
      </div>
    </div>
  );
};

export default Impact;
