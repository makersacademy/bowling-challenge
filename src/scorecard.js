class Scorecard {
  constructor() {
    this.frame1 = new Frame();
    this.frame2 = new Frame();
    this.frameArray = [];
    this.currentScore = 0;
  }
  addFrame(frame) {
    this.frameArray.push(frame);
  }

  computeScore() {
    this.frameArray.forEach((frame) => (this.currentScore += frame.score()));
  }
}
