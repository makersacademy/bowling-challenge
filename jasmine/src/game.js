class Game {
  constructor() {
    this.frames = [];
    this.points = [];
  }
  add() {
    this.frames.push(new Frame());
  }
  getPoints(n) {
    this.calculatePoints(n);
    return this.points[n];
  }
  calculatePoints(n) {
    this.points[n] = this.frames[n].getTotal();
  }
}
