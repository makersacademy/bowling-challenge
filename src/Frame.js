'use strict';
class Frame {
  constructor() {
    this.rolls = []
  }
  roll(pins) {
    this.rolls.push(pins)
  }
}
