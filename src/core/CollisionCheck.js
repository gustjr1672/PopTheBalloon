const CollisionCheck = (updatedPosition,bubblePosition, setBubbleFrame) =>{
  if (bubblePosition.y < updatedPosition.y + 40 
      && updatedPosition.x -15 <= bubblePosition.x
      && bubblePosition.x <= updatedPosition.x + 15 ){
          const popBubble = setInterval(()=>{
            setBubbleFrame(prev => [
              prev[0] + 1,
              prev[0] === 3 ? prev[1] + 1 : prev[1]
            ]);
            console.log(1);
          },16);
          return popBubble; 
    }
}

export default CollisionCheck;