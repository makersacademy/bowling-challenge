import {createContext, useState} from 'react';

const GameOverContext = createContext();

// Defining a provider component for the GameOverContext
const GameOverProvider = (props) => {
  const [isGameOver, setIsGameOver] = useState(false)

  // Defining a function to set isGameOver to true when the game is over
  const handleGameOver = () => {
    setIsGameOver(true);
  };

    // Render the GameOverProvider component with the necessary values and children.
  return <GameOverContext.Provider value={{isGameOver, handleGameOver}}>{props.children}</GameOverContext.Provider>;
}

// // Exporting the provider and context objects for use in other components.
export {GameOverProvider, GameOverContext};
