class Scorecard {
  constructor(scores) {
    this.scores = scores;
  }
  
  giveFinalScore() {
    let totalScore = this.scores.reduce((total, amount) => total += amount);
    if (totalScore === 0) {
      return "Gutter Game: 0 points";
    }
    else {
      return "Perfect Game: 300 points";
    }
  }

}

module.exports = Scorecard;