import { useState, useEffect } from "react";
import { TailSpin } from "react-loading-icons";

interface EpisodesMenuProps {
  isVisible: boolean;
  selectedEpisode: number;
  setSelectedEpisode: (value: number) => void;
}

export const EpisodesMenu = ({
  isVisible,
  selectedEpisode,
  setSelectedEpisode,
}: EpisodesMenuProps) => {
  const [isMenuOpen, setMenuStatus] = useState(() => {
    const storedStatus = localStorage.getItem("isMenuOpen");
    return storedStatus ? JSON.parse(storedStatus) : false;
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const storedStatus = localStorage.getItem("isMenuOpen");
      setMenuStatus(storedStatus ? JSON.parse(storedStatus) : false);
    };

    window.addEventListener("menuStatus", handleStorageChange);

    return () => {
      window.removeEventListener("menuStatus", handleStorageChange);
    };
  }, []);

  return (
    <>
      <div
        className={
          isVisible && !isMenuOpen ? "episode-wrap" : "episode-wrap closed"
        }
      >
        <div
          className={
            selectedEpisode === 0 ? "option active profile" : "option profile"
          }
          onClick={() => setSelectedEpisode(0)}
        >
          <label className="profile-text">Profile</label>
        </div>
        <div
          className={
            selectedEpisode === 1
              ? "option active academics"
              : "option academics"
          }
          onClick={() => setSelectedEpisode(1)}
        >
          <label className="academics-text">Academics</label>
        </div>
        <div
          className={
            selectedEpisode === 2 ? "option active skills" : "option skills"
          }
          onClick={() => setSelectedEpisode(2)}
        >
          <label className="skills-text">Skills</label>
        </div>
        <div
          className={
            selectedEpisode === 3 ? "option active hobbies" : "option hobbies"
          }
          onClick={() => setSelectedEpisode(3)}
        >
          <label className="hobbies-text">Hobbies</label>
        </div>
      </div>
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
