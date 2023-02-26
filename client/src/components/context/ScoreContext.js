import {createContext, useState} from 'react';

const ScoreContext = createContext();

const ScoreProvider = (props) => {
  const [finalScore, setFinalScore] = useState(0)
  const [currentFrameScore, setCurrentFrameScore] = useState(0)

  const handleFinalScore = (finalScore) => {
    setFinalScore(finalScore);
  };

  const handleCurrentFrameScore = (roll1,roll2) => {
    setCurrentFrameScore(() => {
      if (roll1 === undefined) {roll1 = 0} 
      if (roll2 === undefined) {roll2 = 0}
      return roll1+roll2
    });
  };

  return <ScoreContext.Provider value={{finalScore, handleFinalScore, currentFrameScore, handleCurrentFrameScore, }}>{props.children}</ScoreContext.Provider>;
}

export {ScoreProvider, ScoreContext};
