import React, { useCallback, useEffect, useRef, useState } from "react";
import { Container, Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { gsap } from "gsap";
import Logo from "../../LogoVertical.png";
import { SlideContext } from "../../store/SlideContext";

import BeAmbitious from "./slides/BeAmbitious";
import AboutUs from "./slides/AboutUs";
import Stats from "./slides/Stats";
import LogoAnimation from "./slides/LogoAnimation";

const PapaCarousel = () => {
  // how do I reset everything so the carousel can look effectively?
  const [slideIndex, setSlideIndex] = useState(0);
  const ENDSLIDEINDEX = 3;
  const SLIDEDURATION = 10000;

  const nextSlide = useCallback(() => {
    if (slideIndex < ENDSLIDEINDEX) {
      setSlideIndex((i) => i + 1);
    } else {
      setSlideIndex(0);
    }
  }, [slideIndex]);

  useEffect(() => {
    const nextSlideInterval = setInterval(() => {
      nextSlide();
    }, SLIDEDURATION);

    return () => {
      clearInterval(nextSlideInterval);
    };
  }, [nextSlide]);

  return (
    <Container fluid className="carousel-cont">
      <SlideContext.Provider value={slideIndex}>
        <Carousel
          // variant="dark"
          fade={true}
          controls={false}
          touch={false}
          className="carousel gx-0"
          interval={null}
          activeIndex={slideIndex}
          // activeIndex={1}
        >
          <Carousel.Item className="carousel-item" id="slide-0">
            <LogoAnimation />
          </Carousel.Item>
          <Carousel.Item className="carousel-item" id="slided-1">
            <BeAmbitious />
          </Carousel.Item>
          <Carousel.Item className="carousel-item" id="slide-2">
            <AboutUs />
          </Carousel.Item>
          <Carousel.Item className="carousel-item" id="slide-3">
            <Stats />
          </Carousel.Item>
        </Carousel>
      </SlideContext.Provider>
      <Container fluid className="background-cont">
        <Image className="logo-vertical" fluid alt="insight-logo" src={Logo} />
      </Container>
    </Container>
  );
};

export default PapaCarousel;
