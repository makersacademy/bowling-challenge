class Frame {

  constructor(frameNumber) {
    this.frameNumber = frameNumber;
    this.frameTotal = 0;
    this.score = new Score();
    this.strike = score.strike
    this.spare = score.spare
  }

  firstBowl(pins) {
    this.score.firstBowl(pins);
  }

  secondBowl(pins) {
    this.score.secondBowl(pins);
  }

  calculateScore() {
    this.frameTotal = this.score.calculateScore();
    
  }
}