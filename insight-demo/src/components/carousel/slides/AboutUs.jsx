import React, { useRef, useEffect, useContext, useCallback } from "react";
import { SlideContext } from "../../../store/SlideContext";
import gsap from "gsap";
import Logo from "../../../LogoTrimmed.png";
import { Container, Image } from "react-bootstrap";

const AboutUs = () => {
  const { slideIndex, setSlideIndex } = useContext(SlideContext);
  const SLIDEDURATION = 7750;

  const aboutTl = useRef(
    gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 1 },
    })
  );

  const play = () => {
    aboutTl.current.revert();
    aboutTl.current.progress(0).play();
    aboutTl.current
      .set(".about-container", { opacity: 100 })
      .from(".about-insight-logo", { opacity: 0 })
      .from(
        ".about-sub-info",
        {
          opacity: 0,
        },
        0.5
      )
      .to(
        ".about",
        {
          opacity: 0,
          stagger: { each: 0.25, from: "end" },
          duration: 1,
        },
        6.5
      );
  };

  const nextSlide = useCallback(() => {
    setSlideIndex((i) => i + 1);
  }, [setSlideIndex]);

  useEffect(() => {
    if (slideIndex === 1) {
      const timer = setTimeout(() => {
        nextSlide();
      }, SLIDEDURATION);
      play();
      return () => {
        clearTimeout(timer);
      };
    } else {
      aboutTl.current.pause();
    }
  }, [slideIndex, nextSlide]);

  return (
    <Container fluid className="carousel-slide-cont about-container">
      <Image
        className="about-insight-logo about"
        fluid
        alt="insight logo"
        src={Logo}
      />
      <div className="slide-title-cont about-definition about my-10">
        <h2 className="title-secondary italic about-sub-info text-center mx:0 md:mx-10 lg:mx-40 xl:mx-80 px-0 lg:px-40 xl:px-80">
          noun [mass noun] - The capacity to gain an accurate and deep
          understanding of someone or something.
        </h2>
      </div>
    </Container>
  );
};

export default AboutUs;
