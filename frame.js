class Frame {
  constructor(frame, nextFrame = null, nextNextFrame = null) {
    this.frame = frame;
    this.nextFrame = nextFrame;
    this.nextNextFrame = nextNextFrame;
  }

  checkfunc = () => {
    console.log(this.nextFrame == null);
    console.log(this.sumFrame(this.frame) < 10);
  };

  bonusType = () => {
    if (this.nextFrame == null || this.sumFrame(this.frame) < 10) {
      return "no_bonus";
    } else if (this.inFrame(this.frame, 10)) {
      return "strike";
    } else {
      return "spare";
    }
  };

  score = () => {
    if (this.bonusType() == "no_bonus") {
      return this.sumFrame(this.frame);
    } else if (this.bonusType() == "spare") {
      return this.calcSpare(this.nextFrame);
    } else if (this.bonusType() == "strike") {
      return this.calcStrike(this.nextFrame, this.nextNextFrame);
    }
  };

  sumFrame = (frame) => {
    return frame.reduce((prev, next) => prev + next);
  };

  inFrame = (frame, num) => {
    return frame.includes(num);
  };

  calcSpare = (frame) => {
    return 10 + frame[0];
  };

  calcStrike = (nframe, nnframe) => {
    if (this.inFrame(nframe, 10) && nnframe != null) {
      return 20 + nnframe[0];
    } else {
      return 10 + this.sumFrame(nframe);
    }
  };
}

module.exports = Frame;
