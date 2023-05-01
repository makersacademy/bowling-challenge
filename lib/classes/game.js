const Scorecard = require('./scorecard');
const Frame = require('./frame');

class Game {
  constructor() {
    this.scorecard = new Scorecard();
    this.currentFrame = 0;
    this.frameCount = 0;
  }

  startGame() {
    this.currentFrame = this.scorecard.frames.length;
  }

  endGame() {
    console.log(`Final score: ${this.scorecard.getScore()}`);
  }

  roll(firstRoll, secondRoll, thirdRoll) {
    const frame = new Frame(firstRoll, secondRoll, thirdRoll);
    this.scorecard.addFrame(frame);
    this.currentFrame = this.scorecard.frames.length;
    this.frameCount++;
  
    if (this.frameCount >= this.scorecard.MAX_FRAMES) {
      this.endGame();
    }
  }
}
  
module.exports = Game;
