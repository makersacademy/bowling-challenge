'use strict';

class Game {

  constructor() {
    this.frameNumber = 1
    this.pins = 10
    this.rollNumber = 2
  };

  isAWrongRoll(score) {
    if((this.pins - score) < 0 || score < 0) {
      return true;
    };
  };

  roll(score) {
    if(this.isAWrongRoll(score)) throw new Error('Invalid roll');

    this.pins -= score;
    this.rollNumber --;
  };
};
