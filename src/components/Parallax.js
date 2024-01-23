import { Parallax } from 'react-scroll-parallax';
import React from "react";
import "../App.css"
import "../Styles/Parallax.css"

const ParallaxDemo = () => (
    <div class = "paralaxBox hide">
        
        <Parallax speed={25}
        class = "mountains1"
        >
            <div>
            <img src="./SVG/mountains_1.svg" alt="" />
            </div>
        </Parallax>
        <Parallax speed={15}
        class = "tree2"
        >
            
            <img src="./SVG/trees_2.svg" alt="" />

        </Parallax>
        <Parallax speed={65}
        class = "tree3"
        >
            <div>
            <img src="./SVG/trees_3.svg" alt="" />
            </div>
            <div class = "BG1"/>
            
        </Parallax>
        
        <div class = 'paralaxSpacer'/>
    </div>
);
export default ParallaxDemo;
