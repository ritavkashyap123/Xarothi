import TeamMember from "./TeamMember";
import classes from "./Team.module.css"
import teamElipseOne from "/img/teamelipse1.png"
import teamElipseTwo from "/img/teamelipse2.png"
import teamElipseThree from "/img/teamelipse3.png"

    function Team () {
        return (
            <>
            <div id="team" className={classes.teamMain}>
                <img src={teamElipseOne} alt="" className={classes.teamElipseOneImg}/>
                <img src={teamElipseTwo} alt="" className={classes.teamElipseTwoImg}/>
                <img src={teamElipseThree} alt="" className={classes.teamElipseThreeImg}/>
                <h2 className={classes.teamMainH}>Meet The team...</h2>
                <p className={classes.teamMainCopy}>Discover your best and most powerful self with our exclusive health and wealth services.....</p>
            <div className={classes.teamWrapper}>
            <TeamMember
                    teamImage="../img/team1.png"
                    teamImageAlt="Alt text for image 1"
                    teamHeading="Eloise Bridgerton"
                    position="Meditation Instructor"
                />
                <TeamMember
                    teamImage="../img/team2.png"
                    teamImageAlt="Alt text for image 1"
                    teamHeading="Eloise Bridgerton"
                    position="Meditation Instructor"
                />
                <TeamMember
                    teamImage="../img/team3.png"
                    teamImageAlt="Alt text for image 1"
                    teamHeading="Eloise Bridgerton"
                    position="Meditation Instructor"
                />
                <TeamMember
                    teamImage="../img/team4.png"
                    teamImageAlt="Alt text for image 1"
                    teamHeading="Eloise Bridgerton"
                    position="Meditation Instructor"
                />
            </div>
            </div>
            
               
            </>
        )
    }

    export default Team;