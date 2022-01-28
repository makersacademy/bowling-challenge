class Scorecard {
  constructor(scores) {
    this.scores = scores;
  }

  getScore() {
    let totalScore = 0;
    let rollNumber = 0;
    while(rollNumber < 20) {
      if(this.scores[rollNumber] + this.scores[rollNumber + 1] === 10) {
        totalScore += this.scores[rollNumber] + this.scores[rollNumber + 1] + this.scores[rollNumber + 2];
      } else {
        totalScore += this.scores[rollNumber] + this.scores[rollNumber + 1]
      }
      rollNumber += 2
    }
    return totalScore;
  }
}

module.exports = Scorecard;

// const boringGame = new Scorecard([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5])
// console.log(boringGame.getScore());