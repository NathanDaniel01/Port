import React from "react";
import "../App.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
function Police() {
  return (
   <div>
        <h2 class = 'header1'>Police</h2>
        <p>
            Some animated Bull shit that looks cool
        </p>
        <div class="imgFlex">
            <div  class="contain">
                <img src="./Imgs/six_pack_1.jpg" alt=""class="image" style={{width:'100%'}}/>
                <div class="middle">
                    <Link class="titlesWhitetoRed" to={`/Raskog`}>Räskog</Link>
                </div>
            </div>
            <div  class="contain">
                <img src="./Imgs/Detail_9.jpg" alt=""class="image" style={{width:'100%'}}/>
                <div class="middle">
                    <Link class="titlesWhitetoRed" to={`/SixPack`}>6-pack</Link>
                </div>
            </div>
            <div  class="contain">
                <img src="./Imgs/six_pack_2.jpg" alt=""class="image" style={{width:'100%'}}/>
                <div class="middle">
                    <Link class="titlesWhitetoRed" to={`/Childrens`}>Childrens</Link>
                </div>
            </div>
        </div>
        <div class="imgFlex">
            <div  class="contain">
            <img src="./Imgs/six_pack_3.jpg" alt=""class="image" style={{width:'100%'}}/>
                <div class="middle">
                    <Link class="titlesWhitetoRed" to={`/Raskog`}>T-Shirt</Link>
                </div>
            </div>
            <div  class="contain">
                <img src="./Imgs/Detail_5.jpg" alt=""class="image" style={{width:'100%'}}/>
                <div class="middle">
                    <Link class="titlesWhitetoRed" to={`/SixPack`}>Icons</Link>
                </div>
            </div>
            <div  class="contain">
                <img src="./Imgs/Detail_8.jpg" alt=""class="image" style={{width:'100%'}}/>
                <div class="middle">
                    <Link class="titlesWhitetoRed" to={`/Childrens`}>Cluster</Link>
                </div>
            </div>
        </div>
        <div class="imgFlex">
            <div  class="contain">
                <img src="./Imgs/Detail_9.jpg" alt=""class="image" style={{width:'100%'}}/>
                <div class="middle">
                    <Link class="titlesWhitetoRed" to={`/Raskog`}>Hello</Link>
                </div>
            </div>
            <div  class="contain">
            <img src="./Imgs/Detail_7.jpg" alt=""class="image" style={{width:'100%'}}/>
                <div class="middle">
                    <Link class="titlesWhitetoRed" to={`/SixPack`}>Interview</Link>
                </div>
            </div>
            <div  class="contain">
                <img src="./Imgs/Detail_4.jpg" alt=""class="image" style={{width:'100%'}}/>
                <div class="middle">
                    <Link class="titlesWhitetoRed" to={`/Childrens`}>Police</Link>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Police;