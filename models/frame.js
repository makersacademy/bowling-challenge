class Frame {
  constructor() {
    this.points = [];
  }

  addPoints(rollOne, rollTwo = 0, rollThree = 0) {
    this.points.push(rollOne);
    this.points.push(rollTwo);
    this.points.push(rollThree);
  }

  framePoints() {
    return this.points;
  }

  strike() {
    return this.points[0] === 10
  }

  spare() {
    return this.points[0] !== 10 && (this.points[0] + this.points[1]) === 10;
  }
}

module.exports = Frame;
