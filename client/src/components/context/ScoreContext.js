import {createContext, useState} from 'react';

// Create a new context for anything score related (total score & pins left in the current frame)
const ScoreContext = createContext();

// Define a new provider component for the Score context.
const ScoreProvider = (props) => {
  const [finalScore, setFinalScore] = useState(0)
  const [pinsLeft, setPinsLeft] = useState(0)

  // Define a function to update the final score.
  const handleFinalScore = (finalScore) => {
    setFinalScore(finalScore);
  };

  // Define a function to update the number of pins left based on the current frame.
  const handlePinsLeft = (currentFrame) => {
    if (currentFrame === undefined) {setPinsLeft(10)}
    else {setPinsLeft(10-currentFrame.firstRoll)}
  };

  // Render the ScoreProvider component with the necessary values and children.
  return <ScoreContext.Provider value={{finalScore, handleFinalScore, pinsLeft, handlePinsLeft }}>{props.children}</ScoreContext.Provider>;
}

export {ScoreProvider, ScoreContext};
