'use strict';
class Game {
  constructor() {
    this.score = 0
    this.frame = []
    this.game =[]
  };
  roll(roll) {
    this.frame.push(roll)
    if (this.frame.length === 2) {
      this.game.push(this.frame)
    }
    this.score += roll
    return this.score
  };
  whichFrame() {
    return this.game.length + 1
  };
};
