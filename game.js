const Frame = require("./frame");

class Game {
  constructor() {
    this.frames = [new Frame()];
    this.frameNumber = 0;
  }

  roll(numberOfPins) {
    if (this.frames[this.frameNumber].completed) {
      this.frames.push(new Frame());
      this.frameNumber++;
    }

    this.frames[this.frameNumber].roll(numberOfPins);
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

    if (nextFrame.rolls.length === 2) {
      return nextFrame.rolls[0] + nextFrame.rolls[1];
    } else {
      return nextFrame.rolls[0] + nextAgainFrame.rolls[0];
    }
  }

  spareBonus(frameIndex) {
    return this.frames[frameIndex + 1].rolls[0];
  }
}

module.exports = Game;
