import { useState, useEffect } from "react";
interface ContentProps {
  direction: string;
  showAchievements: boolean;
  setShowAchievements: () => void;
}

const ProfileContent = ({ direction }: ContentProps) => {
  return (
    <>
      <div
        className={
          direction === "next"
            ? "content next profile"
            : "content previous profile"
        }
      >
        <div className="title-wrap">
          <div className="line"></div>
          <label className="title">About Me</label>
          <div className="line"></div>
        </div>
        <div className="basic-info-wrap">
          <div className="info email">
            <img
              src="https://res.cloudinary.com/dqszzzdu1/image/upload/v1728295469/email_rtwddw.jpg"
              className="icon email"
            />
            <label className="text email">kurtpaguio0430@gmail.com</label>
          </div>
          <div className="info address">
            <img
              src="https://res.cloudinary.com/dqszzzdu1/image/upload/v1728301072/location_h6evdy.jpg"
              className="icon address"
            />
            <label className="text address">6 Policy St. Project 8 Q.C</label>
          </div>
          <div className="info phone">
            <img
              src="https://res.cloudinary.com/dqszzzdu1/image/upload/v1728299538/call_qujo8e.jpg"
              className="icon phone"
            />
            <label className="text phone">09938801976</label>
          </div>
          <div className="info bday">
            <img
              src="https://res.cloudinary.com/dqszzzdu1/image/upload/v1728300383/cake_z4rvdv.jpg"
              className="icon bday"
            />
            <label className="text bday">April 30, 2000</label>
          </div>

          <div className="thoughts-wrap">
            I've always been fascinated by how technology works and the impact
            it has on our society. This curiosity is what led me to pursue a
            career in IT—I wanted to dive into the world of technology and
            understand what makes it function and evolve. Technology is
            constantly advancing, with new innovations emerging regularly, and
            it touches nearly every aspect of our lives. I’m excited to be part
            of a field that’s shaping the future, and that’s why I'm dedicated
            to continually learning and exploring new ideas. As a developer, I
            find great satisfaction in solving problems and optimizing
            applications to be as efficient as possible. I enjoy working within
            a team environment because I believe that most applications require
            collaboration to bring them to life, and working with others offers
            invaluable learning experiences. I’m open to constructive criticism,
            knowing it’s an essential part of growth. I also remind myself that
            every successful person has made mistakes and faced failures along
            the way—these are simply stepping stones to success.
          </div>
        </div>
      </div>
    </>
  );
};

const AcademicsContent = ({
  direction,
  showAchievements,
  setShowAchievements,
}: ContentProps) => {
  const [educationIndex, setEducationIndex] = useState(0);
  const [showAchievementText, setShowAchievementText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAchievementText((prev) => !prev);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className={
          direction === "next"
            ? "content next academics"
            : "content previous academics"
        }
      >
        {showAchievements ? <div className="blur-wrap"></div> : <></>}
        <AcademicAchievements
          showAchievements={showAchievements}
          index={educationIndex}
          setShowAchievements={setShowAchievements}
        />
        <div className="arrows">
          <i
            className={
              educationIndex === 0
                ? "bi none bi-arrow-left"
                : "bi bi-arrow-left"
            }
            onClick={() => setEducationIndex(educationIndex - 1)}
          ></i>
          <i
            className={
              educationIndex === 2
                ? "bi none bi-arrow-right"
                : "bi bi-arrow-right"
            }
            onClick={() => setEducationIndex(educationIndex + 1)}
          ></i>
        </div>
        <div className="achievement-wrap">
          {showAchievementText && (
            <label className="achievement-text">
              Check out my achievements!
            </label>
          )}
          <img
            src="https://res.cloudinary.com/dqszzzdu1/image/upload/v1728468656/trophy_m9owgq.gif"
            className="achievements"
            onClick={() => setShowAchievements()}
          />
        </div>
        {educationIndex === 0 && (
          <AcademicsEducationContents
            logo="https://res.cloudinary.com/dqszzzdu1/image/upload/v1728392435/ust_ehs_dzjda3.png"
            level="hs"
            name="UST Education High School"
            year="2013 - 2017"
            gif="https://res.cloudinary.com/dqszzzdu1/image/upload/v1728396095/hs_walking_rgxhlr.gif"
          />
        )}
        {educationIndex === 1 && (
          <AcademicsEducationContents
            logo="https://res.cloudinary.com/dqszzzdu1/image/upload/v1728392435/ust_shs_jgj0xp.png"
            level="shs"
            name="UST Senior High School"
            year="2017 - 2019"
            gif="https://res.cloudinary.com/dqszzzdu1/image/upload/v1728398183/shs_walk_tcyhic.gif"
          />
        )}
        {educationIndex === 2 && (
          <AcademicsEducationContents
            logo="https://res.cloudinary.com/dqszzzdu1/image/upload/v1728392435/ust_cics_puhszp.png"
            level="college"
            name="UST College of Information & Computing Sciences"
            year="2019 - 2023"
            gif="https://res.cloudinary.com/dqszzzdu1/image/upload/v1728468106/adult_walk_nsbtzy.gif"
          />
        )}
      </div>
    </>
  );
};

