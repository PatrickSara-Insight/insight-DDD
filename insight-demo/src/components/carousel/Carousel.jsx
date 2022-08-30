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
  const [slideIndex, setSlideIndex] = useState(0);
  const TOTALSLIDES = 4;
  const SLIDEDURATION = 10;

  const nextSlide = useCallback(() => {
    if (slideIndex < 3) {
      setSlideIndex((i) => i + 1);
    } else {
      setSlideIndex(0);
    }
  }, [slideIndex]);

  useEffect(() => {
    const nextSlideInterval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => {
      clearInterval(nextSlideInterval);
    };
  }, [nextSlide]);

  return (
    <Container fluid className="carousel-cont">
      <SlideContext.Provider value={slideIndex}>
        <Carousel
          variant="dark"
          controls={false}
          touch={false}
          pause={"hover"}
          className="carousel gx-0"
          interval={null}
          activeIndex={slideIndex}
        >
          <Carousel.Item className="carousel-item">
            <LogoAnimation />
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <BeAmbitious />
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <AboutUs />
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
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
