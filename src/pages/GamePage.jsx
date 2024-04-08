import React, { useContext, useState } from 'react';
import GameCanvas from '../view/GameCanvas'
import DarkModeBtn from '../components/DarkModeBtn';
import { DarkModeContext } from '../contexts/DarkModeContext';
import { ScoreContext } from '../contexts/ScoreContext';
import styled from 'styled-components';
function GamePage(){
  const [needleCnt, setNeedleCnt] = useState(3)
  
  const {isDark} = useContext(DarkModeContext);
  const {score} = useContext(ScoreContext);
  return (
    <>
      <DarkModeBtn/>
        <HWarp>
            <h4 style={{color:isDark?'white':'black'}} >Score:{score}</h4>
            <h4 style={{color:isDark?'white':'black'}}>남은 바늘 수: {needleCnt}</h4>
        </HWarp>
      <GameCanvas setNeedleCnt={setNeedleCnt}/>
    </>
  );
};

export default GamePage;

const HWarp = styled.div` 
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 180px;
`