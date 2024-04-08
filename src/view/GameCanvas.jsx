// src/view/GameCanvas.jsx

import React, { useContext, useEffect, useRef, useState } from 'react';
import neddleImgPath from '../images/needle.png'
import bubbleImgPath from '../images/bubble.png'
import {RainbowBorderCanvas} from '../styles/GameCanvas.style'
import CollisionCheck from '../core/CollisionCheck'
import { ScoreContext } from '../contexts/ScoreContext';

function GameCanvas({setNeedleCnt}) {    

  const needleImg = new Image();
  needleImg.src = neddleImgPath;
  
  const bubbleImg = new Image();
  bubbleImg.src = bubbleImgPath;

  const canvasSize = {x:380, y:680};
  const canvasRef = useRef(null);

  const [needlePosition, setneedlePosition] = useState({x: 40, y: 10 });
  const [bubblePosition, setBubblePosition] = useState({x:150 , y: canvasSize.y - 100 });
  const [bubbleFrame, setBubbleFrame] = useState([0,0]);

  const [isDropping, setIsDroping] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [popBubbleInterval, setpopBubbleInterval] = useState(null);

  const {setScore} = useContext(ScoreContext);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(needleImg, needlePosition.x, needlePosition.y , 60, 60);
      if(bubbleFrame[0] < 8){
        context.drawImage(bubbleImg, 160*(bubbleFrame[0]%4), 184*(bubbleFrame[1]%2), 160 ,185, bubblePosition.x , bubblePosition.y , 43 , 53);
      }
      requestAnimationFrame(animate);
    };

    animate();
    
    if (needlePosition.y >= canvas.height) {
      if(popBubbleInterval){
        console.log(popBubbleInterval); 
        setScore((prev)=>prev+1);
      } 
      clearInterval(popBubbleInterval);
      clearInterval(intervalId);

      setneedlePosition({x:40,y:10});

      setNeedleCnt((prev)=>prev-1);

      setIsDroping(false);
    }

  }, [needlePosition, intervalId]);



  const handleCanvasClick = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    if(0 < e.clientY && e.clientY < rect.y + 50){
      setIsDroping(true);
      
      if(!isDropping){
        let popBubble;
        const dropNeedle = setInterval(() => {
          setneedlePosition((prevPosition) => {
            const updatedPosition = { ...prevPosition, y: prevPosition.y + 9 };
            if(!popBubble){
              popBubble = CollisionCheck(updatedPosition, bubblePosition, setBubbleFrame);
              setpopBubbleInterval(popBubble);
            }
            return updatedPosition;
          });

        }, 16);

        setIntervalId(dropNeedle); 
      }
    }
  };


  const handleMouseMove = (e) => {
    if (!isDropping ) {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - 30 ;

      if(0 < e.clientY && e.clientY < rect.y + 50){
        setneedlePosition({ x: mouseX, y: needlePosition.y });
      }
    }
  };

  const handleTouchMove = (e) => {
    if (!isDropping) {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const touchX = e.touches[0].clientX - rect.left - 30;

      if(0 < e.touches[0].clientY && e.touches[0].clientY < rect.y + 50){
        setneedlePosition({ x: touchX, y: needlePosition.y });
      }
    }
  };
  

  return (
    <RainbowBorderCanvas
      ref={canvasRef}
      width={canvasSize.x}
      height={canvasSize.y}
      style={{border: '1px solid transparent' , filter: blur('6px')}} 
      onClick={handleCanvasClick}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    />
  );
}

export default GameCanvas;


