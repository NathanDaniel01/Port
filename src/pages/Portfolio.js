import React from "react";
import "../App.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import Footer from '../components/Footer';

function Portfolios() {
  return (
   <div>
        <h2 class = 'header1'>Portfolio</h2>
        <p>
        The puropse of this portfolio is to show off all my abilitys in one place. so... click around, check out the git hub, youtube, instagram
        or reach out and connect with me! I Gave my self 4-5 weeks to complete the portfolio and get it live. I pushed my self to make it not only responsive, but dynamic and 
        intresting to view. I wanted this to be clean in the file management up to the code its self. I have implemented a Read ME that breaks down the 
        enitraty of my portfolio and the projects inside.
        
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

export default Portfolios;