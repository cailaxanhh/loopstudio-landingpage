import React from "react";
import "./OurCreations.css";
import deepearth from "../../assets/mobile/image-deep-earth.jpg";
import nightarcade from "../../assets/mobile/image-night-arcade.jpg";
import soccerteam from "../../assets/mobile/image-soccer-team.jpg";
import thegrid from "../../assets/mobile/image-grid.jpg";
import fromabove from "../../assets/mobile/image-from-above.jpg";
import pocket from "../../assets/mobile/image-pocket-borealis.jpg";
import curiosity from "../../assets/mobile/image-curiosity.jpg";
import fisheye from "../../assets/mobile/image-fisheye.jpg";


function OurCreations() {
    return (
        <div className="creations">
            <h1>OUR CREATIONS</h1>
            <div className="flex-container">
                <div className="flex-items">
                    <img src={deepearth}></img>
                    <h2>DEEP EARTH</h2>
                </div>

                <div className="flex-items">
                    <img src={nightarcade}></img>
                    <h2>NIGHT ARCADE</h2>
                </div>

                <div className="flex-items">
                    <img src={soccerteam}></img>
                    <h2>SOCCER TEAM VR</h2>
                </div>

                <div className="flex-items">
                    <img src={thegrid}></img>
                    <h2>THE GRID</h2>
                </div>

                <div className="flex-items">
                    <img src={fromabove}></img>
                    <h2>FROM UP ABOVE VR</h2>
                </div>

                <div className="flex-items">
                    <img src={pocket}></img>
                    <h2>POCKET BOREALIS</h2>
                </div>

                <div className="flex-items">
                    <img src={curiosity}></img>
                    <h2>THE CURIOSITY</h2>
                </div>

                <div className="flex-items">
                    <img src={fisheye}></img>
                    <h2>MAKE IT FISHEYE</h2>
                </div>
            </div>
            <button id="seeall" type="button">SEE ALL</button>
        </div>
    );
}

export default OurCreations;