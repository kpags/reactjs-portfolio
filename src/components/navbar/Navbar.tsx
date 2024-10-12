import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  localStorage.removeItem("isMenuOpen");

  const navigate = useNavigate();
  const [isMenuOpen, setMenuStatus] = useState(false);
  const [optionActive, setActiveOption] = useState("Home");

  const toggleMenu = () => {
    setMenuStatus(!isMenuOpen);
    localStorage.setItem("isMenuOpen", JSON.stringify(!isMenuOpen));

    window.dispatchEvent(
      new CustomEvent("menuStatus", { detail: !isMenuOpen })
    );
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
          <div
            className={optionActive == "Home" ? "menu-row active" : "menu-row"}
            onClick={() => {
              navigate("/");
              toggleMenu();
              setActiveOption("Home");
            }}
          >
            <i className="bi bi-house-door"></i>
            <label className="home">Home</label>
          </div>
          <div
            className={optionActive == "About" ? "menu-row active" : "menu-row"}
            onClick={() => {
              navigate("/about");
              toggleMenu();
              setActiveOption("About");
            }}
          >
            <i className="bi bi-person"></i>
            <label className="about">About</label>
          </div>
          <div
            className={
              optionActive == "Projects" ? "menu-row active" : "menu-row"
            }
            onClick={() => {
              setActiveOption("Projects");
            }}
          >
            <i className="bi bi-briefcase"></i>
            <label className="projects">Projects</label>
          </div>
          <div
            className={
              optionActive == "Resume" ? "menu-row active" : "menu-row"
            }
            onClick={() => {
              setActiveOption("Resume");
            }}
          >
            <i className="bi bi-file-earmark-check"></i>
            <label className="resume">Resume</label>
          </div>
          <div
            className={
              optionActive == "Contact" ? "menu-row active" : "menu-row"
            }
            onClick={() => {
              setActiveOption("Contact");
            }}
          >
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

        {/* MENU TEXT FOR TABLET OR LARGER */}
        <div className="navbar-options">
          <label
            className="home-option"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </label>
          <label
            className="about-option"
            onClick={() => {
              navigate("/about");
            }}
          >
            About
          </label>
          <label className="projects-option">Projects</label>
          <label className="resume-option">Resume</label>
          <label className="contact-option">Contact Me</label>
        </div>
      </div>
    </>
  );
};

export default Navbar;
