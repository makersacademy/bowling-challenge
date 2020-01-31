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

  totalScore() {
    let sum = 0;

    for (let i = 0; i < this.score.length; i++) {
      for (let j = 0; j < this.score[i].length; j++) {
        sum += this.score[i][j];
      }
    }
    return sum;
  }

  empty() {
    this.frame = [];
  }

  isMaxFrames() {
    return this.score.length === this.MAX_FRAMES;
  }
}