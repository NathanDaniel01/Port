import React from "react";
import "../App.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import Footer from '../components/Footer';
function Cluster() {
  return (
   <div>
        <h2 class = 'header1'>Cluster</h2>
        <p>
            Some animated Bull shit that looks cool
        </p>
        <div class="imgFlex">
            <img src="./Imgs/Cluster1.jpg" alt=""class="image" style={{width:'35%'}}/>
            <div  class="contain2">
                <img src="./Imgs/Cluster2.jpg" alt=""class="image2" style={{width:'100%'}}/>
                <div class="middle2">
                    <Link class="titlesWhitetoRed" to={`/Childrens`}>Make this a Pop Up</Link>
                </div>
            </div>
            <img src="./Imgs/Cluster3.jpg" alt=""class="image" style={{width:'35%'}}/>
        </div>
        <Footer/>
    </div>
  );
}

export default Cluster;