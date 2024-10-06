import { useState } from "react";

import Slideshow from "./Slideshow";
import { EpisodesMenu } from "./SlideshowUtils/SlideshowElements";

const About = () => {
  const [isEpisodesMenuVisible, setIsEpisodesMenuVisible] = useState(false);

  return (
    <>
      <div className="about-wrap">
        <EpisodesMenu isVisible={isEpisodesMenuVisible} />
        <Slideshow setIsEpisodesMenuVisible={setIsEpisodesMenuVisible} />
      </div>
    </>
  );
};

export default About;
