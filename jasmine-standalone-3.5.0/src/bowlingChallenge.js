class BowlingGame {
  constructor() {
    this.runningScore = 0;
  }

  roll(pins) {
    this.runningScore += pins;
  }

  get score() {
    return this.runningScore;
  }
}

