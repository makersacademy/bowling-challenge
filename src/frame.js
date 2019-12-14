class Frame {
  setRollOne(score) {
    this.rollOne = score;
  }

  getRollOne() {
    return this.rollOne;
  }

  setRollTwo(score) {
    this.rollTwo = score;
  }

  getRollTwo() {
    return this.rollTwo;
  }

  getFrameScore() {
    return this.rollOne + this.rollTwo;
  }
}

module.exports = Frame;
