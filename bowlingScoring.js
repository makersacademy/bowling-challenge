class BowlingScoring {
  constructor(scorecard) {
    this.scorecard = scorecard;
    this.score = [];
    this.total = 0;
    this.frame = 0;
  }

  calculate() {
    let rounds = this.scorecard.length;

    while (rounds > 0) {
      this.score.push(this.scorecard[this.frame]);

      if (this.frame > 1 && this.scorecard[this.frame - 1][0] === 10 && this.scorecard[this.frame - 2][0] === 10) {
        this.score.push(this.scorecard[this.frame].slice(0, 2));
        this.score.push(this.scorecard[this.frame - 1]);
      }
      else if (this.frame > 0 && this.scorecard[this.frame - 1][0] === 10) {
        this.score.push(this.scorecard[this.frame].slice(0, 2));
      }
      else if (this.frame > 0 && this.scorecard[this.frame - 1][0] + this.scorecard[this.frame - 1][1] === 10) {
        this.spare();
      }

      this.frame += 1;
      rounds -= 1;
    }

   return this.totalScore();
  }

  spare() {
    this.score.push(this.scorecard[this.frame][0]);
  }

  totalScore() {
    this.score = this.score.flat();

    for (let i = 0; i < this.score.length; i++) {
        this.total += this.score[i];
    }

    return this.total;
  }

  getScore() {
    if (this.scorecard.length < 10) {
      return `Score so far: ${this.total}.`
    } else {
      return `Score from the last game: ${this.total}.`
    }
  }

}

module.exports = BowlingScoring;

