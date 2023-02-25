import Game from './components/Game';
import FinalScore from './components/FinalScore';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { GameOverContext } from './components/context/GameOverContext';
import React, { useContext } from 'react';

import './styles/App.css'

function App() {
  const { isGameOver } = useContext(GameOverContext)
  
  return (
    <div className='app-container'>
      <Router>
        <Routes>
            <Route exact path="/" element={isGameOver ? <Navigate to="/final-score"/> : <Game />} />
            <Route path="/final-score" element={<FinalScore />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;