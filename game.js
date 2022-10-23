const Frame = require("./frame");
const prompt = require('prompt-sync')({sigint: true});

class Game {
  constructor () {
    this.frames = [];
    this.total;
  }

  playFrames = () => {
    for (let i = 1 ; i < 10 ; i++) {
      let frame = new Frame;
      console.log(`Frame ${i}`);

      this.getFirstRoll(frame);

      if (!frame.isAStrike()) {
        this.getSecondRoll(frame);
      }

      this.frames.push(frame);
    }
  }

  playFinalFrame = () => {

    let frame = new Frame;
    console.log(`Frame 10`);

    this.getFirstRoll(frame);
    this.getSecondRoll(frame);

    if (frame.isAStrike() || frame.isASpare()) {
      this.getBonusRoll(frame);
    }

    this.frames.push(frame);
  }

  calculateBonus = () => {
    this.frames.forEach((frame, i) => {
      let currentFrame = frame;
      let previousFrame = this.frames[i-1];
      let nextFrame = this.frames[i+1];
      if (nextFrame === undefined) {
        nextFrame = {firstRoll: 0};
      }
      
      if (i >= 1) {
        this.addBonus(currentFrame, previousFrame, nextFrame);
      }
    });
  }

  calculateTotalScore = () => {
    this.total = this.frames.map(frame => frame.getTotal())
      .reduce((a, b) => a + b)
  }

  addBonus = (currentFrame, previousFrame, nextFrame) => {
    if (previousFrame.isAStrike()) {
      previousFrame.bonus = this.calculateStrikeBonus(currentFrame, nextFrame);
    } else if (previousFrame.isASpare()) {
      previousFrame.bonus = this.calculateSpareBonus(currentFrame);
    }
  }

  calculateStrikeBonus = (currentFrame, nextFrame) => {
    if (currentFrame.getTotal() >= 20 || currentFrame.isASpare()) {
      return currentFrame.firstRoll + currentFrame.secondRoll;
    } else {
      return currentFrame.firstRoll + nextFrame.firstRoll;
    }
  }

  calculateSpareBonus = (currentFrame) => {
    return currentFrame.firstRoll;
  }

  getFirstRoll = (frame) => {
    frame.firstRoll = parseInt(prompt(`Enter roll 1 score: `));
  }

  getSecondRoll = (frame) => {
    frame.secondRoll = parseInt(prompt(`Enter roll 2 score: `));
  }

  getBonusRoll = (frame) => {
    frame.bonus = parseInt(prompt(`Enter bonus roll score: `));
  }
}

module.exports = Game;


