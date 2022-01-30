class Bowling {
  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(pins);
  }

  isSpare(i) {
    return this.rolls[i] + this.rolls[i+1] === 10;
  }

  isStrike(i) {
    return this.rolls[i] === 10;
  }

  get score() {
    let gameScore = 0, i = 0;
    for (let frame = 0; frame < 10; frame++) {
      console.log(gameScore);
      if (this.isStrike(i)) {
        gameScore += 10 + this.rolls[i+1] + this.rolls[i+2];
      } else if (this.isSpare(i)) {
        gameScore += 10 + this.rolls[i+2];
        i++;
      } else {
        gameScore += this.rolls[i] + this.rolls[i+1];
        i++;
      }
      i++;
    } 
    return gameScore;
  }

}

module.exports = Bowling;