import React, { useRef, useEffect, useContext } from "react";
import { SlideContext } from "../../../store/SlideContext";
import gsap from "gsap";
import { Container, Image } from "react-bootstrap";
import MicrosoftLogo from "../../../assets/microsoft-logo-white.png";
import MicrosoftCard from "../../common/MicrosoftCard";

const Microsoft = () => {
  const slideIndex = useContext(SlideContext);

  const microsoftTl = useRef(
    gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 1 },
    })
  );

  const play = () => {
    microsoftTl.current.revert();
    microsoftTl.current.progress(0).play();
    microsoftTl.current
      .set(".microsoft-cont", { opacity: 100 })
      .from("#microsoft-title", { opacity: 0, duration: 1.5 }, 0)
      .from(
        "#microsoft-subtitle",
        {
          opacity: 0,
        },
        0.5
      )
      .from(
        ".microsoft-card",
        { opacity: 0, stagger: { each: 0.2, from: "start" }, duration: 1.5 },
        1
      )
      .to(
        ".microsoft",
        { opacity: 0, y: 1500, stagger: { each: 0.05, from: "end" } },
        9
      );
  };

  useEffect(() => {
    if (slideIndex === 7) {
      console.log("animating microsoft...");
      play();
    } else {
      microsoftTl.current.pause();
    }
  }, [slideIndex]);

  return (
    <Container fluid className="carousel-slide-cont microsoft-cont">
      <Container className="slide-title-cont text-center">
        <Image alt="microsoft logo" src={MicrosoftLogo} />
        <h1
          className="slide-header-alt mx-0 my-10 microsoft"
          id="microsoft-title"
        >
          Our head is only in one cloud
        </h1>
      </Container>
      <dl className="grid grid-cols-1 gap-5 lg:grid-cols-5 slide-content-cont microsoft-grid">
        <MicrosoftCard desc="Solution Assessment (Aus) Partner of the Year" />
        <MicrosoftCard desc="12 Advanced Specialisations in Azure, Security &#38; Modern Work" />
        <MicrosoftCard desc="18 Microsoft Gold Competencies" />
        <MicrosoftCard desc="Migration to Azure Partner of the Year" />
        <MicrosoftCard desc="Azure Security Deployment Global Partner of the Year" />
        <MicrosoftCard desc="Microsoft Azure Expert MSP and pure-play cloud strategy" />
        <MicrosoftCard desc="Data &#38; AI Inner Circle Partner" />
        <MicrosoftCard desc="IoT G10 &#38; Microsoft Bonsai Partner" />
        <MicrosoftCard desc="Elite DevOps &#38; GitHub Verified Partner" />
        <MicrosoftCard desc="Global LSP, CSP, and Surface Partner" />
      </dl>
    </Container>
  );
};

export default Microsoft;
