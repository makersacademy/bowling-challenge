class BowlingScoring {
  constructor(scorecard) {
    this.scorecard = scorecard;
    this.score = [];
    this.total = 0;
  }

  calculate() {
    let rounds = this.scorecard.length;
    let frame = 0;

    while (rounds > 0) {
      this.score.push(this.scorecard[frame]);

      if (frame > 1 && this.scorecard[frame - 1][0] === 10 && this.scorecard[frame - 2][0] === 10) {
        this.score.push(this.scorecard[frame].slice(0, 2));
        this.score.push(this.scorecard[frame - 1]);
      }
      else if (frame > 0 && this.scorecard[frame - 1][0] === 10) {
        this.score.push(this.scorecard[frame].slice(0, 2));
      }
      else if (frame > 0 && this.scorecard[frame - 1][0] + this.scorecard[frame - 1][1] === 10) {
        this.score.push(this.scorecard[frame][0]);
      }

      frame += 1;
      rounds -= 1;

    }

    this.score = this.score.flat();

    for (let i = 0; i < this.score.length; i++) {
        this.total += this.score[i];
    }

    return this.total;

    
  }

}

const scorecard = new BowlingScoring([[10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10]]);
scorecard.calculate();

module.exports = BowlingScoring;

