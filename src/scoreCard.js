class ScoreCard {
  constructor() {
    this.frames = [];
  }

  totalScore() {
    return 0;
  }

  isComplete() {
    return true;
  }

  addFrame(frame) {
    this.frames.push(frame);
  }
}