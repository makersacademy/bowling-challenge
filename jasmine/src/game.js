class Game {
  constructor() {
    this.frames = [];
    this.points = 0;
  }
  add() {
    this.frames.push(new Frame());
  }

  addPoints(n) {
    if (n < 1) {
      return this.getPoints();
    } else {
      if (this.wasSpare(n)) {
        this.previousFrame(n).addPoints(this.currentFrame(n).roll_1);
        return this.getPoints();
      } else if (n >= 2 && this.alsoWasStrike(n) && this.wasStrike(n)) {
        this.previousFrame(n).addPoints(this.currentFrame(n).getTotal());
        this.beforePreviousFrame(n).addPoints(this.currentFrame(n).roll_1);
        return this.getPoints();
      } else if (this.wasStrike(n)) {
        this.previousFrame(n).addPoints(this.currentFrame(n).getTotal());
        return this.getPoints();
      } else {
        return this.getPoints();
      }
    }
  }

  currentFrame(n) {
    return this.frames[n];
  }
  previousFrame(n) {
    return this.frames[n - 1];
  }
  beforePreviousFrame(n) {
    return this.frames[n - 2];
  }
  wasStrike(n) {
    return this.previousFrame(n).isStrike();
  }
  wasSpare(n) {
    return this.previousFrame(n).isSpare();
  }
  alsoWasStrike(n) {
    return this.beforePreviousFrame(n).isStrike();
  }
  getPoints() {
    let sum = 0;
    for (let i = 0; i < this.frames.length; i++) {
      sum += this.frames[i].getTotal();
    }
    return sum;
  }
}
