import classes from "./TeamMember.module.css"
import facebook from '/img/facebook.png';
import instagram from '/img/instagram.png';
import twitter from '/img/twitter.png';

function TeamMember ({teamImage,teamImageAlt,teamHeading,position}){
    return (
        <>
        <div className={classes.teamMember}>
     <div className={classes.teamImgCont}>
     <img src={teamImage} alt={teamImageAlt} className={classes.teamImg}/>
     </div>
            
        
        <div className={classes.teamCopy}>
            <h3>{teamHeading}</h3>
            <p>{position}</p>
        </div>
        <div className={classes.teamSocial}>
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={twitter} alt="" />
        </div>
        </div>
       
        </>
    )
}

export default TeamMember;