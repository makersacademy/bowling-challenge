class ScoreCard {

  constructor() {
    this.rolls = [];
  }

  rollBall(pins) {
    this.rolls.push(pins);
  }

  totalScore() {
    let result = 0;
    let rollIndex = 0;

    for (let i = 0 ; i < 10 ; i++) {
      if (this.strike(rollIndex)) {
        result += this.strikeScore(rollIndex);
        rollIndex += 1;
      } else if (this.spare(rollIndex)) {
        result += this.spareScore(rollIndex);
        rollIndex += 2;
      } else {
        result += this.frameScore(rollIndex);
        rollIndex += 2;
      }
    }
    return result

  }

  strike(rollIndex) {
    return this.rolls[rollIndex] == 10;
  }

  spare(rollIndex) {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1] == 10;
  }

  strikeScore(rollIndex) {
    return 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
  }

  spareScore(rollIndex) {
    return 10 + this.rolls[rollIndex + 2];
  }

  frameScore(rollIndex) {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1];
  }

}

module.exports = ScoreCard;
