import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Logo from "../../LogoVertical.png";
import QR from "../../assets/DDDQR.png";
import { SlideContext } from "../../store/SlideContext";

import BeAmbitious from "./slides/BeAmbitious";
import AboutUs from "./slides/AboutUs";
import Culture from "./slides/Culture";
import LogoAnimation from "./slides/LogoAnimation";
import Impact from "./slides/Impact";
import GPTW from "./slides/GPTW";
import Expertise from "./slides/Expertise";
import Industry from "./slides/Industry";
import EndSlide from "./slides/Projects";
import Employee from "./slides/Employees";
import Microsoft from "./slides/Microsoft";
import MoreEmployees from "./slides/MoreEmployees";

const PapaCarousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    console.log("INDEX: " + slideIndex);
  }, [slideIndex]);

  return (
    <Container fluid className="carousel-cont">
      <SlideContext.Provider value={{ slideIndex, setSlideIndex }}>
        <Carousel
          fade={true}
          controls={false}
          touch={false}
          className="carousel gx-0"
          interval={null}
          activeIndex={slideIndex}
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
            <Expertise />
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <Industry />
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <Microsoft />
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <Employee />
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <MoreEmployees />
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <BeAmbitious />
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <EndSlide />
          </Carousel.Item>
        </Carousel>
      </SlideContext.Provider>
      <Container fluid className="background-cont">
        <Image
          className="logo-vertical small-display-none"
          fluid
          alt="insight-logo"
          src={Logo}
        />
        <Image
          className="qr-code small-display-none"
          fluid
          alt="insight qr code for ddd"
          src={QR}
        />
      </Container>
    </Container>
  );
};

export default PapaCarousel;
