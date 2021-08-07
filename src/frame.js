class Frame {
  constructor() {
    this.scores = [];
  }
  add(pins) {
    pins != 10 ? this.scores.push(pins) : this.scores.push(pins, 0);
  }
  isFinished() {
    return this.scores.length === 2;
  }
}

export default Frame;
