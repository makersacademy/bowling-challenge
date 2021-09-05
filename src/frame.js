"use strict";

class Frame {
  constructor(id) {
    this.TOTAL_PINS = 10;
    this._remainingPins = this.TOTAL_PINS;
    this._frameId = id;
    this._isFull = false;
    this._rollOne = null;
    this._rollTwo = null;
    if (id === 10) {
      this._rollThree = null;
    }
  }

  add(pins) {
    if (this._isValidRoll(pins) === false || this.isFull()) {
      return;
    }
    this._frameId === 10 ? this._lastFrame(pins) : this._normalFrame(pins);
  }

  getId() {
    return this._frameId;
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
    this._rollOne === null ? (this._rollOne = pins) : this._isBonusRoll(pins);
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
