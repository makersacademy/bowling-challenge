class ScoreCalculator {
  calculateTotal(scores) {
    this.total = scores.reduce((total, amount) => total += amount);
    return this.total;
  }

  isGutterGame(scores) {
    return this.total == 0;
  }

  isPerfectGame(scores) {
    return this.total == 120;
  }

  isStrike(frame) {

  }

  isSpare(frame) {

  }
}

module.exports = ScoreCalculator;