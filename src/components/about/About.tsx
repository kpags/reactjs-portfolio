import { useState } from "react";

import Slideshow from "./Slideshow";
import Presentation from "./Presentation";
import { EpisodesMenu } from "./SlideshowUtils/SlideshowElements";

const About = () => {
  const [isEpisodesMenuVisible, setIsEpisodesMenuVisible] = useState(false);
  const [selectedEpisode, setSelectedEpisode] = useState(0);
  const [currentDirection, setCurrentDirection] = useState("");

  const toggleEpisode = (index: number) => {
    setSelectedEpisode(index);
  };

  return (
    <>
      <div className="about-wrap">
        <Presentation
          currentSlideshowIndex={selectedEpisode}
          direction={currentDirection}
        />
        <EpisodesMenu
          isVisible={isEpisodesMenuVisible}
          selectedEpisode={selectedEpisode}
          setSelectedEpisode={toggleEpisode}
        />
        <Slideshow
          setIsEpisodesMenuVisible={setIsEpisodesMenuVisible}
          setSelectedEpisode={setSelectedEpisode}
          setCurrentDirection={setCurrentDirection}
          selectedEpisode={selectedEpisode}
          currentDirection={currentDirection}
        />
      </div>
    </>
  );
};

export default About;
