'use strict';

class BowlingGame{
  constructor() {
    this.rolls = []
    this.frames = []
}

  roll(pins) {
    this.rolls << pins
  }

};
