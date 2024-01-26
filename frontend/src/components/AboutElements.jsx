import classes from "../components/AboutElements.module.css"
import aboutOne from "/img/about1.png"
import aboutTwo from "/img/about2.png"
import aboutelipse from "/img/aboutelipse.png";

function AboutElements() {
    return (
        <>
            <div className={classes.aboutElWrap}>
                <div className={classes.aboutElWrapOne}>
                    <img src={aboutOne} alt="" className={classes.imgAbout} />
                    <div className={classes.aboutElCopy}>
                        <h2 className={classes.aboutElh}>About Us...</h2>
                        <p className={classes.aboutElp}>Our deepest passion is to help people grow and make the world a better place. Yoga is an optimal vehicle as it connects movement, health and mindset.</p>
                       
                    </div>
                </div>
   
                    <img src={aboutTwo} alt="" className={classes.imgAbouttwo} />
                    <img src={aboutelipse} alt="" className={classes.aboutelipse}/>

            </div>
        </>
    )
}

export default AboutElements;