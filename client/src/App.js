import Game from './components/Game';
import FinalScore from './components/FinalScore';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GameOverContext from './components/context/GameOverContext';
import { useState } from 'react';

import './styles/App.css'

function App() {
  const [isGameOver, setIsGameOver] = useState(false)
  
  return (
    <div className='app-container'>
      <Router>
        <Routes>
          <GameOverContext.Provider value={{isGameOver,setIsGameOver}}>
            <Route exact path="/" element={<Game />} />
            <Route path="/final-score" element={<FinalScore />} />
          </GameOverContext.Provider>
        </Routes>
      </Router>
    </div>
  );
}

export default App;