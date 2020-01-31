class scoreCard {
  constructor() {
    this.score = [];
    this.frame = [];
    this.MAX_FRAMES = 10;
  }

  points(roll1, roll2) {
    if (this.isMaxFrames()) {
      return;
    }
    this.frame.push(roll1, roll2);
    this.score.push(this.frame);
    this.empty();
  }


  empty() {
    this.frame = [];
  }

  isMaxFrames() {
    return this.score.length === this.MAX_FRAMES;
  }
}