const scoreCalculator = (rolls) => {
  let score = 0
  for (let frame = 0; frame < 10; frame++) {
    const frameIndex = frame * 2;
    const firstRoll = rolls[frameIndex]
    const secondRoll = rolls[frameIndex + 1]
    score += firstRoll + secondRoll;
    if(firstRoll + secondRoll === 10) {

      score += rolls[frameIndex + 2];
    }
  }
  return score;
}

module.exports = scoreCalculator;