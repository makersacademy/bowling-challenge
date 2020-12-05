'use strict';

class Game {

  constructor() {
    this.frameNumber = 1
    this.pins = 10
    this.rollNumber = 2
  };

  roll(score) {
    this.pins -= score;
    this.rollNumber --;
  };
};
