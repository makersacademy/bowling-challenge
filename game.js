const Frame = require("./frame");

class Game {
  constructor() {
    this.frames = [new Frame()];
    this.frameNumber = 0;
    this.numberOfFrames = 10;
  }

  roll(numberOfPins) {
    if (this.frameNumber < this.numberOfFrames) {
      if (this.frames[this.frameNumber].completed) {
        this.frames.push(new Frame());
        this.frameNumber++;
      }

      this.frames[this.frameNumber].roll(numberOfPins);
    }
  }

  calculateScore() {
    let score = 0;

    this.frames.map((frame, index) => {
      if (frame.isStrike()) {
        score += this.strikeBonus(index);
      } else if (frame.isSpare()) {
        score += this.spareBonus(index);
      }
      score += frame.total();
    });

    return score;
  }

  strikeBonus(frameIndex) {
    let nextFrame = this.frames[frameIndex + 1];
    let nextAgainFrame = this.frames[frameIndex + 2];
    let nextRoll = 0;

    if (nextFrame && nextFrame.rolls[1]) {
      nextRoll = nextFrame.rolls[1];
    } else if (nextAgainFrame) {
      nextRoll = nextAgainFrame.rolls[0];
    }

    return this.spareBonus(frameIndex) + nextRoll;
  }

  spareBonus(frameIndex) {
    let nextFrame = this.frames[frameIndex + 1];
    let nextRoll = 0;

    if (nextFrame) {
      nextRoll = nextFrame.rolls[0];
    }

    return nextRoll;
  }
}

module.exports = Game;
