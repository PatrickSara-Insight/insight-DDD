import React, { useCallback, useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Logo from "../../LogoVertical.png";
import { SlideContext } from "../../store/SlideContext";

import BeAmbitious from "./slides/BeAmbitious";
import AboutUs from "./slides/AboutUs";
import Culture from "./slides/Culture";
import LogoAnimation from "./slides/LogoAnimation";
import Impact from "./slides/Impact";
import GPTW from "./slides/GPTW";
import GlobalSystems from "./slides/GlobalSystems";
import Industry from "./slides/Industry";
import Projects from "./slides/Projects";

const PapaCarousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const ENDSLIDEINDEX = 8;
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
          // activeIndex={4}
        >
          <Carousel.Item className="carousel-item">
            <LogoAnimation />
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <AboutUs />
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <Culture />
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <Impact />
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <GPTW />
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <GlobalSystems />
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <Industry />
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <BeAmbitious />
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <Projects />
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
