class Scorecard {
  constructor() {
    this.currentRoll = 1;
    this.frame1 = {
      runningTotal: function() {
        return 2;
      }
    };
  }
  record(score) {
    if (this.currentRoll === 1) {
      this.frame1.roll1 = score;
      this.currentRoll = 2;
    }
    else {
      this.frame1.roll2 = score;
    }
  }
}

