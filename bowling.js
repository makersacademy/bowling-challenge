class Bowling {
  constructor() {
    this.currentScore = 0;
  }
  roll(pins) {
    this.currentScore += pins;
  }

  get score() {
    return this.currentScore;
  }
}

module.exports = Bowling;