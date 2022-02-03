const Frame = require("./frame.cjs");

class Round {
  constructor(input = []) {
    this.frames = input;
  }

  getTotalScore() {
    let totalScore = 0;
    this.frames.forEach((frame) => {
      totalScore += frame.score;
    });
    return totalScore;
  }

  addRoll(points) {
    if (this.isFinished()) throw "round finished";
    this.#allocateBonusPoints(points);
    if (
      this.frames.length === 0 ||
      !this.frames.at(-1).isComplete() ||
      !this.#hasTenFrames()
    ) {
      this.#fillOrCreateFrame(points);
    }
  }

  #fillOrCreateFrame(points) {
    // console.log('Hello from fillorcreate')
    let mostRecentFrame = this.frames.at(-1);
    if (this.frames.length === 0 || mostRecentFrame.isComplete()) {
      this.frames.push(new Frame());
      this.frames.at(-1).addRoll(points);
    } else {
      mostRecentFrame.addRoll(points);
    }
  }

  #allocateBonusPoints(points) {
    this.frames.forEach((frame) => {
      if (frame.bonusPoints > 0) {
        frame.addBonus(points);
      }
    });
  }

  isFinished() {
    if (this.frames.length === 0) {
      return false;
    } else {
      return (
        this.frames.at(-1).bonusPoints === 0 &&
        this.frames.at(-1).isComplete() &&
        this.#hasTenFrames()
      );
    }
  }

  #hasTenFrames() {
    return this.frames.length === 10;
  }
}

module.exports = Round;
