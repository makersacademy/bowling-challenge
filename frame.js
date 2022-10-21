class Frame {
  constructor(framePins = []) {
    this.framePins = framePins;
  }

  addPins(pinsKnocked) {
    this.framePins.push(pinsKnocked);
  }

  isStrike() {
    if (this.framePins.includes(10)) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Frame;
