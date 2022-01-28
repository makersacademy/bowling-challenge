class Scorecard {
  constructor(scores) {
    this.scores = scores;
  }

  getScore() {
    let totalScore = 0;
    let rollNumber = 0
    for(var i = 0; i < 10; i++) {
      if (this.scores[rollNumber] === 10) { 
        totalScore += 10 + this.scores[rollNumber + 1] + this.scores[rollNumber + 2];
        rollNumber++
      } else if (this.scores[rollNumber] + this.scores[rollNumber + 1] === 10) {
        totalScore += 10 + this.scores[rollNumber + 2];
        rollNumber += 2
      } else {
        totalScore += this.scores[rollNumber] + this.scores[rollNumber + 1];
        rollNumber += 2
      }
    }
    return totalScore;
  }
}

module.exports = Scorecard;