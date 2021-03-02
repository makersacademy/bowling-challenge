class Frame {
  constructor() {
    this.rolls = [];
    this.totalScore = 0;
  }

  getTotalScore() {
    return this.totalScore;
  }

  getRolls() {
    return this.rolls;
  }

  inputRollScore(pins) {
    this.rolls.push(pins);
  }

  addScore(score) {
    this.totalScore += score;
  }

  pinsKnocked() {
    var sum = this.rolls.reduce(function(a,b) {
      return a + b;
    }, 0);
    return sum;
  }

  currentRollNumber() {
    return this.rolls.length + 1;
  }

  isStrike() {
    if (this.rolls[0] === 10) {
      return true;
    } else {
      return false;
    }
  }

  isSpare() {
    if (this.isStrike()) {
      return false;
    } else if (this.pinsKnocked() === 10) {
      return true;
    } else {
      return false;
    }
  }

  pointsForStrike() {
    if (this.rolls.length === 1) {
      return this.rolls[0];
    } else {
      return this.rolls[0] + this.rolls[1];
    }
  }

  pointsForSpare() {
    return this.rolls[0];
  }

}
