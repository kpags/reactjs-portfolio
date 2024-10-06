import { useState, useEffect } from "react";
import { TailSpin } from "react-loading-icons";

interface EpisodesMenuProps {
  isVisible: boolean;
}

export const EpisodesMenu = ({ isVisible }: EpisodesMenuProps) => {
  return (
    <>
      <div className={isVisible ? "episode-wrap" : "episode-wrap closed"}></div>
    </>
  );
};

interface SlideshowPreviewProps {
  currentSlideshowIndex: number;
  currentDirection: string;
}

export const SlideshowPreview = ({
  currentSlideshowIndex,
  currentDirection,
}: SlideshowPreviewProps) => {
  return (
    <>
      <div className="slideshow-preview">
        <SlideshowPreviewPictures
          currentSlideshowIndex={currentSlideshowIndex}
          currentDirection={currentDirection}
        />
      </div>
    </>
  );
};

export const SlideshowPreviewPictures = ({
  currentSlideshowIndex,
  currentDirection,
}: SlideshowPreviewProps) => {
  const [animateDirection, setAnimation] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const pictures = {
    1: "https://res.cloudinary.com/dqszzzdu1/image/upload/c_thumb,w_200,g_face/v1728189149/profile_oiukhi.jpg",
    2: "https://res.cloudinary.com/dqszzzdu1/image/upload/v1728189549/academics_busrh5.jpg",
    3: "https://res.cloudinary.com/dqszzzdu1/image/upload/c_thumb,w_200,g_face/v1728188565/skills_cx0k2e.jpg",
    4: "https://res.cloudinary.com/dqszzzdu1/image/upload/c_thumb,w_200,g_face/v1728188764/hobbies_wsbrb5.jpg",
  };

  const pictureTitle = {
    1: "Who's me?",
    2: "Academics",
    3: "My Skills",
    4: "Hobbies",
  };

  let currentPicture = pictures[currentSlideshowIndex as keyof typeof pictures];
  let currentPictureTitle =
    pictureTitle[currentSlideshowIndex as keyof typeof pictureTitle];

  useEffect(() => {
    setAnimation(true);

    const timer = setTimeout(() => {
      setAnimation(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentPicture]);

  return (
    <>
      {isLoading && <TailSpin stroke="black" />}
      <img
        loading="lazy"
        onLoad={() => setLoading(false)}
        src={currentPicture}
        className={`preview-picture img-${currentSlideshowIndex} ${
          animateDirection
            ? `${currentDirection === "previous" ? "previous" : "next"} `
            : ""
        }`}
      />
      <label className="picture-title">{currentPictureTitle}</label>
    </>
  );
};
