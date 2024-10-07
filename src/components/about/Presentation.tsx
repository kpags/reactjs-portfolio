const ProfileContent = () => {
  return (
    <>
      <div className="content profile">
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
            - I've always been fascinated by how technology works and the impact
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

const Presentation = () => {
  return (
    <>
      <ProfileContent />
    </>
  );
};

export default Presentation;
