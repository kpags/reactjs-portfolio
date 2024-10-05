import myPic from "../../assets/myPic.png";

const Details = () => {
  return (
    <>
      <div className="details-wrap">
        <div className="intro-wrap">
          <label className="greet-text">Hello! My name is</label>
          <div className="name-wrap">
            <label className="first-name">Kurt</label>
            <label className="second-name">Paguio</label>
          </div>
          <div className="desc-wrap">
            A passionate, fast learner, and highly skilled software engineer
            with more than a year of experience developing robust, scalable, and
            user-friendly software solutions.
          </div>
          <div className="button-wrap">
            <div className="see-projects-btn">See Projects</div>
          </div>
        </div>
        {/* PICTURE WRAP FOR MOBILE */}
        <div className="picture-wrap">
          <div className="oval-bg"></div>
          <div className="picture-border">
            <img className="profile-pic" src={myPic} alt="Profile Pic" />
          </div>
        </div>
        {/* PICTURE WRAP FOR TABLE AND LARGER DEVICES */}
        <div className="picture-wrap-wide">
          <div className="oval-bg"></div>
          <div className="hanging-welcome-wrap">
            <div className="hanging-line"></div>
            <div className="hanging-board">
              <label className="welcome-text">WELCOME</label>
            </div>
          </div>
          <img className="profile-pic" src={myPic} alt="Profile Pic" />
        </div>
      </div>
    </>
  );
};

export default Details;
