'use strict';
class Game{
  constructor() {
    this.MAXIMUM_POINTS = 10;
    this._frames = [];
    this.rolls =[];
  }

  isSpare() {
    return this.MAXIMUM_POINTS

  }

  isStrike() {
    return this.MAXIMUM_POINTS

  }
  roll(pins) {
    this.rolls.push(pins);

  }

  score() {
    return 0;
  }
};
