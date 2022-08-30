import React from "react";

import Carousel from "./components/carousel/Carousel";
import Showcase from "./components/main/Showcase";

function App() {
  return (
    <div className="App">
      {/* insert slideIndex context provider */}
      <Carousel />
      <Showcase />
    </div>
  );
}

export default App;
