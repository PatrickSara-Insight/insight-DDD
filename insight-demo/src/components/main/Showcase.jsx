import React from "react";
import { Container, Image } from "react-bootstrap";
import QR from "../../assets/DDDQR.png";

const Showcase = () => {
  return (
    <Container fluid className="showcase-cont">
      <h1
        className="title-primary text-center mb-20 gray ambitious"
        id="be-ambitious-title"
      >
        Now is the time to be ambitious.
      </h1>
      <a
        target="_blank"
        href="https://forms.office.com/Pages/ResponsePage.aspx?id=EnVjbBfEeE6dYrYSWOS2GceQhB2c5b5CrLD6hDE4otRUQlc5WlJEM05TQ1VJNEw0N1BLTkoyQjhaSi4u"
        rel="noreferrer"
      >
        <Image
          className="ba-qr-code w-80 h-80 ambitious"
          fluid
          alt="insight qr code for ddd"
          src={QR}
        />
      </a>
      <h2
        className="title-secondary gray text-center mt-20 font-bold ambitious"
        id="join-us"
      >
        Join us
      </h2>
    </Container>
  );
};

export default Showcase;
