class Game {
  constructor() {
    this.frames = [];
    this.points = [];
    this.currentPoints = 0;
  }
  add() {
    this.frames.push(new Frame());
  }
  insertPoints(n) {
    this.points.push(this.getCurrentPoints());
  }
  getCurrentPoints() {
    this.calculatePoints();
    return this.currentPoints;
  }

  calculatePoints(n) {
    this.currentPoints += this.currentFrame(n).getTotal();
    if (n >= 0) {
      this.calculatePrevious(n);
    }
  }

  calculatePrevious(n) {
    if (this.previousFrame(n).isSpare() === true) {
      this.currentPoints += this.currentFrame(n).roll_1;
    } else {
      return;
    }
  }
  currentFrame(n) {
    return this.frames[n];
  }
  previousFrame(n) {
    return this.frames[n - 1];
  }
}
