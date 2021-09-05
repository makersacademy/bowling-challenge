class Frame {

  constructor() {
    this.currentRoll = 0;
    this.rollsRemaining = 2;
    this.frameScore = 0;
  }

  addRoll(pins) {
    this.currentRoll++;
    this.frameScore += pins;
    this.updateRollsRemaining();
  }
  
  isStrike() {
    return this.currentRoll == 1 && this.frameScore == 10;
  }

  isSplit() {
    return this.currentRoll == 2 && this.frameScore == 10;
  }

  updateRollsRemaining() {
    if (this.isStrike() === false && this.isSplit() === false) {
      this.rollsRemaining--;
    }
  }
}
