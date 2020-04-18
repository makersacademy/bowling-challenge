class Scorecard {
  constructor() {
    this.currentRoll = 1;
    this.frame1 = {
      runningTotal: function() {
        return this.roll1 + this.roll2;
      },
    };
    this.frame2 = {
      runningTotal: function() {
        return this.roll1 + this.roll2;
      },
    };
    this.currentFrame = this.frame1
  }

  record(score) {
    if (this.currentRoll === 1) {
      this.currentFrame.roll1 = score;
      this.currentRoll = 2;
    }
    else {
      this.currentFrame.roll2 = score;
      this.currentRoll = 1
      this.currentFrame = this.frame2
    }
  }
}