interface AcademicsEducationContentsProps {
  logo: string;
  level: string;
  name: string;
  year: string;
  gif: string;
}
const AcademicsEducationContents = ({
  logo,
  level,
  name,
  year,
  gif,
}: AcademicsEducationContentsProps) => {
  return (
    <>
      <div className={`education ${level}`}>
        <div className="picture-wrap">
          <img src={logo} className={`image ${level}`} />
        </div>
        <div className="text-label-wrap">
          <label className={`text ${level}`}>{name}</label>
          <label className={`text-year ${level}-year`}>{year}</label>
        </div>
        <div className="gif-wrap">
          <div className="gif-border">
            <img src={gif} className={`walking ${level}`} />
          </div>
        </div>
      </div>
    </>
  );
};

interface AcademicAchievementsProps {
  index: number;
  setShowAchievements: () => void;
  showAchievements: boolean;
}

const AcademicAchievements = ({
  index,
  setShowAchievements,
  showAchievements,
}: AcademicAchievementsProps) => {
  const [achievementsWrapName, setWrapName] = useState(
    "academic-achievements-wrap hidden"
  );

  useEffect(() => {
    setTimeout(() => {
      setWrapName("academic-achievements-wrap");
    }, 500);
  }, []);

  const achievements = [
    [
      "UAAP Season 79 2nd Runner Up",
      "UAAP Season 79 Single Event Gold Medalist",
      "S.Y. 2016-2017 Athlete of the Year",
      "Computer Club Assistant Treasurer",
      "Rosarian Club Grade 10 Representative",
    ],
    [
      "UAAP Season 80 1st Runner Up",
      "UAAP Season 80 Single Event Bronze Medalist",
      "UAAP Season 81 1st Runner Up",
      "Uaap Season 81 Athletics Team Captain",
    ],
    [
      "Latin Honors: Cum Laude",
      "Silver Loyalty Award",
      "S.Y. 2021-2022 First and Second Semester Dean's Lister",
      "S.Y. 2022-2023 First and Second Semester Dean's Lister",
      "IM Summit 2022: Rediscovering Innovation Semifinalist",
      "PhilNITS IT Certification",
    ],
  ];

  return (
    <>
      <div
        className={
          showAchievements
            ? `${achievementsWrapName} open`
            : `${achievementsWrapName} closed`
        }
      >
        <div className="heading">
          <label className="my-achievements-text">Achievements</label>
          <label className="x-button" onClick={() => setShowAchievements()}>
            X
          </label>
        </div>
        <div className="achievements-content">
          {achievements[index].map((achievement, index) => (
            <label key={index} className="achievement">
              {achievement}
            </label>
          ))}
        </div>
      </div>
    </>
  );
};

interface PresentationProps {
  currentSlideshowIndex: number;
  direction: string;
  showAchievements: boolean;
  setShowAchievements: () => void;
}

const Presentation = ({
  currentSlideshowIndex,
  direction,
  showAchievements,
  setShowAchievements,
}: PresentationProps) => {
  return (
    <>
      {currentSlideshowIndex === 0 && (
        <ProfileContent
          direction={direction}
          showAchievements={showAchievements}
          setShowAchievements={setShowAchievements}
        />
      )}
      {currentSlideshowIndex === 1 && (
        <AcademicsContent
          direction={direction}
          showAchievements={showAchievements}
          setShowAchievements={setShowAchievements}
        />
      )}
    </>
  );
};

export default Presentation;
