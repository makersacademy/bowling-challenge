class Frame {
  constructor(firstBowl) {
    this.bowls = [firstBowl];
    this.frameTotal = 0;
  }

  addBowl(secondBowl) {
    if (this.bowls[0] === 10) {
      throw new Error('Strike! Second bowl denied.');
    } else if (this.bowls.length >= 2) {
      throw new Error('2 bowls completed! Third bowl denied.');
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
    if (this.bowls[0] === 10) {
      return true;
    } else {
      return false;
    }
  }

  isASpare() {
    if (this.frameScore() === 10 && this.bowls.length === 2) {
      return true;
    } else {
      return false;
    }
  }

  firstBowl() {
    return this.bowls[0];
  }
}
