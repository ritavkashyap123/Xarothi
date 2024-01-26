
import OfferSect from "./OfferSect";
import classes from "./SectionSecond.module.css"
function SectionSecond() {
    return (
        <>
        <div id="services" className={classes.sectionSecondWrapper}>
            <img src="../img/elipse1.png" alt="" className={classes.elipseOne}/>
            <img src="../img/elipse2.png" alt="" className={classes.elipseTwo}/>
            <img src="../img/elipse3.png" alt="" className={classes.elipseThree}/>
            <h2>
                Our Offerings..
            </h2>
            <p className={classes.sectionSecondp}>
                Discover your best and most powerful self with our exclusive health and wealth services.....
            </p>
            <div className={classes.offerSectionWrapper}>
                <OfferSect
                    imageSrc="../img/offersectone.jpg"
                    imageAlt="Alt text for image 1"
                    heading="Yoga Health camp"
                    content="Beginner yoga You will learn to control your breathing in a relaxed and controlled manner that helps provide focus in the different postures you move through."
                />
                <OfferSect
                    imageSrc="../img/offersecttwo.jpg"
                    imageAlt="Alt text for image 1"
                    heading="Meditation"
                    content="Meditation for mental balance and grounding, guided meditation. This practice invites you to observe with loving kindness and bring awareness to your internal world."
                />
                <OfferSect
                    imageSrc="../img/offersectthree.jpg"
                    imageAlt="Alt text for image 1"
                    heading="Empower Flow"
                    content="Perfect balance of linked poses so you are challenged to explore your own personal edge. Designed to challenge, strengthen, and empower your practice as you flow breath by breath through the sequences."
                />
                <OfferSect
                    imageSrc="../img/offersectfour.jpg"
                    imageAlt="Alt text for image 1"
                    heading="Force"
                    content="Designed to build strength, and increase heart rate. Interval training revs up your metabolism unlike anything else. When we practice yoga, the Force is within us and around us."
                />
                <OfferSect
                    imageSrc="../img/offersectfive.jpg"
                    imageAlt="Alt text for image 1"
                    heading="Pre-Natal Yoga"
                    content="Meditation for mental balance and grounding, guided meditation. This practice invites you to observe with loving kindness and bring awareness to your internal world."
                />
                <OfferSect
                    imageSrc="../img/offersectsix.jpg"
                    imageAlt="Alt text for image 1"
                    heading="Force"
                    content="Perfect balance of linked poses so you are challenged to explore your own personal edge. Designed to challenge, strengthen, and empower your practice as you flow breath by breath through the sequences."
                />
            </div>
            </div>
        </>
    )
}

export default SectionSecond;