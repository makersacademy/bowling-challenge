import ScoreBoard from './ScoreBoard';
import React, { useState, useCallback } from 'react';
import '../styles/Game.css'

function Game() {
  const [scores, setScores] = useState([])
  const [currentFrame, setCurrentFrame] = useState([{frameIndex: 0, frameScore: 0}])
  // const [isGameOver, setIsGameOver] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    const newScore = parseInt(event.target.score.value, 10);
    setScores((prevScores) => [...prevScores, newScore]);
    event.target.reset();
  }

  // const handleCurrentFrame = useCallback((frameIndex, frameScore) => {
  //   setCurrentFrame({frameIndex, frameScore});
  // }, [currentFrame]);

  return (
    <div className="score-form-container">
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