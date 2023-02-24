import ScoreBoard from './ScoreBoard';
import React from 'react';

function Game() {
  const scores  = [1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1];
  // const scores  = [10,2,3];

  return (
    <div>
      <ScoreBoard scores={scores}/>
    </div>
  );
}

export default Game;