import Frame from './Frame'
import '../styles/ScoreBoard.css'

const ScoreBoard = ({ scores, handleCurrentFrame }) => {
  const frames = [];
  let frameIndex = 0;
  let rollIndex = 0;
  let totalScore = 0;

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

    if (frame.firstRoll ) {}

    frames.push(frame);
    frameIndex += 1;
    totalScore += frame.score;
  }

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

  return (
    <div className='info-container'>
      {frames.map((frame, index) => (
        <div key={index}>
          <Frame frame={frame}/>
        </div>
      ))}
      {totalScore || totalScore === 0 ? <span className='total-score'>Total Score: {totalScore}</span> : null}
    </div>
  );
}

export default ScoreBoard;
