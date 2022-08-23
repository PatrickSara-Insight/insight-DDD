import React from "react";
import '../../styles/App.css'

import Carousel from 'react-bootstrap/Carousel';
import HomeSlide from "./slides/HomeSlide";

function FullHeightCarousel() {
  return (
    <Carousel variant="dark" controls={false} pause={false} className="carousel gx-0">
      <Carousel.Item className="carousel-item">
        <HomeSlide />
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <HomeSlide />
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <HomeSlide />
      </Carousel.Item>
    </Carousel>
  );
}

export default FullHeightCarousel;