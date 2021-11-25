class Frame {
  constructor(frame, nextFrame = null, nextNextFrame = null) {
    this.frame = frame;
    this.nextFrame = nextFrame;
    this.nextNextFrame = nextNextFrame;
    this.noNext = nextFrame == null;
    this.hasNextNext = nextNextFrame != null;
  }

  bonusType = () => {
    if (this.noNext || this.sumFrame(this.frame) < 10) return "no_bonus";
    if (this.inFrame(this.frame, 10)) return "strike";
    return "spare";
  };

  score = () => {
    if (this.bonusType() == "no_bonus") return this.sumFrame(this.frame);
    if (this.bonusType() == "strike") return this.calcStrike();
    return this.calcSpare();
  };

  sumFrame = (frame) => frame.reduce((prev, next) => prev + next);

  inFrame = (frame, num) => frame.includes(num);

  calcSpare = (frame = this.nextFrame) => 10 + frame[0];

  calcStrike = (nframe = this.nextFrame, nnframe = this.nextNextFrame) => {
    if (this.inFrame(nframe, 10) && this.hasNextNext) return 20 + nnframe[0];
    return 10 + this.sumFrame(nframe);
  };
}

module.exports = Frame;
