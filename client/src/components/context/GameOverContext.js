import {createContext, useState} from 'react';

const GameOverContext = createContext();

const GameOverProvider = (props) => {
  const [isGameOver, setIsGameOver] = useState(false)

  const handleGameOver = () => {
    setIsGameOver(true);
  };

  return <GameOverContext.Provider value={{isGameOver, handleGameOver}}>{props.children}</GameOverContext.Provider>;
}

export {GameOverProvider, GameOverContext};
