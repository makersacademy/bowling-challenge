class Frame {
  constructor() {
    this.frameScore = 0;
  }

  score() {
    this.frameScore = 0;
    if (isNaN(this.bowlTwo) === true) {
      this.frameScore = this.bowlOne;
    } else {
      this.frameScore = this.bowlOne + this.bowlTwo;
    }
    return this.frameScore;
  }

  reportBowlOne(bowlOne) {
    this.bowlOne = bowlOne;
  }

  reportBowlTwo(bowlTwo) {
    this.bowlTwo = bowlTwo;
  }

  strike() {
    return this.bowlOne === 10;
  }

  spare() {
    return this.score() === 10 && isNaN(this.bowlTwo) === false;
  }
}
