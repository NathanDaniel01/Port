import React from "react";
import "../App.css"
import "../sub.css"
import "../AppMobile.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import Footer from '../components/Footer';
import Subnav from "../components/subnav";
function Cluster() {
  return (
    <div id="Top" class = "mainBG">
      <Subnav/>
     <h1 class = "header center">Cluster</h1>
      <p class = 'SubP center'>
      In this creative endeavor, I undertook the challenge of crafting distinct character clusters that artfully intertwined while maintaining individuality within three enchanting themes: Pidgins, Meerkats, and Gnomes. Employing the medium of watercolor, I brought to life these whimsical and harmonious ensembles, each exuding its unique charm while adhering to its respective theme. The project showcases my ability to seamlessly blend creativity, thematic consistency, and the expressive qualities of watercolor to deliver captivating character clusters.
      </p>
      <div  class="containSub">
        <img src="./Imgs/cluster/Cluster3.jpg" alt=""class="imagesSub" />                  
      </div>
      <div class="imgFlexSub">
        <div  class="containSub">
            <img src="./Imgs/cluster/Cluster6.jpg" alt=""class="imageSub" />                  
        </div>
        <div  class="containSub">
            <img src="./Imgs/cluster/Cluster7.jpg" alt=""class="imageSub" />                     
        </div>   
      </div>  
      <div  class="containSub">
        <img src="./Imgs/cluster/Cluster2.jpg" alt=""class="imagesSub" />                  
      </div>
      <div class="imgFlexSub">
        <div  class="containSub">
            <img src="./Imgs/cluster/Cluster5.jpg" alt=""class="imageSub" />                  
        </div>
        <div  class="containSub">
            <img src="./Imgs/cluster/Cluster4.jpg" alt=""class="imageSub" />                     
        </div>     
      </div>  
     <Footer style={{margin: "100px auto auto auto"}}/>
 </div>
   );
 }
export default Cluster;