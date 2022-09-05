import React, { useRef, useEffect, useContext } from "react";
import { SlideContext } from "../../../store/SlideContext";
import gsap from "gsap";
import { Container } from "react-bootstrap";
import IndustryCard from "../../common/IndustryCard";
import Construction from "../../../assets/construction-industry-icon.png";
import Financial from "../../../assets/financial-industry-icon.png";
import Healthcare from "../../../assets/healthcare-industry-icon.png";
import Manufacturing from "../../../assets/manufacturing-industry-icon.png";
import Retail from "../../../assets/retail-industry-icon.png";
import Service from "../../../assets/service-provider-industry-icon.png";
import SmallBusiness from "../../../assets/small-medium-industry-icon.png";
import Travel from "../../../assets/travel-industry-icon.png";

const Industry = () => {
  const slideIndex = useContext(SlideContext);

  const industryTL = useRef(
    gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 1 },
    })
  );

  const play = () => {
    industryTL.current.revert();
    industryTL.current.progress(0).play();
    industryTL.current
      .set(".industry-cont", { opacity: 100 })
      .from("#industry-title", { opacity: 0 })
      .from("#industry-subtitle", { opacity: 0 }, 0.25)
      .from(".industry-card", { opacity: 0, y: 20, stagger: 0.1 })
      .to(
        ".industry",
        { opacity: 0, y: 2000, stagger: { each: 0.05, from: "end" } },
        8.5
      );
  };

  useEffect(() => {
    if (slideIndex === 6) {
      console.log("animating industries...");
      play();
    } else {
      industryTL.current.pause();
    }
  }, [slideIndex]);

  return (
    <Container fluid className="carousel-slide-cont industry-cont">
      <Container className="slide-title-cont text-center">
        <h1 className="slide-header mx-0 my-10 industry" id="industry-title">
          Industries we serve
        </h1>
        <h2
          className="slide-subheader my-2 px-4 industry"
          id="industry-subtitle"
        >
          We offer breadth and depth — combining deep industry expertise and
          technical skills
        </h2>
      </Container>
      <dl className="slide-content-cont grid grid-cols-1 gap-5 lg:grid-cols-4 industry-grid">
        <IndustryCard title="Construction technology" svg={Construction} />
        <IndustryCard title="Financial services" svg={Financial} />
        <IndustryCard title="Healthcare &#38; life sciences" svg={Healthcare} />
        <IndustryCard title="Manufacturing technology" svg={Manufacturing} />
        <IndustryCard title="Retail &#38; restaurants" svg={Retail} />
        <IndustryCard title="Service providers" svg={Service} />
        <IndustryCard title="Small to medium business" svg={SmallBusiness} />
        <IndustryCard title="Travel &#38; tourism" svg={Travel} />
      </dl>
    </Container>
  );
};

export default Industry;
