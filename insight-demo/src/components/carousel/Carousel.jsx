import React, { useEffect, useRef, useState } from "react";
import { Container, Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { gsap } from "gsap";
import Logo from "../../LogoVertical.png";

import BeAmbitious from "./slides/BeAmbitious";
import AboutUs from "./slides/AboutUs";
import Stats from "./slides/Stats";
import LogoAnimation from "./slides/LogoAnimation";

const PapaCarousel = () => {
  // use react context to control slide index

  // intervals to swap, control animation from one timeline

  return (
    <Container fluid className="carousel-cont">
      <Carousel
        variant="dark"
        controls={false}
        touch={false}
        pause={"hover"}
        className="carousel gx-0"
        // interval={null}
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
      <Container fluid className="background-cont">
        <Image className="logo-vertical" fluid alt="insight-logo" src={Logo} />
      </Container>
    </Container>
  );
};

export default PapaCarousel;
