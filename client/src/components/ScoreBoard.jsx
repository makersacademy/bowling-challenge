import Frame from './Frame'
import '../styles/ScoreBoard.css'
import { GameOverContext } from './context/GameOverContext';
import { ScoreContext } from './context/ScoreContext';
import { useContext, useEffect } from 'react';

// Passing the scores as props
const ScoreBoard = ({ scores }) => {

  // Getting states & functions from various contexts
  const { handleGameOver } = useContext(GameOverContext);
  const { handleFinalScore, handlePinsLeft } = useContext(ScoreContext);

  // Creating variables for calculating frames and scores
  // eslint-disable-next-line
  const frames = [];
  let frameIndex = 0;
  let rollIndex = 0;
  let totalScore = 0;

  // Creating frames using the scores array
  while (frameIndex < 9) {
    const frame = {};
    const roll1 = scores[rollIndex];
    const roll2 = scores[rollIndex + 1];

    frame.frameIndex = frameIndex

    frame.firstRoll = roll1;

    if (roll1 === 10) { // Strike
      frame.secondRoll = null;
      rollIndex += 1;
      frame.score = 10 + scores[rollIndex] + scores[rollIndex + 1];
    } else {
      frame.secondRoll = roll2;
      rollIndex += 2;
      if (roll1 + roll2 === 10) { // Spare
        frame.score = 10 + scores[rollIndex];
      } else {
        frame.score = roll1 + roll2;
      }
    }

    frames.push(frame);
    frameIndex += 1;
    totalScore += frame.score;
  }

  // Creating the 10th frame separately
  while (frameIndex === 9) {
    const frame = {};
    const roll1 = scores[rollIndex];
    const roll2 = scores[rollIndex + 1];
    frame.score = 0;
    frame.frameIndex = frameIndex;
    frame.thirdRoll = undefined;

    if (roll1 === 10 || roll1 + roll2 === 10) {
      const roll3 = scores[rollIndex + 2];
      frame.thirdRoll = roll3;
      frame.score += roll3;
    }

    frame.firstRoll = roll1;
    frame.secondRoll = roll2;
    frame.score += roll1 + roll2;
    frameIndex += 1;
    frames.push(frame);
    totalScore += frame.score;
  }

  // Updating pinsLeft in ScoreContext by finding the frame with an incomplete second roll (aka the current frame)
  useEffect(() => {
    handlePinsLeft(
      frames.find(
        (frame) =>
          frame.firstRoll !== undefined &&
          frame.firstRoll !== 10 &&
          frame.secondRoll === undefined
      )
    ); 
  }, [frames, handlePinsLeft]);

  // Checking if the game is over and updating the final score in ScoreContext
  useEffect(() => {
      if (totalScore || totalScore === 0 ) {
        handleFinalScore(totalScore);
        handleGameOver();
      }
  }, [totalScore, handleFinalScore, handleGameOver]);

  // Rendering the frames in the ScoreBoard
  return (
    <div className='info-container'>
      {frames.map((frame, index) => (
        <div key={index}>
          <Frame frame={frame}/>
        </div>
      ))}
    </div>
  );
}

export default ScoreBoard;
