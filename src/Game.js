'use strict';
class Game {
  constructor() {
    this.score = 0
  }
  roll(roll1, roll2) {
    this.score += roll1
    this.score +=roll2
    return this.score
  }
}
