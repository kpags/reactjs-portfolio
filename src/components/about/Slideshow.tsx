import { useState } from "react";
import { SlideshowPreview } from "./SlideshowUtils/SlideshowElements";
import {
  SolarMapArrowRightLinear,
  SolarMapArrowLeftLinear,
} from "./SlideshowUtils/SlideshowIcons";

const Slideshow = () => {
  const [currentSlideshowIndex, setCurrentSlideshowIndex] = useState(0);
  const [currentDirection, setCurrentDirection] = useState("");

  const toggleSlideshowIndex = (direction: string) => {
    if (direction === "previous") {
      setCurrentSlideshowIndex(currentSlideshowIndex - 1);
    } else if (direction === "next") {
      setCurrentSlideshowIndex(currentSlideshowIndex + 1);
    }
  };

  return (
    <>
      <div className="slideshow-wrap">
        <SolarMapArrowLeftLinear
          className={
            currentSlideshowIndex > 0 ? "arrow left" : "arrow left hidden"
          }
          onClick={() => {
            toggleSlideshowIndex("previous");
            setCurrentDirection("previous");
          }}
        />
        <SlideshowPreview
          currentSlideshowIndex={currentSlideshowIndex + 1}
          currentDirection={currentDirection}
        />
        <SolarMapArrowRightLinear
          className={
            currentSlideshowIndex !== 4 ? "arrow right" : "arrow right hidden"
          }
          onClick={() => {
            toggleSlideshowIndex("next");
            setCurrentDirection("next");
          }}
        />
      </div>
    </>
  );
};

export default Slideshow;
