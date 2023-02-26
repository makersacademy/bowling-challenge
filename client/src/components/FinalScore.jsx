import React, { useContext } from 'react';
import { ScoreContext } from './context/ScoreContext';
import '../styles/FinalScore.css'
import { useNavigate } from 'react-router-dom';

function FinalScore() {
  const { finalScore } = useContext(ScoreContext)
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/');
    window.location.reload();
  };

  return (
    <div className='final-score-container'>
      <h1 className='final-score-title'>Congratulations!</h1>
      <h3 className='final-score'>Your Final Score: {finalScore}</h3>
      <button className='final-score-button' onClick={handleButtonClick}>Reset</button>
    </div>
  );
}

export default FinalScore;                 