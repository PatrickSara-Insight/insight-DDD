import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import logo from "../../../logo-white.png";

function HomeSlide() {
  return (
    <Container fluid className="carousel-slide-cont">
      <img src={logo} alt="logo" />
      <h1> Insight! ! ! !! </h1>
      <Carousel.Caption>
        <h3>Insight Slide Template</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Container>
  );
}

export default HomeSlide;
