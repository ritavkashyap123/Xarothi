import { useState } from "react";
import classes from "./SectionThree.module.css";
import leaf3one from "/img/leafsec3.png";
import leaf3two from "/img/leaf2sec3.png";
import elipse3one from "/img/elipse1sec3.png";


function SectionThree() {
    const [showForm, setShowForm] = useState(false);
    const handleEnrollClick = () => setShowForm(true);
    const handleClose = () => {
        setShowForm(false);
    };
    return (
        <>
            <div className={classes.sectionThreeWrap}>
                <img src={leaf3one} alt="" className={classes.leafSecThree} />
                <img src={leaf3two} alt="" className={classes.leafSecTwoThree} />
                <img src={elipse3one} alt="" className={classes.elipseThreeone} />
                <div className={classes.sectionThreeCopy}>
                    <p>Get 25% Discount on all yoga classes</p>
                    <button type="button" className={classes.sectionThreeButton} onClick={handleEnrollClick}>Enroll Now</button>
                </div>
            </div>
            {showForm && (
                <div className={classes.enrollmentForm}>
                    <div className={classes.closeButton} onClick={handleClose}>
                        <span></span>
                    </div>
                    <h3 className={classes.enrollmentFormh}>Enrollment Form</h3>
                    <form className={classes.threeForm}>
                        <input type="text" placeholder="Enter your email here" className={classes.aboutFormInput} />
                        <button type="submit" className={classes.aboutFormButton}>Submit</button>
                    </form>
                </div>
            )}
        </>
    )
}

export default SectionThree;