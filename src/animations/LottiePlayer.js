// LottiePlayer.js
import Lottie from "lottie-react";
import React from "react";

import("lottie-react")

// Dynamic Lottie animation component
const LottiePlayer = ({ animationFile, width = "100px", height = "100px", loop = true }) => {
    return (
        <div style={{ width, height }}>
            <Lottie animationData={animationFile} loop={loop} />
        </div>
    );
};

export default LottiePlayer;
