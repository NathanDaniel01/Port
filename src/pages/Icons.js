import React from "react";
import "../App.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import Footer from '../components/Footer';
function Icons() {
  return (
   <div>
        <h2 class = 'header1'>Icons</h2>
        <p>
            Create 25 individual icons that represent different drinking vessels, using a style of thin lines with consistent thickness. The icons should follow a cohesive system and style to preserve the identity of each individual item, while also fitting in with a cohesive set.
            The icons should represent a range of drinking vessels, including both practical and ornate options. The theme for this assignment is drinking vessels, including recognized vessels for alcohol that vary in popularity and sanitation. These icons will primarily be used in a digital context on mobile or web platforms, such as on websites for liquor stores or bars as part of a digital menu.
            The icons should be created using thin lines with consistent thickness, in a style that allows for both simplistic and more detailed illustrations to coexist. The overall theme for the icons is drinking vessels, so the illustrations should be relevant to this theme.
            The icons will be used on websites for liquor stores and bars, and will be viewed by individuals looking for information about different drinks or glassware options.
            25 individual icons, in a format suitable for use on mobile and web platforms.
            The project was completed within 1-2 weeks, with the opportunity for revisions.
        </p>
        <div class="imgFlex">
            <img src="./Imgs/Icons/Icons2.jpg" alt=""class="image" style={{width:'100%'}}/>
            <img src="./Imgs/Icons/Icons3.jpg" alt=""class="image" style={{width:'100%'}}/>
            <img src="./Imgs/Icons/Icons4.jpg" alt=""class="image" style={{width:'100%'}}/>
        </div>
        <div class="imgFlex">
            <img src="./Imgs/Icons/Icons5.jpg" alt=""class="image" style={{width:'100%'}}/>
            <img src="./Imgs/Icons/Icons7.jpg" alt=""class="image" style={{width:'100%'}}/>
            <img src="./Imgs/Icons/Icons8.jpg" alt=""class="image" style={{width:'100%'}}/>
        </div>
        <Footer/>
    </div>
  );
}

export default Icons;