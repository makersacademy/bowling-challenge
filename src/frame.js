class Frame {
  constructor(round) {
    this.score = new Score();
    this.round = round;
    this.isSpare = this.score.isSpare;
    this.isStrike = this.score.isStrike;
    this.frameScore = null;
  }

  firstRoll(pins) {
    this.score.firstRoll(pins);
    this.isStrike = this.score.isStrike;
  }

  secondRoll(pins) {
    this.score.secondRoll(pins);
    this.isSpare = this.score.isSpare;
    this.calculateScore();
  }

  calculateScore() {
    this.frameScore = this.score.calculateScore();
  }

  checkEnd() {
    if ((this.round === 10
      && this.isStrike === false
      && this.isSpare === false) || this.round === 11) {
      return 'End';
    }
    if (this.round === 10
      && (this.isStrike === true
      || this.isSpare) === true) {
      return 'Bonus';
    }
  }
}
