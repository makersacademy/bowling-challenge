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

  get score() {
    let gameScore = 0, i = 0, frame = 1;
    while(frame <= 10) {
      gameScore += this.rolls[i] + this.rolls[i+1];
      if(this.isSpare(i)) {
        gameScore += this.rolls[i+2];
        i++;
        frame++;
      }
      i++;
      frame++;
    }
    return gameScore;
  }

}

module.exports = Bowling;