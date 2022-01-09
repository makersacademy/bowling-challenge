class Frame {
  constructor() {
    this.rolls = [];
  }

  add_roll(points) {
    this.rolls.push(points);
  }
}

module.exports = Frame;