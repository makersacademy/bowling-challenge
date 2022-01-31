class ScoreCard {
  constructor() {
    this.scores = [];
    this.totalScore = 0;
  }

  frameResult(array) {
    this.scores.push(array);
  };

  printFrameScores() {
    this.scores.map((score, index) => {
      console.log(`Frame: ${index + 1}, First roll: ${score[0]}, Second roll: ${score[1]}, Bonus: ${score[2]}`);
    });
  }

  printTotalScore() {
    if (this.scores[this.scores.length -1][2] != 'none' && this.scores.length < 12) {
      console.log("Newest scores pending bonus calculations")
    } else {
      this.totalScore = 0
      this.scores.map((score, index) => {
        if (index >= 10) {
          return;
        } else {
          this.totalScore += (score[0] + score[1]);
          if (score[2] != 'none') {
            this.bonusCalc(index);
          };
        };
      });
    console.log(`Total: ${this.totalScore}`);
    }
  };

  bonusCalc(index) {
    if (this.scores[index][2] === 'strike') {
      this.totalScore += (this.scores[index + 1][0] + this.scores[index + 1][1]);
      if (this.scores[index + 1][0] == 10) {
        this.totalScore += this.scores[index + 2][0];
      }
    } else if (this.scores[index][2] == 'spare') {
      this.totalScore += this.scores[index + 1][0]
    }
  }

  printScores() {
    console.log(this.printFrameScores());
    console.log(this.printTotalScore());
  }

}

module.exports = ScoreCard;