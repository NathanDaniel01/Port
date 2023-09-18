import { Parallax } from 'react-scroll-parallax';
import React from "react";
import "../App.css"

const ParallaxDemo = () => (
    <div class = "paralaxBox">
        
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
        <Parallax speed={40}
        class = "tree3"
        >
            <div>
            <img src="./SVG/trees_3.svg" alt="" />
            </div>
            <div class = "RedBG1"/>
            
        </Parallax>
        
        <div class = 'paralaxSpacer'/>
    </div>
);
export default ParallaxDemo;
