class ScoreCard {
  constructor() {
    this.frames = [];
  }

  addFrame(frame) {
    this.frames.push(frame);
    this.lastFrame().setNumber(this.frames.length);
  }

  getFrameNumber(num) {
    return this.frames[num - 1];
  }

  lastFrame() {
    return this.frames[this.frames.length - 1]
  }

  regularFrames() {
    return this.frames.filter(frame => frame.number <= 10);
  }
}
