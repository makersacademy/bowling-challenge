import ScoreBoard from './ScoreBoard';
import React, { useState } from 'react';

function Game() {
  // const scores  = [10,10,10,10,10,10,10,10,10,10,10,10];
  // const scores  = [10,2,3];
  const [scores, setScores] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();
    const newScore = parseInt(event.target.score.value, 10);
    setScores((prevScores) => [...prevScores, newScore]);
    event.target.reset();
  }


  return (
    <div>
      <ScoreBoard scores={scores}/>
      <form onSubmit={handleSubmit}>
        <label>
          Your next score:
          <input type='number' name='score' min='0' max='10' required/>
        </label>
        <button type="submit">Add Score</button>
      </form>
    </div>
  );
}

export default Game;                 