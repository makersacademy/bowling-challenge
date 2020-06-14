class Scorecard {
  constructor() {
    this.frame1 = new Frame();
    this.frame2 = new Frame();
    this.frameArray = [];
  }
  addFrame(frame) {
    this.frameArray.push(frame);
  }
}
