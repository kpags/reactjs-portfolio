import { useState, useEffect } from "react";

import Profile from "../../../assets/profile.jpg";
import GradCap from "../../../assets/grad-cap.jpg";

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

  const pictures = {
    1: Profile,
    2: GradCap,
  };

  const pictureTitle = {
    1: "Who's me?",
    2: "Schools",
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
      {
        <img
          src={currentPicture}
          className={`preview-picture ${currentPicture} ${
            animateDirection
              ? `${currentDirection === "previous" ? "previous" : "next"} `
              : ""
          }`}
        />
      }
      <label className="picture-title">{currentPictureTitle}</label>
    </>
  );
};
