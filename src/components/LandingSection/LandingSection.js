import React from "react";
import './LandingSection.css';
import ReactCanvasTxt from "react-canvas-txt";

function LandingSection() {
    return (
        <div className="landing">
            <canvas id="mycanvas" />
            <h1 id="heading">IMMERSIVE EXPERIENCES THAT DELIVER</h1>
        </div>
    );
}

export default LandingSection;