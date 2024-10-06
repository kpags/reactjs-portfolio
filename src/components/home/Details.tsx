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
            <img
              className="profile-pic"
              src="https://res.cloudinary.com/dqszzzdu1/image/upload/v1728186951/myPic_mxzxbd.png"
              alt="Profile Pic"
            />
          </div>
        </div>
        {/* PICTURE WRAP FOR TABLE AND LARGER DEVICES */}
        <div className="picture-wrap-wide">
          <div className="hanging-welcome-wrap">
            <div className="hanging-line"></div>
            <div className="hanging-board">
              <label className="welcome-text">WELCOME</label>
            </div>
          </div>
          <div className="oval-bg"></div>
          <img
            className="profile-pic"
            src="https://res.cloudinary.com/dqszzzdu1/image/upload/v1728186951/myPic_mxzxbd.png"
            alt="Profile Pic"
          />
        </div>
      </div>
    </>
  );
};

export default Details;
