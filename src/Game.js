'use strict()';
class Game {
  constructor() {
    this.score = 0;
    this.frame = new Frame();
    this.game =[];
  }
  startFrame() {
    if (this.game.length == 9) {
      this.frame = new finalFrame();
    } else {
      this.frame = new Frame();
    }
  }
  roll(roll) {
    this.completeGame();
    this.frame.roll(roll);
    this.completeFrame(roll);
    this.score += roll;
    return this.score;
  }
  currentFrame() {
    return this.game.length + 1;
  }
  completeFrame(roll) {
    if (this.frame.rolls.length === 2) {
      this.game.push(this.frame);
      this.startFrame();
    } else if (roll === 10) {
      this.game.push(this.frame);
      this.startFrame();
    }
  }
  completeGame() {
    if (this.game.length === 10) {
      console.log("You scored " + this.score)
      throw 'Game over'
    }
  }
}
