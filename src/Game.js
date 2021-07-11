'use strict';

class Game {

  constructor() {
    this.score = 0;
  }

  roll(number) {
    this.score += number
  }

  final_score() {
    return this.score;
  }
}