class Scoreboard {
  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(pins);
  }

  score() {
    let totalScore = 0;
    let rollIndex = 0;

    for (let frame = 1; frame <= 10; frame++) {
      totalScore += this.frameScore(rollIndex);
      rollIndex += 2;
    }
    return totalScore;
  }

  frameScore(rollIndex) {
    return (
      parseInt(this.rolls[rollIndex]) + parseInt(this.rolls[rollIndex + 1])
    );
  }
}

module.exports = Scoreboard;
