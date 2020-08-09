'use strict';
class Game {
  constructor() {
    this.score = 0
    this._frame = []
    this.game =[]
  };
  roll(roll) {
    this.completeGame()
    this._frame.push(roll)
    this.completeFrame(roll)
    this.score += roll
    return this.score
  };
  currentFrame() {
    return this.game.length + 1
  };
  completeFrame(roll) {
    if (this._frame.length === 2) {
      this.game.push(this._frame)
      this._frame = []
    } else if (roll === 10) {
      this.game.push(this._frame)
      this._frame = []
    }
  }
  completeGame() {
    if (this.game.length === 10) {
      console.log("You scored " + this.score)
      throw 'Game over'
    }
  }
};
