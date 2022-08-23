import "./styles/App.css";
import { Container } from "react-bootstrap";
import FullHeightCarousel from "./components/carousel/FullHeightCarousel";

function App() {
  return (
    <div className="App">
      <Container fluid className="carousel-cont">
        <FullHeightCarousel />
      </Container>
      <Container fluid className="below-the-fold-cont"></Container>
    </div>
  );
}

export default App;
