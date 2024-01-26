import React, { useState, useEffect } from "react";
import classes from "./Hero.module.css";
// import logo from "/img/logo.png";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = window.innerHeight * 1
      setIsScrolled(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${classes.header} ${isScrolled ? classes.scrolled : ""}`}>
      <a
        href="#"
        className={classes.link}
        style={{
          fontSize: "2rem",
          cursor: "pointer",
        }}
      >
        {/* <img src={logo} alt="" /> */}
        Xarothi
      </a>

      <div className={classes.hamburger} onClick={toggleNav}>
        <div
          className={`${classes.line} ${isNavOpen ? classes.open : ""}`}
        ></div>
        <div
          className={`${classes.line} ${isNavOpen ? classes.open : ""}`}
        ></div>
        <div
          className={`${classes.line} ${isNavOpen ? classes.open : ""}`}
        ></div>
      </div>

      <ul className={`${classes.links} ${isNavOpen ? classes.open : ""}`}>
        <li className={classes.link}>
          <a href="#services">Services</a>
        </li>
        <li className={classes.link}>
          <a href="#team">Our Team</a>
        </li>

        <li className={classes.link}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
