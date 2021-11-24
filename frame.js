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

  sumFrame = (frame) => {
    let sum = 0;
    for (let i = 0; i < frame.length; i++) {
      sum += frame[i];
    }
    return sum;
  };

  inFrame = (frame, num) => {
    return frame.includes(num);
  };
}

module.exports = Frame;
