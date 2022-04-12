const { reduce } = require("lodash");
const Frame = require("./frame.js");

class BowlingScore {
  constructor(frame_class = Frame) {
    this.frames = [];
    this.frame_class = frame_class;
  }

  getTotalScore() {
    return reduce(
      this.frames,
      (accumulator, frame) => {
        return accumulator + frame.getScore();
      },
      0 // Initial accumulator
    );
  }

  getFrameScore(frameNumber) {
    let searchFrame = this.frames.find(
      (frame) => frame.getNumber() === frameNumber
    );
    return searchFrame.getScore();
  }

  getFrameDetailedScore(frameNumber) {
    let searchFrame = this.frames.find(
      (frame) => frame.getNumber() === frameNumber
    );
    return searchFrame.getDetailedScore();
  }

  addScore(pins) {
    this.applyBonus(pins);
    if (this.#currentFrame() === undefined) {
      this.#addFrame(1);
    } else if (this.#currentFrame().isComplete()) {
      let nextNumber = this.#currentFrame().getNumber() + 1;
      if (nextNumber <= 10) {
        this.#addFrame(nextNumber);
      }
    }
    this.#currentFrame().addScore(pins);
  }

  applyBonus(pins) {
    let incompleteBonuses = this.frames.filter(
      (frame) => !frame.isBonusComplete()
    );
    incompleteBonuses.forEach((frame) => {
      frame.addBonus(pins);
    });
  }

  #currentFrame() {
    return this.frames[this.frames.length - 1];
  }

  #addFrame(number) {
    this.frames.push(new this.frame_class(number));
  }
}

module.exports = BowlingScore;
