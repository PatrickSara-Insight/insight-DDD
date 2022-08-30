import React, { useRef, useEffect, useContext } from "react";
import { SlideContext } from "../../../store/SlideContext";
import gsap from "gsap";
import { Container } from "react-bootstrap";

const AboutUs = () => {
  const slideIndex = useContext(SlideContext);

  const tl = useRef(
    gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 1 },
    })
  );

  const slideAnimation = () => {
    tl.current
      .from("#about-title", { opacity: 0 })
      .from(".about-sub-info", {
        opacity: 0,
        duration: 2,
        stagger: 0.2,
      })
      .to(".about-sub-info", { opacity: 0 }, 5);
  };

  useEffect(() => {
    if (slideIndex === 2) {
      console.log("running slide 2");
      slideAnimation();
    }
  }, [slideIndex]);

  return (
    <Container fluid className="carousel-slide-cont about-container">
      <h1 className="slide-header" id="about-title">
        Insight
      </h1>
      <div className="container md:mx-8 lg:mx-20 xl:mx-40 about-definition">
        <h2 className="slide-subheader italic about-sub-info">
          noun [mass noun]
        </h2>
        <h2 className="slide-subheader my-2 about-sub-info">
          The capacity to gain an accurate and deep understanding of someone or
          something.
        </h2>
      </div>
      <dl className="mt-10 text-center sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8 ">
        <div className="flex flex-col">
          <dt className="order-2 mt-2 leading-6 slide-body">We deliver.</dt>
          <dd className="order-1 tracking-tight slide-stat-primary">
            *insert svg
          </dd>
        </div>
        <div className="flex flex-col mt-10 sm:mt-0">
          <dt className="order-2 mt-2 leading-6 slide-body">We intergrate.</dt>
          <dd className="order-1 tracking-tight slide-stat-primary">
            *insert svg
          </dd>
        </div>
        <div className="flex flex-col mt-10 sm:mt-0">
          <dt className="order-2 mt-2 leading-6 slide-body">We connect.</dt>
          <dd className="order-1 tracking-tight slide-stat-primary">
            *insert svg
          </dd>
        </div>
      </dl>
    </Container>
  );
};

export default AboutUs;
