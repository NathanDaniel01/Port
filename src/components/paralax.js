import { Parallax } from 'react-scroll-parallax';
import React from "react";
import "../App.css"

const ParallaxDemo = () => (
    <div>
        
        <Parallax speed={30}
        class = "mountains1"
        >
            <div>
            <img src="./SVG/mountains_1.svg" alt="" />
            </div>
        </Parallax>
        <Parallax speed={5}
        class = "hills"
        >
            <div>
            <img src="./SVG/hills.svg" alt="" />
            </div>
        </Parallax>
        <Parallax speed={2}
        class = "mountains2"
        >
            <div>
            <img src="./SVG/mountains_2.svg" alt="" />
            </div>
        </Parallax>
        <Parallax speed={7}
        class = "mountains3"
        >
            <div>
            <img src="./SVG/mountains_3.svg" alt="" />
            </div>
        </Parallax>
        <Parallax speed={15}
        class = "tree1"
        >
            <div>
            <img src="./SVG/trees_1.svg" alt="" />
            </div>
        </Parallax>
        <Parallax speed={4}
        class = "tree2"
        >
            
            <img src="./SVG/trees_2.svg" alt="" />

        </Parallax>
        <Parallax speed={10}
        class = "tree3"
        >
            <div>
            <img src="./SVG/trees_3.svg" alt="" />
            </div>
        </Parallax>
    </div>
);
export default ParallaxDemo;
