import React, { useRef, useEffect, useContext } from "react";
import ValueCard from "../../common/ValueCard";
import { SlideContext } from "../../../store/SlideContext";
import gsap from "gsap";
import { Container } from "react-bootstrap";

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
      .from(".culture-grid", { opacity: 0, duration: 1 }, 1.5)
      .from(".culture-card", { y: 100, stagger: 0.1, duration: 0.5 }, 1.45)
      .to(
        ".culture",
        { opacity: 0, y: 2000, stagger: { each: 0.1, from: "end" } },
        8.5
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
    <Container fluid className="container carousel-slide-cont culture-cont">
      <div className="culture-sub-cont mx-auto text-center mb-5">
        <h1 className="slide-header culture" id="culture-title">
          Core Values
        </h1>
        <h2
          className="slide-subheader text-center culture"
          id="culture-subtitle"
        >
          Our success starts with our culture
        </h2>
      </div>
      <dl className="mt-5 mx-20 grid grid-cols-1 gap-20 lg:grid-cols-3 culture-grid">
        <ValueCard
          title="Hunger"
          desc="We are change agents, united in our passion to improve every day
                and deliver outstanding results for our clients, partners and
                Insight."
          bg="bg-red"
        />
        <ValueCard
          title="Heart"
          desc="We are teammates. We take care of each other, our clients and
                our communities."
          bg="bg-fuchsia"
        />
        <ValueCard
          title="Harmony"
          desc="We are a team of diverse individuals who value inclusivity and
                create meaningful connections so we can win together."
          bg="bg-purple"
        />
      </dl>
    </Container>
  );
};

export default Culture;
