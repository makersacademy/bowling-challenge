'use strict';
class Game {
  constructor() {
    this.score = 0
    this.frame = []
    this.game =[]
  };
  roll(roll) {
    this.completeFrame(roll)
    this.completeGame()
    this.frame.push(roll)
    this.score += roll
    return this.score
  };
  whichFrame() {
    return this.game.length + 1
  };
  completeFrame() {
    if (this.frame.length === 2) {
      this.game.push(this.frame)
      this.frame = []
    }
  }
  completeGame() {
    if (this.game.length === 10) {
      throw 'Game over'
    }
  }
};
