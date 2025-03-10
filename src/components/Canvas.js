import React, { useRef, useEffect } from 'react'

const Canvas = props => {
  
  const canvasRef = useRef(null)
  

  var partNum = 500;
  var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  //particle number - change it!
  


  
  
  
  var keysDown = {};
  window.addEventListener('keydown', function(e) {
      keysDown[e.keyCode] = true;
  });
  window.addEventListener('keyup', function(e) {
      delete keysDown[e.keyCode];
  });
  
  function between(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  var c = document.getElementById('c');
  var ctx = c.getContext('2d'); // BUG Trips here
  //context and id of canvas
  
  var w = window.innerWidth;
  var h = window.innerHeight;
  //width and height of canvas
  
  c.width = w;
  c.height = h;
  //setting the width and height for canvas
  
  var mouse = {
    x: w / 2, 
    y: h / 2
  };
  //mouse position
  
  document.addEventListener('mousemove', function(e){ 
      mouse.x = e.clientX || e.pageX; 
      mouse.y = e.clientY || e.pageY 
  }, false);
  //finding the mouse position
  
  var cursorRad = 25;
  var cursorOpacity = 1;
  var cursorTrue = false;
  var cursorMinDest = 100;
  
  document.addEventListener('mousedown', function(){ 
    cursorRad = 50;
    cursorOpacity = 0.2;
    cursorTrue = true;
    cursorMinDest = 200;
  }, false);
  // making implode
  
  document.addEventListener('mouseup', function(){ 
    cursorRad = 25;
    cursorOpacity = 1;
    cursorTrue = false;
    cursorMinDest = 100;
  }, false);
  // making implode
  
  var particles = [];
  for(var i = 0; i < partNum; i++) {
    particles.push(new particle);
  }
      
  //the particle function
  function particle() {
    this.x = Math.random() * c.width;
    this.y = Math.random() * c.height;
    this.letter = letters[Math.floor(Math.random() * letters.length)];
    
    //setting the mouse position to the particle x and y
    
    this.vx = 0;
    this.vy = 0;
    
    
    this.r = 1;
    //random radius
    
    this.color = '#fff';
    //only random colors of the variables
  }
  
  function draw() {
      ctx.requestAnimFrame(draw); //BUG Here
      // 
  
      ctx.fillStyle = 'rgba(52, 52, 53, 1)';
      ctx.fillRect(0, 0, c.width, c.height);
      
      ctx.beginPath();
        ctx.fillStyle = 'rgba(255, 255, 255, ' + cursorOpacity + ')';
        ctx.arc(mouse.x, mouse.y, cursorRad, Math.PI * 2, false);
        ctx.fill();
      
      for(var t = 0; t < particles.length; t++) {
        var p = particles[t];
        
        ctx.font = '48px sans-serif';
        ctx.fillStyle = p.color;
        ctx.fillText(p.letter, p.x, p.y);
    
      
      p.x+=p.vx;
      p.y+=p.vy;
      
      p.vx*=0.95;
      p.vy*=0.95;
      
      if(p.y < 0) {
        p.vy *= -1;
      }
    
      if(p.y > c.height) {
        p.vy *= -1;
      }
  
      if(p.x < 0) {
        p.vx *= -1;
      }
  
      if(p.x > c.width) {
        p.vx *= -1;
      }
      
  
      
      distance(mouse, p);
    }
  }
  
  function distance(p1, p2) {
      var dist,
          dx = p1.x - p2.x,
          dy = p1.y - p2.y;
      
      dist = Math.sqrt(dx*dx + dy*dy);
              
      // Draw the line when distance is smaller
      // then the minimum distance
    var minDist = cursorMinDest;
    
      if(dist <= minDist) {
          
          // Draw the line
          ctx.beginPath();
  
          
  
          var ax = dx,
              ay = dy;
      // Some acceleration for the partcles 
          // depending upon their distance
          if(cursorTrue) {
        p2.vx += ax/100;
            p2.vy += ay/100;
      } else {
        p2.vx -= ax/35;
            p2.vy -= ay/35;
      }
      }
  }

  useEffect(() => {
      
    // Update the document title using the browser API
    window.requestAnimFrame = (function(){
      return window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          function(callback){
              window.setTimeout(callback, 1000 / 60);
          };
    })();
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId
    
    //Our draw came here
    const render = () => {
      frameCount++
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  
  return <canvas ref={canvasRef} {...props}/>
}

export default Canvas