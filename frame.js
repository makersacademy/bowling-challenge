class Frame {
  constructor(roundPins = []) {
    this.roundPins = roundPins;
  }

  addPins(pinsKnocked) {
    this.roundPins.push(pinsKnocked);
  }
}

module.exports = Frame;
