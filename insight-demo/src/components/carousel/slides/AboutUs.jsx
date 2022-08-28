import React from "react";
import { Container } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Container fluid className="carousel-slide-cont">
      <h1 className="slide-header">Insight</h1>
      <div className="container md:mx-8 lg:mx-20 xl:mx-40">
        <h2 className="slide-subheader italic">noun [mass noun]</h2>
        <h2 className="slide-subheader my-2">
          The capacity to gain an accurate and deep understanding of someone or
          something.
        </h2>
      </div>
    </Container>
  );
};

export default AboutUs;
