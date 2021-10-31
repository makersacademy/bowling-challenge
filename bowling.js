class Bowling {
  constructor(frame) {
    this.frame = frame;
    this.frames = [];
    this.totalScore = 0;
  }
  regularScoring = () => {
    this.recordFrames();
    if (this.frame.open == true) {
      this.totalScore += this.frame.firstRoll + this.frame.secondRoll;
    }
  };

  recordFrames = () => {
    this.frame.isOpen();
    this.frame.isSpare();
    this.frame.isStrike();
    this.frames.push(this.frame);
  };
}

module.exports = Bowling;
