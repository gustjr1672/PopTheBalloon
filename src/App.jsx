import './App.css'
import React, { useState } from 'react';
import StartPage from './pages/StartPage';
import { DarkModeContext } from './contexts/DarkModeContext';

function App() {
  const [isDark,setDark] = useState(true);
  return (
    <DarkModeContext.Provider  value={{isDark,setDark}} >
      <div className="App" style={{backgroundColor:isDark?'#212121':'#ffffff'}}>
        <StartPage/>
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;