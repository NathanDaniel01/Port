import React from "react";
import "../App.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import Footer from '../components/Footer';

function Rant() {
  return (
   <div class = "mainBG">
        <h2 class = 'header1'>Rant</h2>
        <p>
        The letterpress assignment,Rant, focused on the issue of overcrowding on trails. 
        The design utilized a combination of wood type and vinyl to create a visually striking and 
        impactful piece that made people think. The wood type was used to create bold and attention-grabbing headlines, 
        while the vinyl was used to add texture and depth to the design. The overall goal of the 
        piece was to raise awareness about the negative effects of overcrowding on trails and encourage 
        people to take steps to reduce their impact.
        </p>
        <div class="imgFlex">
            <img src="./Imgs/six_pack_1.jpg" alt=""class="image" style={{width:'100%'}}/>
            <img src="./Imgs/Detail_9.jpg" alt=""class="image" style={{width:'100%'}}/>
            <img src="./Imgs/six_pack_2.jpg" alt=""class="image" style={{width:'100%'}}/>
        </div>
        <div class="imgFlex">
            <img src="./Imgs/six_pack_3.jpg" alt=""class="image" style={{width:'100%'}}/>
            <img src="./Imgs/Detail_5.jpg" alt=""class="image" style={{width:'100%'}}/>
            <img src="./Imgs/Detail_8.jpg" alt=""class="image" style={{width:'100%'}}/>
        </div>
        <div class="imgFlex">
            <img src="./Imgs/Detail_9.jpg" alt=""class="image" style={{width:'100%'}}/>
            <img src="./Imgs/Detail_7.jpg" alt=""class="image" style={{width:'100%'}}/>
            <img src="./Imgs/Detail_4.jpg" alt=""class="image" style={{width:'100%'}}/>
        </div>
        <Footer/>
    </div>
  );
}

export default Rant;