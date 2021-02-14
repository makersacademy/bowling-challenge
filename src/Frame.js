'use strict';

class Frame {
  constructor(number, pins) {
    this._number = number
    this._pins = pins
    this._rolls = []
    this._open = true
  }

  add_roll(pins) {
    this.current = pins;
    if(this.isStrike() || this._rolls.length == 2) this._open = false

  }

  isStrike() {
    return this._rolls.length === 1 && this._pins === 10;
  }

  isSpare() {
    return this._rolls.length === 2 && this._rolls.reduce((a,b)=>a+b) === 10;
  }

  get number() {
    return this._number;
  }

  get open() {
    return this._open;
  }

  get pins() {
    return this._pins;
  }

  get rolls() {
    return this._rolls;
  }

  set current(pins) {
    this._rolls.push(pins);
  }
}
