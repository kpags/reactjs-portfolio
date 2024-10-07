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
