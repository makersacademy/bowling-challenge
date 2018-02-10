class Frame {
  constructor() {
    this.attempt = 1;
    this.rolls = { 1: null, 2: null };
  }

  bowl(pins) {
    this.rolls[this.attempt] = pins;
    this.attempt += 1;
  }
}

module.exports = Frame;
