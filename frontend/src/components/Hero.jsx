import { useState } from "react";
import classes from "./Hero.module.css";
import HeroImg from "/img/HeroImg.png";
import heroElipse from "/img/heroelipse.png";
import Webcam from "react-webcam";
import { Link, useNavigate } from "react-router-dom";

function Hero() {
  const [showForm, setShowForm] = useState(false);
  const handleEnrollClick = () => setShowForm(true);
  const handleClose = () => {
    setShowForm(false);
  };

  return (
    <>
      <div className={classes.heroMain}>
        <img src={heroElipse} alt="" className={classes.heroElipse} />
        <div className={classes.hero}>
          <div className={classes.heroCopy}>
            <h1 className={classes.heroCopyh}>Revitalize Your Body and Mind</h1>
            <p className={classes.heroCopyp}>
              Unlock your the strength and beauty of your mind with
            </p>
              <button
                type="button"
                className={classes.heroCopyButton}
                onClick={handleEnrollClick}
              >
                Check the posture
              </button>
          </div>
          {showForm && (
            <div className={classes.enrollmentForm}>
              <div className={classes.closeButton} onClick={handleClose}>
                <span></span>
              </div>
              <h3 className={classes.enrollmentFormh}>Check Posture</h3>
              <div className={classes.threeForm}>
                {/* <input type="text" placeholder="Enter your email here" className={classes.aboutFormInput} />
                <button type="submit" className={classes.aboutFormButton}>Submit</button> */}
                <Webcam height={"60%"} width={"60%"} /> 
                {/* <Webcam height={window.innerHeight*0.5} width={window.innerWidth*0.5} /> */}
              </div>
            </div>
          )}
          <div className={classes.heroImg}>
            <img src={HeroImg} alt="" className={classes.heroImgImg} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
