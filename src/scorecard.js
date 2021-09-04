class ScoreCard {
  constructor() {
    this.frames = [];
  }

  addFrame(frame) {
    this.frames.push(frame);
  }

  getFrameNumber(num) {
    return this.frames[num - 1];
  }
}
