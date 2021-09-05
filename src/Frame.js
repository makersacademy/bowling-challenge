class Frame {

  constructor() {
    this.currentRoll = 0;
    this.rollsRemaining = 2;
    this.frameScore = 0;
    this.closed = false;
  }

  addRoll(pins) {
    this.currentRoll++;
    this.frameScore += parseFloat(pins);
    this.updateRollsRemaining();
  }
  
  isStrike() {
    return this.currentRoll == 1 && this.frameScore == 10;
  }

  isSplit() {
    return this.currentRoll == 2 && this.frameScore == 10;
  }

  isFrameOver() {
    return this.closed === false && this.rollsRemaining === 0;
  }

  updateRollsRemaining() {
    if (this.isStrike() === false && this.isSplit() === false) {
      this.rollsRemaining--;
    }
  }
}
