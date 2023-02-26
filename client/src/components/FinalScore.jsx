import React, { useContext } from 'react';
import { ScoreContext } from './context/ScoreContext';
import '../styles/FinalScore.css'
import { useNavigate } from 'react-router-dom';

function FinalScore() {
  const { finalScore } = useContext(ScoreContext)
  const navigate = useNavigate();

  // Function to handle reset button click
  const handleButtonClick = () => {
    navigate('/');                // Navigate to the homepage
    window.location.reload();     // Reload the page to reset the game
  };

  return (
    <div className='final-score-container'>

      {/* Display a congratulatory message */}
      <h1 className='final-score-title'>Congratulations!</h1>

      {/* Display the final score */}
      <h3 className='final-score'>Your Final Score: {finalScore}</h3>

      {/* Render a button to reset the game */}
      <button className='final-score-button' onClick={handleButtonClick}>Reset</button>
    </div>
  );
}

export default FinalScore;                 