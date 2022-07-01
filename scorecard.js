class Scorecard {
  constructor(scores) {
    this.scores = scores;
    // console.log(this.scores);
  }
  giveFinalScore() {
    // console.log(this.scores);
    let totalScore = this.scores.reduce((total, amount) => total += amount);
    // console.log([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] === [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    // console.log([1] === [1]);
    // console.log(0 === 0);
    if (totalScore === 0) {
      return "Gutter Game: 0 points";
    }
    else {
      return "Perfect Game: 300 points";
    }
  }

}

module.exports = Scorecard;