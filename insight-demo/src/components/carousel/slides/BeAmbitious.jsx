import React, { useRef, useEffect, useContext, useCallback } from "react";
import { SlideContext } from "../../../store/SlideContext";
import gsap from "gsap";
import { Container, Image } from "react-bootstrap";
import QR from "../../../assets/DDDQR.png";

function BeAmbitious() {
  const { slideIndex, setSlideIndex } = useContext(SlideContext);
  const SLIDEDURATION = 8000;

  const bATl = useRef(
    gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 1 },
    })
  );

  const play = () => {
    bATl.current.revert();
    bATl.current.progress(0).play();
    bATl.current
      .set(".ba-cont", { opacity: 100 })
      .from("#be-ambitious-title", { opacity: 0 })
      .from(".ba-qr-code", { opacity: 0 }, 0.25)
      .from("#join-us", { opacity: 0 }, 0.5)
      .to(
        ".ambitious",
        { opacity: 0, stagger: { each: 0.2, from: "end" } },
        6.5
      );
  };

  const nextSlide = useCallback(() => {
    setSlideIndex((i) => i + 1);
  }, [setSlideIndex]);

  useEffect(() => {
    if (slideIndex === 10) {
      const timer = setTimeout(() => {
        nextSlide();
      }, SLIDEDURATION);
      play();
      return () => {
        clearTimeout(timer);
      };
    } else {
      bATl.current.pause();
    }
  }, [slideIndex, nextSlide]);

  return (
    <Container fluid className="carousel-slide-cont ba-cont">
      <h1
        className="title-primary text-center mb-20 ambitious"
        id="be-ambitious-title"
      >
        Now is the time to be ambitious.
      </h1>
      <Image
        className="ba-qr-code w-80 h-80 ambitious"
        fluid
        alt="insight qr code for ddd"
        src={QR}
      />
      <h2
        className="title-secondary text-center mt-20 font-bold ambitious"
        id="join-us"
      >
        Join us
      </h2>
    </Container>
  );
}

export default BeAmbitious;
