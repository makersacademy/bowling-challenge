class BowlingScoring {
  // constructs with a scorecard from bowlingGame
  constructor(scorecard) {
    this.scorecard = scorecard;
    this.score = [];
    this.total = 0;
    this.frame = 0;
  }

  // runs through scorecard to calculate total score 
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

  // adds points from each frame in scorecard to score
  addScore() {
    this.score.push(this.scorecard[this.frame]);
  }

  // checks for spares, strikes and double strikes
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

  // checks for double strike
  checkDoubleStrike() {
    if (this.frame > 1 && this.checkStrike() && this.scorecard[this.frame - 2][0] === 10) {
      return true;
    }
  }

  // adds points from double strike to score
  doubleStrikeScore() {
    this.score.push(this.scorecard[this.frame].slice(0, 2));
    this.score.push(this.scorecard[this.frame - 1]);
  }

  // checks for strike
  checkStrike() {
    if (this.frame > 0 && this.scorecard[this.frame - 1][0] === 10) {
      return true;
    }
  }

  // adds points from strike to score
  strikeScore() {
    this.score.push(this.scorecard[this.frame].slice(0, 2));
  }

  // checks for spare
  checkSpare() {
    if (this.frame > 0 && this.scorecard[this.frame - 1][0] + this.scorecard[this.frame - 1][1] === 10) {
      return true;
    }
  }

  // adds points from spare to score
  spareScore() {
    this.score.push(this.scorecard[this.frame][0]);
  }

  // totals up scores
  totalScore() {
    this.score = this.score.flat();

    for (let i = 0; i < this.score.length; i++) {
        this.total += this.score[i];
    }

    return this.total;
  }

  // returns score
  getScore() {
    if (this.scorecard.length < 10) {
      return `Score so far: ${this.total}.`
    } else {
      return `Score from the last game: ${this.total}.`
    }
  }

}

module.exports = BowlingScoring;

