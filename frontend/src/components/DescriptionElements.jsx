import classes from "./DescriptionElements.module.css"
import desc1 from "/img/desc1.jpg";
import desc2 from "/img/desc2.jpg";


function DescriptionElements() {
    return (
        <>
            <div className={classes.descElementOne}>
                <div className={classes.descElementCopy}>
                    <h2>Challenge Your Body & Discover A New You</h2>
                    <p>This practice invites you to observe with loving kindness and bring awareness to your internal world.</p>
                    <button type="button" className={classes.descButton}>Get Started</button>
                </div>
                <img src={desc1} alt="" />

            </div>
            <div className={classes.descElementTwo}>
                <img src={desc2} alt="" />
                <div className={classes.descElementCopy}>
                    <h2>Challenge Your Body & Discover A New You</h2>
                    <p>This practice invites you to observe with loving kindness and bring awareness to your internal world.</p>
                    <button type="button" className={classes.descButton}>Get Started</button>
                </div>
            </div>
        </>
    )
}

export default DescriptionElements;