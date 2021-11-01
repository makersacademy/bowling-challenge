class Bowling {
  constructor() {
    this.frames = [];
    this.frame;
    this.totalScore = 0;
    this.bonus = 0;
  }
  newFrame = (frame) => {
    this.frame = frame;
  };

  recordFrames = () => {
    this.frame.isOpen();
    this.frame.isSpare();
    this.frame.isStrike();
    7;
    this.frames.push(this.frame);
  };

  regularScoring = () => {
    this.recordFrames();
    this.totalScore += this.frame.firstRoll + this.frame.secondRoll;
  };

  bonusScoring = () => {
    let i = this.frames.indexOf(this.frame);
    let previousFrame = this.frames[i - 1];
    if (previousFrame.spare == true) {
      this.totalScore += this.frame.firstRoll;
      this.bonus += this.frame.firstRoll;
    } else if (previousFrame.strike == true) {
      this.totalScore += this.frame.firstRoll + this.frame.secondRoll;
      this.bonus += this.frame.firstRoll + this.frame.secondRoll;
    }
  };
  lastFrame = () => {
    if (this.frames.length == 10 && this.frame.open == false) {
      this.totalScore +=
        this.frame.firstRoll + this.frame.secondRoll + this.frame.thirdRoll;
    }
  };
}

module.exports = Bowling;
