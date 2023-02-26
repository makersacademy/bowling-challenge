import ScoreBoard from './ScoreBoard';
import React, { useContext, useState } from 'react';
import '../styles/Game.css'
import { ScoreContext } from './context/ScoreContext';

function Game() {
  // Initialize state for the array of scores entered by the user
  const [scores, setScores] = useState([])

  // Get the number of pins left in the current frame from the context
  const { pinsLeft } = useContext(ScoreContext)

  // Function to handle the form submission when the user enters a new score
  const handleSubmit = (event) => {
    event.preventDefault();     

    // Get the new score entered by the user and add it to the array of scores
    const newScore = parseInt(event.target.score.value, 10);
    setScores((prevScores) => [...prevScores, newScore]);
    
    // Reset the form
    event.target.reset();
  }

  // Render the UI
  return (
    <div className="score-form-container">
      <h1 className='main-title'>Bowling Score Tracker</h1>
      <ScoreBoard scores={scores} />
      <form onSubmit={handleSubmit} className="score-form">
        <div className='score-label-div'>
          <label className="score-label">
            Your Next Score:
            <input type="number" name="score" min="0" max={pinsLeft} className="score-input" required/>
          </label>
        </div>
        <button type="submit" className="add-score-btn">Add Score</button>
      </form>
    </div>
  );
}

export default Game;                 