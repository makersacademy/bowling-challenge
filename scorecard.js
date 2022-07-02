const ScoreCalculator = require('./ScoreCalculator');

class Scorecard {
  constructor(scores) {
    this.scores = scores;
    this.calculator = new ScoreCalculator();
  }

  giveFinalScore() {
    let totalScore = this.calculator.calculateTotal(this.scores);
    if (this.calculator.isGutterGame()) {
      return "Gutter Game: 0 points";
    }
    if (this.calculator.isPerfectGame()) {
      return "Perfect Game: 300 points";
    }
    else {
      return `You scored ${totalScore} points`;
    }
  }
}



module.exports = Scorecard;