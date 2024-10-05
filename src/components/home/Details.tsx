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
        <div className="picture-wrap">
          <div className="oval-bg"></div>
          <div className="picture-border">
            <img className="profile-pic" src={myPic} alt="Profile Pic" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
