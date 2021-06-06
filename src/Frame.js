module.exports = class Frame {
  constructor() {
    this._knockedDownPins = 0;
  }

  roll(pins) {
    this._knockedDownPins += pins;
  }

  get knockedDownPins() {
    return this._knockedDownPins;
  }
};
