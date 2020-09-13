'use strict';

class bowlingGame {

  constructor() {
    this.rolls = [];
    this.score = 0;
  };

  roll(points) {
    this.score += points
  };

  total_score() {
    return this.score
  };


}; 