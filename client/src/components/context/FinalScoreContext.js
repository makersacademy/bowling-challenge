import {createContext, useState} from 'react';

const FinalScoreContext = createContext();

const FinalScoreProvider = (props) => {
  const [finalScore, setFinalScore] = useState(0)

  const handleFinalScore = (finalScore) => {
    setFinalScore(finalScore);
  };

  return <FinalScoreContext.Provider value={{finalScore, setFinalScore}}>{props.children}</FinalScoreContext.Provider>;
}

export {FinalScoreContext, FinalScoreContext};
