class BowlingGame {

  constructor() {
    // constructs with an empty array to store all rolls
    this.rolls = [];
  }

  roll(pins) {
    // pushes the number of pins for each roll into the rolls array
    this.rolls.push(pins);
  };

  score() {
    // returns 0 if score is called before any rolls are added
    if (this.rolls.length === 0) {
      return 0;
    };

    let totalScore = 0;
    let currentRollIndex = 0;
    // iterates through each frame and applies the appropriate logic
    for (let frame = 0 ; frame < 10 ; frame++) {
      if (this.isSpare(currentRollIndex)) {
        totalScore += this.spareBonus(currentRollIndex);
        currentRollIndex += 2;
      } else if (this.isStrike(currentRollIndex)) {
        totalScore += this.strikeBonus(currentRollIndex);
        currentRollIndex += 1;
      } else {
        totalScore += this.frameScore(currentRollIndex);
        currentRollIndex += 2;
      }
    }
    return totalScore;
  }

  frameScore(currentRollIndex) {
    return this.rolls[currentRollIndex] + this.rolls[currentRollIndex + 1];
  }

  isSpare(currentRollIndex) {
    return this.rolls[currentRollIndex] + this.rolls[currentRollIndex + 1] === 10;
  }

  spareBonus(currentRollIndex) {
    return 10 + this.rolls[currentRollIndex + 2];
  }

  isStrike(currentRollIndex) {
    return this.rolls[currentRollIndex] === 10;
  }

  strikeBonus(currentRollIndex) {
    return 10 + this.rolls[currentRollIndex + 1] + this.rolls[currentRollIndex + 2];
  }

};

module.exports = BowlingGame;