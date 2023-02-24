const ScoreBoard = ({ scores }) => {
  const frames = [];
  let frameIndex = 0;
  let rollIndex = 0;
  let totalScore = 0;

  while (frameIndex < 9) {
    const frame = {};
    const roll1 = scores[rollIndex];
    const roll2 = scores[rollIndex + 1];

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

  while (frameIndex === 9) {
    const frame = {};
    const roll1 = scores[rollIndex];
    const roll2 = scores[rollIndex + 1];
    frame.score = 0

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
    <div>
      {frames.map((frame, index) => (
        <div key={index}>
          <span>Frame {index + 1}: </span>
          <span>First roll: {frame.firstRoll} </span>
          <span>Second roll: {frame.secondRoll === null ? "X" : frame.secondRoll} </span>
          {frame.thirdRoll ? <span>Third roll: {frame.thirdRoll === null ? "X" : frame.thirdRoll} </span> : null}
          <span>Score: {frame.score}</span>
        </div>
      ))}
      <span>Total Score: {totalScore}</span>
    </div>
  );
}

export default ScoreBoard;
