import { useState } from "react";
import { SlideshowPreview } from "./SlideshowUtils/SlideshowElements";
import {
  SolarMapArrowRightLinear,
  SolarMapArrowLeftLinear,
} from "./SlideshowUtils/SlideshowIcons";
import { SystemUiconsEpisodes } from "./SlideshowUtils/SlideshowIcons.tsx";

interface SlideshowProps {
  setIsEpisodesMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedEpisode: React.Dispatch<React.SetStateAction<number>>;
  setCurrentDirection: React.Dispatch<React.SetStateAction<string>>;
  currentDirection: string;
  selectedEpisode: number;
}

const Slideshow = ({
  setIsEpisodesMenuVisible,
  setSelectedEpisode,
  setCurrentDirection,
  selectedEpisode,
  currentDirection,
}: SlideshowProps) => {
  const toggleSlideshowIndex = (direction: string) => {
    if (direction === "previous") {
      setSelectedEpisode(selectedEpisode - 1);
    } else if (direction === "next") {
      setSelectedEpisode(selectedEpisode + 1);
    }
  };

  return (
    <>
      <div className="slideshow-wrap">
        <SystemUiconsEpisodes
          className="ui-episodes"
          onClick={() => setIsEpisodesMenuVisible((prev) => !prev)}
        />
        <SolarMapArrowLeftLinear
          className={selectedEpisode > 0 ? "arrow left" : "arrow left hidden"}
          onClick={() => {
            toggleSlideshowIndex("previous");
            setCurrentDirection("previous");
          }}
        />
        <SlideshowPreview
          currentSlideshowIndex={selectedEpisode + 1}
          currentDirection={currentDirection}
        />
        <SolarMapArrowRightLinear
          className={selectedEpisode < 3 ? "arrow right" : "arrow right hidden"}
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
