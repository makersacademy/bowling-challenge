'use strict';
class Game {
  constructor() {
    this.score = 0
    this._frame = new Frame
    this.game =[]
  };
  roll(roll) {
    this.completeGame()
    this._frame.roll(roll)
    this.completeFrame(roll)
    this.score += roll
    return this.score
  };
  currentFrame() {
    return this.game.length + 1
  };
  completeFrame(roll) {
    if (this._frame.rolls.length === 2) {
      this.game.push(this._frame)
      this._frame = new Frame
    } else if (roll === 10) {
      this.game.push(this._frame)
      this._frame = new Frame
    }
  }
  completeGame() {
    if (this.game.length === 10) {
      console.log("You scored " + this.score)
      throw 'Game over'
    }
  }
};
