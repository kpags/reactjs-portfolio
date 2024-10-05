import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuStatus] = useState(false);
  const toggleMenu = () => {
    setMenuStatus(!isMenuOpen);
  };

  return (
    <>
      {/* BLUR WRAP*/}
      {isMenuOpen ? <div className="blur-wrap"></div> : <></>}

      {/* MENU */}
      <div className={isMenuOpen ? "menu-wrap" : "menu-wrap closed"}>
        <div className="header-wrap">
          <label className="menu-text">Menu</label>
          <i
            className="bi bi-x-lg"
            onClick={() => {
              toggleMenu();
            }}
          ></i>
        </div>
        <div className="menu-rows">
          <div className="menu-row">
            <i className="bi bi-house-door"></i>
            <label className="home">Home</label>
          </div>
          <div className="menu-row">
            <i className="bi bi-person"></i>
            <label className="about">About</label>
          </div>
          <div className="menu-row">
            <i className="bi bi-briefcase"></i>
            <label className="projects">Projects</label>
          </div>
          <div className="menu-row">
            <i className="bi bi-file-earmark-check"></i>
            <label className="resume">Resume</label>
          </div>
          <div className="menu-row">
            <i className="bi bi-telephone-inbound"></i>{" "}
            <label className="contact">Contact Me</label>
          </div>
        </div>
      </div>

      <div className="navbar-wrap">
        <label className="username-text">KTFP</label>
        <i
          className="bi bi-list"
          onClick={() => {
            toggleMenu();
          }}
        ></i>
      </div>
    </>
  );
};

export default Navbar;
