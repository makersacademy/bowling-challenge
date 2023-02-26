import Game from './components/Game';
import FinalScore from './components/FinalScore';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { GameOverContext } from './components/context/GameOverContext';
import { ScoreProvider } from './components/context/ScoreContext';
import React, { useContext } from 'react';

import './styles/App.css'

function App() {
  // 'isGameOver' is used to switch to the FinalScore page when the game ends
  const { isGameOver } = useContext(GameOverContext)
  
  // Render App component
  return (
    <div className='app-container'>
      <Router>
        <ScoreProvider>
        <Routes>
            <Route exact path="/" element={isGameOver ? <Navigate to="/final-score"/> : <Game />} />
            <Route path="/final-score" element={<FinalScore />} />
        </Routes>
        </ScoreProvider>
      </Router>
    </div>
  );
}

export default App;