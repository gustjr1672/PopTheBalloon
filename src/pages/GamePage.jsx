import React, { useContext, useState } from 'react';
import GameCanvas from '../view/GameCanvas'
import DarkModeBtn from '../components/DarkModeBtn';
import { DarkModeContext } from '../contexts/DarkModeContext';

function GamePage(){
  const [needleCnt, setNeedleCnt] = useState(3)
  
  const {isDark} = useContext(DarkModeContext);
  return (
    <>
      <DarkModeBtn/>
      <h3 style={{color:isDark?'white':'black'}}>남은 바늘 수: {needleCnt}</h3>
      <GameCanvas setNeedleCnt={setNeedleCnt}/>
    </>
  );
};

export default GamePage;


