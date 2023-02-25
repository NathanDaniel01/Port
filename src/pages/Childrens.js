import React from "react";
import "../App.css"
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
function Childrens() {
  return (
   <div>
        <h2 class = 'header1'>Childrens</h2>
        <h2 class = 'header2'>Book</h2>
        <p>
            Create an illustration using watercolor and dip pen that mimics the style of a children's book. The illustration should showcase your full mastery of these media and your ability to create a piece that is visually appealing and tells a story.
            Children.The illustration should be a spread over a 17" x 11" size page. It needed to show a 1 to 1 coppy and use a combination of watercolor and dip pen to bring the book to life.  
            The illustration should not diveate from the original,with no added lines or colors. It should line up and follow the style of the original illistrator.
            The project waas completed within 3-4 weeks, with the opportunity for revisions if necessary.
        </p>
        lets do the slide thing on two images to show how close i was to the original
        <div class="imgFlex">
            <div  class="contain">
                <img src="./Imgs/Childrens/Childrens1.jpg" alt=""class="image" style={{width:'100%'}}/>
            </div>
            <div  class="contain">
                <img src="./Imgs/Detail_9.jpg" alt=""class="image" style={{width:'100%'}}/>
            </div>
            <div  class="contain">
                <img src="./Imgs/six_pack_2.jpg" alt=""class="image" style={{width:'100%'}}/>
            </div>
        </div>
        <div class="imgFlex">
            <div  class="contain">
            <img src="./Imgs/six_pack_3.jpg" alt=""class="image" style={{width:'100%'}}/>
            </div>
            <div  class="contain">
                <img src="./Imgs/Detail_5.jpg" alt=""class="image" style={{width:'100%'}}/>
            </div>
            <div  class="contain">
                <img src="./Imgs/Detail_8.jpg" alt=""class="image" style={{width:'100%'}}/>
            </div>
        </div>
        <div class="imgFlex">
            <div  class="contain">
                <img src="./Imgs/Detail_9.jpg" alt=""class="image" style={{width:'100%'}}/>
            </div>
            <div  class="contain">
            <img src="./Imgs/Detail_7.jpg" alt=""class="image" style={{width:'100%'}}/>
            </div>
            <div  class="contain">
                <img src="./Imgs/Detail_4.jpg" alt=""class="image" style={{width:'100%'}}/>
            </div>
        </div>
    </div>
  );
}

export default Childrens;