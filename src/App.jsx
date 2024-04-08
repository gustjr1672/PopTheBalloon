import './App.css'
import React, { useState } from 'react';
import StartPage from './pages/StartPage';
import { DarkModeContext } from './contexts/DarkModeContext';
import { ScoreContext } from './contexts/ScoreContext';
import GamePage from './pages/GamePage'
import {Routes, Route} from 'react-router-dom';
function App() {
  const [isDark,setDark] = useState(true);
  const [score, setScore] = useState(0);
  return (
    <DarkModeContext.Provider  value={{isDark,setDark}} >
      <ScoreContext.Provider value={{score, setScore}}>
        <div className="App" style={{backgroundColor:isDark?'#212121':'#ffffff', height: '100vh'}}>
          <Routes>
            <Route path="/" element={<StartPage/>}/>
            <Route path="/game" element={<GamePage/>}/>
          </Routes>
        </div>
      </ScoreContext.Provider>
    </DarkModeContext.Provider>
  );
}

export default App;