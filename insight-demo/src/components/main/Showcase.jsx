import React, { useRef, useEffect, useContext } from "react";
import gsap from "gsap";
import Logo from "../../LogoTrimmed.png";
import { Container, Image } from "react-bootstrap";
import GptwCard from "../common/GptwCard";

const Showcase = () => {
  return (
    <Container fluid className="showcase-cont">
      <div className="container md:mx-8 lg:mx-20 xl:mx-40">
        <h1 className="slide-header gray">Title</h1>
        <h2 className="slide-subheader text-center gray">Some subtitle text</h2>
      </div>
      <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-20 gptw-grid">
        <GptwCard stat="No. 360" desc="Fortune 500 Company" bg="bg-fuchsia" />
        <GptwCard
          stat="2021"
          desc="Fortune World's Most Admired Cmpanies"
          bg="bg-fuchsia"
        />
        <GptwCard
          stat="The Org"
          desc="2nd Most Gender Diverse Executive Team in Technology"
          bg="bg-fuchsia"
        />
        <GptwCard
          stat="95/100"
          desc="Human Rights Campaign Foundation's 2021"
          bg="bg-red"
        />
        <GptwCard stat="100/100" desc="LGBTQ Workplace Equality" bg="bg-red" />
        <GptwCard
          stat="2022"
          desc="Reconciliation Australia: Reflect Reconciliation Action Plan"
          bg="bg-red"
        />
        <GptwCard
          stat="No. 95"
          desc="Forbes World's Best Employers 2021"
          bg="bg-purple"
        />
        <GptwCard
          stat="2022"
          desc="Partnership with the Indigenous Literacy Foundation"
          bg="bg-purple"
        />
      </ul>
    </Container>
  );
};

export default Showcase;
