import React, { useRef, useEffect } from 'react';

function MyCanvas() {
  const canvasRef = useRef(null);

  const draw = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    // drawing code goes here
  }

  useEffect(() => {
    draw();
  });

  return (
    <canvas ref={canvasRef} />
  );
}
export default MyCanvas;