class Frame {
  constructor() {}

  score() {
    return this.bowlOne + this.bowlTwo;
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
}
