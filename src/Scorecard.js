class Scorecard {
  constructor() {
    this.currentRoll = 1
    this.currentFrame = 0
    this.frames = [
      new Frame(),
      new Frame()
    ]
  }

  record(score) {
    if (this.currentRoll === 1) {
      this.frames[this.currentFrame].roll1 = score;
      this.currentRoll = 2;
    }
    else {
      this.frames[this.currentFrame].roll2 = score;
      this.currentRoll = 1
      this.currentFrame++
    }
  }

  runningTotal(frame) {
    let total = 0;
    for (let i = 0; i <= frame; i++) {
      total += this.frames[i].total();
    }
    return total;
  }
}

