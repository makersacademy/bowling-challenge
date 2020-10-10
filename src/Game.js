class Game {
  constructor() {
    this.frame = [];
    this.gameFrames = [];
  }

  roll(score) {
    if (this.frame.length == 2) {
      this.addFrame();
      this.frame.push(score);
    } else if (score <= 10 && score >= 0) {
      this.frame.push(score);
    }
  }

  addFrame() {
    this.gameFrames.push(this.frame);
    this.frame = [];
  }
}
