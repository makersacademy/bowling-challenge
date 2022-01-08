
class BowlingGame {

  constructor() {
    this.rolls = []
  }
  
  roll(pins) {
    this.rolls.push(pins);
  }

  score() {
    let runningScore = 0;
    let index = 0;
    for (let i = 0; i < 10; i++) {
      if (this.rolls[index] === 10) {
        runningScore += 10 + this.rolls[index + 1] + this.rolls[index + 2];
        index++;
      } else if (this.rolls[index] + this.rolls[index + 1] === 10){
        runningScore += 10 + this.rolls[index + 2];
        index += 2;
      } else {
        runningScore += this.rolls[index] + this.rolls[index + 1];
        index += 2;
      }
    }
    return runningScore
  }
}

module.exports = BowlingGame;
