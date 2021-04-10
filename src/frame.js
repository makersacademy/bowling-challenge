class Frame {
  constructor() {
    this.scores = new Array;
  }

  isSpare() {
    var sum = this.scores.reduce((a, b) => a + b, 0);
    return sum === 10;
  }
}