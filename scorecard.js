class Scorecard {
  constructor() {
    this.score = 0;
  }

  calculateScore() {
    return this.score;
  }

  addFrame(num1, num2) {
    this.score += num1 + num2;
  }
}


module.exports = Scorecard;