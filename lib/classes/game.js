const Scorecard = require('./scorecard');

class Game {
  constructor() {
    this.scorecard = new Scorecard();
    this.currentFrame = 0;
    this.frameCount = 0;
  }

  startGame() {
    this.currentFrame = this.scorecard.frames.length;
  }

  roll(pins) {
    const frame = this.scorecard.frames[this.currentFrame];

    if (!frame) {
      throw new Error(`Game is over. Cannot roll any more balls.`);
    }

    if (frame.isStrike() || frame.secondRoll !== null) {
      this.currentFrame++;
    }

    frame.bonus += pins;

    if (frame.firstRoll === null) {
      frame.firstRoll = pins;
    } else {
      frame.secondRoll = pins;
    }

    if (frame.isFinalFrame() && (frame.isSpare() || frame.isStrike())) {
      frame.bonus = null;
    }

    if (this.currentFrame === this.scorecard.MAX_FRAMES) {
      this.endGame();
    }
  }

  endGame() {
    console.log(`Final score: ${this.scorecard.getScore()}`);
  }
}

module.exports = Game;
