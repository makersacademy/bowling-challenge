class Frame {
  constructor() {
    this.strikeBonus = null;
    this.spareBonus = null;
    this.bowlOne = null;
    this.bowlTwo = null;
    this.frameScore = null;
  }

  score() {
  this.frameScore = this.bowlOne + this.bowlTwo
    return this.frameScore ;
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
    return (this.score() === 10 && this.bowlTwo != null ) ;
  }
}
