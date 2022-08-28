const Frame = require('./Frame')

class Game {
  constructor() {
    this.game = [new Frame];
  }

  framenum() {
    return this.game.length;
  }

  currentframe() {
    return this.game[this.framenum() - 1];
  }

  roll(ball) {
    if (this.currentframe().done()) {
      if (this.framenum < 10) {
        this.game.push(new Frame);
      } else {
        this.game.push(new Frame(true));
      }
    }
    this.currentframe().roll(ball);
  }
}

module.exports = Game;
