'use strict';

class Game {
  constructor() {
    this.totalScore = 0
    this.scorecard = []
    this.frame = []
    this.rollNumber = 1
  }
  addScore(score) {
    this.frame.push(score)
    this.rollNumber += 1
  }
}

module.exports = Game;