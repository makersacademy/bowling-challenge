class Frame {
  constructor(firstBowl) {
    this.bowls = [firstBowl];
    this.frameTotal = 0;
  }

  addBowl(secondBowl) {
    if (this.bowls[0] === 10) {
      throw 'Strike! Second bowl denied.';
    } else if (this.bowls.length >= 2) {
      throw '2 bowls completed! Third bowl denied.';
    } else {
      this.bowls.push(secondBowl);
    }
  }

  frameScore() {
    return this.bowls.reduce((a, b) => a + b, 0);
  }

  updateTotalScore() {
    this.frameTotal += this.frameScore();
  }

  isAStrike() {
    return this.bowls[0] === 10
  }

  isASpare() {
    return this.frameScore() === 10 && this.bowls.length === 2
  }

  firstBowl() {
    return this.bowls[0];
  }
}
