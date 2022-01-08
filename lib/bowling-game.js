class BowlingGame {

  constructor() {
    this.rolls = [];
  }
  
  roll(pins) {
    this.rolls.push(pins);
  }

  score() {
    let runningScore = 0;
    this.index = 0;
    for (let i = 0; i < 10; i++) {
      if (this.isStrike()) {
        runningScore += this.getStrikeScore();
        this.index++;
      } else if (this.isSpare()){
        runningScore += this.getSpareScore();
        this.index += 2;
      } else {
        runningScore += this.getNormalScore();
        this.index += 2;
      }
    }
    return runningScore;
  }

  isStrike () {
    return this.rolls[this.index] === 10;
  }
  
  getStrikeScore () {
    return 10 + this.rolls[this.index + 1] + this.rolls[this.index + 2];
  }

  isSpare () {
    return this.rolls[this.index] + this.rolls[this.index + 1] === 10;
  }

  getSpareScore () {
    return 10 + this.rolls[this.index + 2];
  }

  getNormalScore () {
    return this.rolls[this.index] + this.rolls[this.index + 1];
  }
}

module.exports = BowlingGame;
