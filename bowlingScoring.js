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
      this.addScore();
      this.checkScore();
      this.frame += 1;
      rounds -= 1;
    }

   return this.totalScore();
  }

  addScore() {
    this.score.push(this.scorecard[this.frame]);
  }

  checkScore() {
    if (this.checkDoubleStrike()) {
      this.doubleStrikeScore();
    }
    else if (this.checkStrike()) {
      this.strikeScore();
    }
    else if (this.checkSpare()) {
      this.spareScore();
    }
  }

  checkDoubleStrike() {
    if (this.frame > 1 && this.checkStrike() && this.scorecard[this.frame - 2][0] === 10) {
      return true;
    }
  }

  doubleStrikeScore() {
    this.score.push(this.scorecard[this.frame].slice(0, 2));
    this.score.push(this.scorecard[this.frame - 1]);
  }

  checkStrike() {
    if (this.frame > 0 && this.scorecard[this.frame - 1][0] === 10) {
      return true;
    }
  }

  strikeScore() {
    this.score.push(this.scorecard[this.frame].slice(0, 2));
  }

  checkSpare() {
    if (this.frame > 0 && this.scorecard[this.frame - 1][0] + this.scorecard[this.frame - 1][1] === 10) {
      return true;
    }
  }

  spareScore() {
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

