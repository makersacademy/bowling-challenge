'use strict';

class Game{
  constructor() {
    this.score = 0;
  }

  hit(pins) {
    return this.score += pins;
  }

  totalScore() {
    return this.score;
  }

};