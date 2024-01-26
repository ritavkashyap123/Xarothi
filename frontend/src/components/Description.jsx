import DescriptionElements from "./DescriptionElements"
import classes from "./Description.module.css"
import leaf1 from "/img/leaf1.png";
import leaf2 from "/img/leaf2.png";
import leaf3 from "/img/leaf3.png";


function Description (){
    return <>
    <div className={classes.descriptionMain}>
    <img src={leaf1} alt="" className={classes.leafOne}/>
        <img src={leaf2} alt="" className={classes.leafTwo}/>
        <img src={leaf3} alt="" className={classes.leafThree}/>
    <div className={classes.descriptionWrapper}>
        <DescriptionElements />
    </div>
    </div>
    
    </>
}

export default Description;