'use strict';
class Scorecard {
  constructor() {
    this.MIN_LIMIT_PINS_DOWN = 0
    this.MAX_LIMIT_PINS_DOWN = 10
    this.SCORE_DEFAULT = 0;
    this.PINS_DOWN_DEFAULT = 0;
    this.totScore = this.SCORE_DEFAULT;
    this.numOfPinsDown = this.PINS_DOWN_DEFAULT;
  };
  up() {
    if (this.numOfPinsDown === this.MAX_LIMIT_PINS_DOWN) {
      return;
    };
    this.numOfPinsDown++;
  };
  down() {
    if (this.numOfPinsDown === this.MIN_LIMIT_PINS_DOWN) {
      return;
    };
    this.numOfPinsDown--;
  };
};
