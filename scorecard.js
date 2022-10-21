const ScoreCalculator = require('./ScoreCalculator');

class Scorecard {
  constructor(scores) {
    this.calculator = new ScoreCalculator(scores);
  }

  giveFinalScore() {
    let totalScore = this.calculator.giveTotal();
    if (totalScore == 0) {
      return "Gutter Game: 0 points";
    }
    if (totalScore == 300) {
      return "Perfect Game: 300 points";
    }
    else {
      return `You scored ${totalScore} points`;
    }
  }
}

module.exports = Scorecard;
