import React from "react";
import intropic from "../../assets/mobile/image-interactive.jpg";
import "./Intro.css";

function Intro() {
    return (
        <div className="intro">
            <div className="intropic">
                <img id="intropic" src={intropic} />
            </div>
            <div className="introTxt">
                <h1>THE LEADER IN <br /> INTERAXTIVE VR</h1>
                <p>Founded in 2011, Loopstudios has been
                    producing world-class virtual reality
                    projects for some of the best companies
                    around the globe. Our award-winning
                    creations have transformed businesses
                    through digital experiences that bing to
                    their brand</p>
            </div>
        </div>
    );
}

export default Intro;
