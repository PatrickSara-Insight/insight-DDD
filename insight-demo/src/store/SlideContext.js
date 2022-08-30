// set up simple context
// store the current slideIndex
// method to update the slideIndex

import { createContext } from "react";

// this is provided to the carousel
// carousel access, and changes active slide to the current slide index.
const SlideContext = createContext();

export { SlideContext };
