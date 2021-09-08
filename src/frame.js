"use strict";

class Frame {
  constructor(finalFrame = false) {
    this.TOTAL_PINS = 10;
    this._remainingPins = this.TOTAL_PINS;
    this._finalFrame = finalFrame;
    this._isFull = false;
    this._rollOne = null;
    this._rollTwo = null;
    if (finalFrame) {
      this._rollThree = null;
    }
  }

  add(pins) {
    if (this._isValidRoll(pins) === false || this.isFull()) {
      throw "Invalid Roll";
    }
    this._finalFrame ? this._lastFrame(pins) : this._normalFrame(pins);
  }

  isFinalFrame() {
    return this._finalFrame;
  }

  rollOne() {
    return this._rollOne;
  }

  rollTwo() {
    return this._rollTwo;
  }

  rollThree() {
    return this._rollThree;
  }

  isFull() {
    return this._isFull;
  }

  generateFramesArray() {
    const frameArray = [];
    for (let index = 0; index < 9; index++) {
      frameArray.push(new Frame());
    }
    frameArray.push(new Frame(true));
    return frameArray;
  }

  _normalFrame(pins) {
    this._rollOne === null
      ? this._normalFirstRoll(pins)
      : this._normalSecondRoll(pins);
  }

  _normalFirstRoll(pins) {
    this._rollOne = pins;
    this._remainingPins -= pins;
    if (pins === this.TOTAL_PINS) {
      this._normalSecondRoll(this._remainingPins);
    }
  }

  _normalSecondRoll(pins) {
    this._rollTwo += pins;
    this._isFull = true;
  }

  _lastFrame(pins) {
    // needs to adjust remaining pins after roll one
    this._rollOne === null
      ? this._finalFirstRoll(pins)
      : this._isBonusRoll(pins);
  }

  _finalFirstRoll(pins) {
    this._rollOne += pins;
    pins === 10
      ? (this._remainingPinsPins = this.TOTAL_PINS)
      : (this._remainingPins -= pins);
  }

  _isBonusRoll(pins) {
    this._rollTwo === null
      ? this._finalSecondRoll(pins)
      : this._finalThirdRoll(pins);
  }

  _finalSecondRoll(pins) {
    this._rollTwo += pins;
    let frameTotal = this._rollOne + this._rollTwo;
    frameTotal >= 10
      ? (this._remainingPins = this.TOTAL_PINS)
      : (this._isFull = true);
  }

  _finalThirdRoll(pins) {
    this._rollThree += pins;
    this._isFull = true;
  }

  _isValidRoll(pins) {
    return Number.isInteger(pins) && pins >= 0 && pins <= this._remainingPins;
  }
}
