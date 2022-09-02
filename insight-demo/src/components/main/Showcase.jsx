import React, { useRef, useEffect, useContext } from "react";
import gsap from "gsap";
import Logo from "../../LogoTrimmed.png";
import { Container, Image } from "react-bootstrap";
import GptwCard from "../common/GptwCard";
import ImpactCard from "../common/ImpactCard";

const Showcase = () => {
  return (
    <Container fluid className="showcase-cont">
      <div className="container md:mx-8 lg:mx-20 xl:mx-40">
        <h1 className="slide-header text-center gray">Title</h1>
        <h2 className="slide-subheader text-center gray">Some subtitle text</h2>
      </div>
    </Container>
  );
};

export default Showcase;
