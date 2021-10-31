class Bowling {
  constructor() {
    this.frames = [];
    this.frame;
    this.totalScore = 0;
  }
  newFrame = (frame) => {
    this.frame = frame;
  };

  recordFrames = () => {
    this.frame.isOpen();
    this.frame.isSpare();
    this.frame.isStrike();
    this.frames.push(this.frame);
  };

  regularScoring = () => {
    this.recordFrames();
    this.totalScore += this.frame.firstRoll + this.frame.secondRoll;
  };

  bonusScoring = () => {
    let i = this.frames.indexOf(this.frame);
    let previousframe = this.frames[i - 1];
    if (previousframe.spare == true) {
      this.totalScore += this.frame.firstRoll;
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
