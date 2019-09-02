function scoreCalculator(frames) {
  let totalScore = 0

  frames.forEach((frame, i) => {
    const score = frame.rollOneScore + frame.rollTwoScore
    if (frame.rollOneScore === 10) {
      totalScore += 10
        + frames[i + 1].rollOneScore
        + frames[i + 1].rollTwoScore;
    } else if (score === 10) {
      totalScore += 10 + frames[i + 1].rollOneScore;
    } else {
      totalScore += score;
    }
  });

  return totalScore;

}
module.exports = scoreCalculator


