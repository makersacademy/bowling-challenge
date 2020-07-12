'use strict';
class BowlingGame{
  constructor() {
    this.MAXIMUM_POINTS = 10;
    this.rolls =[];
  }

  isSpare() {
    return this.MAXIMUM_POINTS
  }

  isStrike() {
    return this.roll1() == this.MAXIMUM_POINTS
    ;
  }

  roll(pins) {
    this.rolls.push(pins);

  }

  score() {
    var result = 0;
    for(var i = 0; i < 20; i++) {
    result += this.rolls[i];
  }
    return result;
  }

  roll1() {
    return this.rolls[0]

  }
  roll2(pins) {
    return this.rolls[1]

  }
};
