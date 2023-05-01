const Scorecard = require('./scorecard');

class Game {
  constructor() {
    this.scorecard = new Scorecard();
    this.currentFrame = 0;
    this.frameCount = 0;
  }
}

module.exports = Game;