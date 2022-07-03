const ScoreCalculator = require('./ScoreCalculator');

class Scorecard {
  constructor(scores) {
    this.scores = scores;
    this.calculator = new ScoreCalculator();
  }

  giveFinalScore() {
    this.calculator.addBonus(this.scores);
    let totalScore = this.calculator.giveTotal(this.scores);
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
