class Roll {
  constructor(score) {
    this.score = score;
  }

  isStrike() {
    return this.score == 10;
  }

  score() {
    return this.score;
  }
}
