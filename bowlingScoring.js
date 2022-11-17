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
      this.score.push(this.scorecard[frame][0]);
      this.score.push(this.scorecard[frame][1]);

      if (frame > 0 && this.scorecard[frame - 1][0] + this.scorecard[frame - 1][1] === 10) {
        this.score.push(this.scorecard[frame][0]);
      }

      frame += 1;
      rounds -= 1;

    }

    console.log(this.score)

    for (let i = 0; i < this.score.length; i++) {
        this.total += this.score[i];
    }

    return this.total;
    
  }

}

module.exports = BowlingScoring;