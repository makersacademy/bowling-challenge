class Frame {
  constructor() {
    this.scores = new Array;
  }

  isSpare() {
    if (this.scores.length == 2) {
    var sum = this.scores.reduce((a, b) => a + b, 0);
    return sum === 10;
    } else {
      return false;
    }
  }

  isStrike() {
    return this.scores[0] == 10;
  }
}