import React, { useRef, useEffect, useContext } from "react";
import { SlideContext } from "../../../store/SlideContext";
import gsap from "gsap";
import Logo from "../../../LogoTrimmed.png";
import { Container, Image } from "react-bootstrap";

const AboutUs = () => {
  const slideIndex = useContext(SlideContext);

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
      .from("#about-insight-logo", { opacity: 0 })
      .from(
        ".about-sub-info",
        {
          opacity: 0,
          duration: 2,
          stagger: 0.2,
        },
        0
      )
      .to(
        ".about",
        {
          opacity: 0,
          stagger: { each: 0.5, from: "end" },
          duration: 1.5,
        },
        8
      );
  };

  useEffect(() => {
    if (slideIndex === 1) {
      console.log("animating about us...");
      play();
    } else {
      aboutTl.current.pause();
    }
  }, [slideIndex]);

  return (
    <Container fluid className="carousel-slide-cont about-container mb-12">
      <Image
        className="about-insight-logo about"
        fluid
        alt="insight logo"
        src={Logo}
      />
      <div className="container md:mx-8 lg:mx-20 xl:mx-40 about-definition about">
        <h2 className="slide-subheader italic about-sub-info">
          noun [mass noun] - The capacity to gain an accurate and deep
          understanding of someone or something.
        </h2>
      </div>
    </Container>
  );
};

export default AboutUs;
