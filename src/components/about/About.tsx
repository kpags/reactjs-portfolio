import { useState } from "react";

import Slideshow from "./Slideshow";
import { EpisodesMenu } from "./SlideshowUtils/SlideshowElements";

const About = () => {
  const [isEpisodesMenuVisible, setIsEpisodesMenuVisible] = useState(false);
  const [selectedEpisode, setSelectedEpisode] = useState(0);

  const toggleEpisode = (index: number) => {
    setSelectedEpisode(index);
  };

  return (
    <>
      <div className="about-wrap">
        <EpisodesMenu
          isVisible={isEpisodesMenuVisible}
          selectedEpisode={selectedEpisode}
          setSelectedEpisode={toggleEpisode}
        />
        <Slideshow
          setIsEpisodesMenuVisible={setIsEpisodesMenuVisible}
          setSelectedEpisode={setSelectedEpisode}
          selectedEpisode={selectedEpisode}
        />
      </div>
    </>
  );
};

export default About;
