import ScoreBoard from './ScoreBoard';
import React, { useState } from 'react';

function Game() {
  // const scores  = [10,10,10,10,10,10,10,10,10,10,10,10];
  // const scores  = [10,2,3];
  const [scores, setScores] = useState([])


  return (
    <div>
      <ScoreBoard scores={scores}/>
    </div>
  );
}

export default Game;                 