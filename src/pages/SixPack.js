import React from "react";
import "../App.css"
import "../sub.css"
import {Link} from "react-router-dom";
import Footer from '../components/Footer';
import Subnav from "../components/subnav";
function SixPack() {
  return (
   <div class = "mainBG">
    <Subnav/>
        <h1 class = "header center">6 Pack</h1>
                <p class = 'SubP center'>
                The goal of this project was to breathe new life into Samuel Smith Brewery's 6-pack beer 
                packaging by embracing a Victorian-style aesthetic that pays homage to the brewery's heritage. 
                The current design, which is outdated and lacking in sophistication, required a much-needed revitalization.
                </p>
        <div class="imgFlex">
            <img src="./Imgs/SixPack/six_pack_1.jpg" alt=""class="image" style={{width:'33%'}}/>
            <img src="./Imgs/SixPack/Detail_9.jpg" alt=""class="image" style={{width:'33%'}}/>
            <img src="./Imgs/SixPack/six_pack_2.jpg" alt=""class="image" style={{width:'33%'}}/>
        </div>
        <div class="imgFlex">
            <img src="./Imgs/SixPack/six_pack_3.jpg" alt=""class="image" style={{width:'33%'}}/>
            <img src="./Imgs/SixPack/Detail_5.jpg" alt=""class="image" style={{width:'33%'}}/>
            <img src="./Imgs/SixPack/Detail_8.jpg" alt=""class="image" style={{width:'33%'}}/>
        </div>
        <div class="imgFlex">
            <img src="./Imgs/SixPack/Detail_9.jpg" alt=""class="image" style={{width:'33%'}}/>
            <img src="./Imgs/SixPack/Detail_7.jpg" alt=""class="image" style={{width:'33%'}}/>
            <img src="./Imgs/SixPack/Detail_4.jpg" alt=""class="image" style={{width:'33%'}}/>
        </div>
        <Footer/>
    </div>
  );
}

export default SixPack;