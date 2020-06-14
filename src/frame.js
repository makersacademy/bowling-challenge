class Frame {
  constructor() {
    this.strikeBonus = null;
    this.spareBonus = null;
    this.bowlOne = null;
    this.bowlTwo = null;
  }

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
    this.strikeBonus = true;
    return this.bowlOne === 10;
  }

  spare() {
    this.spareBonus = true;
    return this.score() === 10;
  }
}
