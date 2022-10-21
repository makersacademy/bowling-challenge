class Frame {
  constructor(framePins = []) {
    this._framePins = framePins;
  }

  addPins(pinsKnocked) {
    this._framePins.push(pinsKnocked);
  }

  isStrike() {
    if (this._framePins.includes(10)) {
      return true;
    } else {
      return false;
    }
  }

  isSpare() {
    if (
      !this._framePins.includes(10) &&
      this._framePins.reduce((val1, val2) => val1 + val2) === 10
    ) {
      return true;
    } else {
      return false;
    }
  }

  framePins() {
    return this._framePins;
  }
}

module.exports = Frame;
