const Frame = require("./frame");
const prompt = require('prompt-sync')({sigint: true});

class Game {
  constructor () {
    this.frames = [];
    this.total;
  }

  playFrames = () => {
    for (let i = 1 ; i <= 2 ; i++) {
      let frame = new Frame;
      console.log(`Frame ${i}`);

      this.getFirstRoll(frame);

      if (!frame.isAStrike()) {
        this.getSecondRoll(frame);
      }

      this.frames.push(frame);
    }
  }

  calculateScore = () => {
    this.frames.forEach((frame, i) => {
      if (i > 0) {
        let currentFrame = frame;
        let previousFrame = this.frames[i-1];
        this.calculateBonus(currentFrame, previousFrame);
      }
    });

    this.total = this.frames.map(frame => frame.getTotal())
      .reduce((a, b) => a + b)
  }

  calculateBonus = (currentFrame, previousFrame) => {
    if (previousFrame.isAStrike()) {
      previousFrame.bonus = this.strikeBonus(currentFrame);
    } else if (previousFrame.isASpare()) {
      previousFrame.bonus = this.spareBonus(currentFrame);
    }
  }

  strikeBonus = (currentFrame) => {
    return currentFrame.firstRoll + currentFrame.secondRoll;
  }

  spareBonus = (currentFrame) => {
    return currentFrame.firstRoll;
  }

  getFirstRoll = (frame) => {
    frame.firstRoll = parseInt(prompt(`Enter roll 1 score: `));
  }

  getSecondRoll = (frame) => {
    frame.secondRoll = parseInt(prompt(`Enter roll 2 score: `));
  }
}

module.exports = Game;

// const game = new Game;
// game.playFrames();
// game.calculateScore();
// console.log(game.total);

