const scoreCalculator = (rolls) => {
  let score = 0
  for (let index = 0; index < rolls.length; index++) {
    const roll = rolls[index];
    score += roll;
  }
  return score;
}

module.exports = scoreCalculator;