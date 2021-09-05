class Frame {

  constructor() {
    this.currentRoll = 0;
    this.rollsRemaining = 2;
    this.frameScore = 0;
  }

  addRoll(pins) {
    this.currentRoll++;
    this.frameScore += pins;
  }
  
  isStrike() {
    return this.currentRoll == 1 && this.frameScore == 10;
  }
}
