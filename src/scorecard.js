class Scorecard {
  constructor() {
    this.frameArray = [new Frame(),new Frame()];
    this.currentScore = 0;
  }
  

  computeScore() {
    this.frameArray.forEach((frame) => (this.currentScore += frame.score()));
  }
}
