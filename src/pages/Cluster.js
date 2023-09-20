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
             Raskog's objective was to create a visually compelling instruction manual for assembling a mechanical device, using only illustrations and symbols to convey information.
              The scope manual will include illustrations for each step of the assembly process, as well as symbols and graphics to represent different tools and components. It covers all necessary information for a complete and successful assembly.
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