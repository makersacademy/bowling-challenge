import {createContext, useState} from 'react';

const ScoreContext = createContext();

const ScoreProvider = (props) => {
  const [finalScore, setFinalScore] = useState(0)
  const [pinsLeft, setPinsLeft] = useState(0)

  const handleFinalScore = (finalScore) => {
    setFinalScore(finalScore);
  };

  const handlePinsLeft = (currentFrame) => {
    if (currentFrame === undefined) {setPinsLeft(10)}
    else {setPinsLeft(10-currentFrame.firstRoll)}
  };

  return <ScoreContext.Provider value={{finalScore, handleFinalScore, pinsLeft, handlePinsLeft, }}>{props.children}</ScoreContext.Provider>;
}

export {ScoreProvider, ScoreContext};
