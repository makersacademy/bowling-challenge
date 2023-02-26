import ScoreBoard from './ScoreBoard';
import React, { useState } from 'react';
import '../styles/Game.css'
import { ScoreContext } from './context/ScoreContext';

function Game() {
  const [scores, setScores] = useState([])
  const { currentFrameScore } = useState()

  const handleSubmit = (event) => {
    event.preventDefault();
    const newScore = parseInt(event.target.score.value, 10);
    setScores((prevScores) => [...prevScores, newScore]);
    event.target.reset();
  }

  return (
    <div className="score-form-container">
      <h1 className='main-title'>Bowling Score Tracker</h1>
      <ScoreBoard scores={scores} />
      <form onSubmit={handleSubmit} className="score-form">
        <div className='score-label-div'>
          <label className="score-label">
            Your Next Score:
            <input type="number" name="score" min="0" max={10} className="score-input" required/>
          </label>
        </div>
        <button type="submit" className="add-score-btn">Add Score</button>
      </form>
    </div>
  );
}

export default Game;                 