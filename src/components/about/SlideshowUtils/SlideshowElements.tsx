import { useState, useEffect } from "react";
import { TailSpin } from "react-loading-icons";

interface EpisodesMenuProps {
  isVisible: boolean;
  selectedEpisode: number;
  setSelectedEpisode: (value: number) => void;
  showAchievements: boolean;
}

export const EpisodesMenu = ({
  isVisible,
  selectedEpisode,
  setSelectedEpisode,
  showAchievements,
}: EpisodesMenuProps) => {
  const [isMenuOpen, setMenuStatus] = useState(() => {
    const storedStatus = localStorage.getItem("isMenuOpen");
    return storedStatus ? JSON.parse(storedStatus) : false;
  });

  const [episodeWrapName, setWrapName] = useState("episode-wrap hidden");

  useEffect(() => {
    setTimeout(() => {
      setWrapName("episode-wrap");
    }, 500);

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
          isVisible && !isMenuOpen && !showAchievements
            ? `${episodeWrapName} open`
            : `${episodeWrapName} closed`
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
  showAchievements: boolean;
}

export const SlideshowPreview = ({
  currentSlideshowIndex,
  currentDirection,
  showAchievements,
}: SlideshowPreviewProps) => {
  return (
    <>
      <div className="slideshow-preview">
        <SlideshowPreviewPictures
          showAchievements={showAchievements}
          currentSlideshowIndex={currentSlideshowIndex}
          currentDirection={currentDirection}
        />
      </div>
    </>
  );
};

export const SlideShowPreviewPicturesV2 = () => {
  const [activeSlideShow, setActiveSlideShow] = useState("Profile");
  const [nextSlide, setNextSlide] = useState(0);
  const [originSlideIndex, setOriginSlideIndex] = useState(0);

  const toggleOriginSlideIndex = () => {
    if (activeSlideShow === "Profile") {
      setOriginSlideIndex(0);
    } else if (activeSlideShow === "Academics") {
      setOriginSlideIndex(1);
    } else if (activeSlideShow === "Skills") {
      setOriginSlideIndex(2);
    } else if (activeSlideShow === "Hobbies") {
      setOriginSlideIndex(3);
    }
  };

  return (
    <>
      <div className="slideshow-preview-wide">
        <div
          className={`slideshow-box profile ${
            activeSlideShow === "Profile" ? "active" : ""
          }`}
          onClick={() => {
            setActiveSlideShow("Profile");
            setNextSlide(0);
            toggleOriginSlideIndex();
          }}
        >
          <label className="title profile">Who's Me?</label>
          <img src="https://res.cloudinary.com/dqszzzdu1/image/upload/c_thumb,w_200,g_face/v1728189149/profile_oiukhi.jpg" />
        </div>
        <div className="connector-line">
          <div
            className={`line-flow ${
              (nextSlide === 1 && originSlideIndex === 0) ||
              (originSlideIndex === 0 && nextSlide - originSlideIndex > 1)
                ? "traverse-right"
                : `${
                    nextSlide === 0 && originSlideIndex === 1
                      ? "traverse-left"
                      : nextSlide === 0 && originSlideIndex - nextSlide > 1
                      ? "traverse-left delay-v1"
                      : ""
                  }`
            }`}
          ></div>
        </div>
        <div
          className={`slideshow-box academics ${
            activeSlideShow === "Academics" ? "active" : ""
          }`}
          onClick={() => {
            setActiveSlideShow("Academics");
            setNextSlide(1);
            toggleOriginSlideIndex();
          }}
        >
          <label className="title academics">Academics</label>
          <img src="https://res.cloudinary.com/dqszzzdu1/image/upload/v1728655885/academics_wn1rkp.png" />
        </div>
        <div className="connector-line">
          <div
            className={`line-flow ${
              nextSlide === 2 && originSlideIndex === 1
                ? "traverse-right"
                : nextSlide > 1 && originSlideIndex <= 1
                ? "traverse-right delay-v2"
                : `${
                    nextSlide === 1 && originSlideIndex === 2
                      ? "traverse-left"
                      : nextSlide <= 1 && originSlideIndex > 1
                      ? "traverse-left delay-v2"
                      : ""
                  }`
            }`}
          ></div>
        </div>
        <div
          className={`slideshow-box skills ${
            activeSlideShow === "Skills" ? "active" : ""
          }`}
          onClick={() => {
            setActiveSlideShow("Skills");
            setNextSlide(2);
            toggleOriginSlideIndex();
          }}
        >
          <label className="title skills">My Skills</label>
          <img src="https://res.cloudinary.com/dqszzzdu1/image/upload/c_thumb,w_200,g_face/v1728188565/skills_cx0k2e.jpg" />
        </div>
        <div className="connector-line">
          <div
            className={`line-flow ${
              nextSlide === 3 && originSlideIndex === 2
                ? "traverse-right"
                : nextSlide === 3 && originSlideIndex < nextSlide
                ? "traverse-right delay-v1"
                : `${
                    (nextSlide === 2 && originSlideIndex === 3) ||
                    (nextSlide < originSlideIndex && originSlideIndex === 3)
                      ? "traverse-left"
                      : ""
                  }`
            }`}
          ></div>
        </div>
        <div
          className={`slideshow-box hobbies ${
            activeSlideShow === "Hobbies" ? "active" : ""
          }`}
          onClick={() => {
            setActiveSlideShow("Hobbies");
            setNextSlide(3);
            toggleOriginSlideIndex();
          }}
        >
          <label className="title hobbies">Hobbies</label>
          <img src="https://res.cloudinary.com/dqszzzdu1/image/upload/c_thumb,w_200,g_face/v1728188764/hobbies_wsbrb5.jpg" />
        </div>
      </div>
    </>
  );
};

export const SlideshowPreviewPictures = ({
  currentSlideshowIndex,
  currentDirection,
  showAchievements,
}: SlideshowPreviewProps) => {
  const [animateDirection, setAnimation] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const pictures = {
    1: "https://res.cloudinary.com/dqszzzdu1/image/upload/c_thumb,w_200,g_face/v1728189149/profile_oiukhi.jpg",
    2: "https://res.cloudinary.com/dqszzzdu1/image/upload/v1728655885/academics_wn1rkp.png",
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
        className={`preview-picture ${
          showAchievements ? "blurred" : ""
        } img-${currentSlideshowIndex} ${
          animateDirection
            ? `${currentDirection === "previous" ? "previous" : "next"} `
            : ""
        }`}
      />
      <label className="picture-title">{currentPictureTitle}</label>
    </>
  );
};
