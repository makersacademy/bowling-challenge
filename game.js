const Frame = require("./frame");

class Game {
  constructor() {
    this.allFrames = [];
    this.currentFrame = [];
  }

  add(roll) {
    if (!this.#maxNumberOfFrames()) {
      this.#addRollToGame(roll);
    }
  }

  framesWithRolls() {
    let frames = [];

    this.allFrames.forEach((frame) => {
      frames.push(frame.scores());
    });

    return frames;
  }

  frames() {
    return this.allFrames;
  }

  #addRollToGame(roll) {
    this.#removeIncompleteFrame();
    this.#addFrameToGame(roll);
  }

  #removeIncompleteFrame() {
    if (this.currentFrame.length > 0) {
      this.allFrames.pop();
    }
  }

  #addFrameToGame(roll) {
    this.currentFrame.push(roll);
    const frame = new Frame(this.currentFrame);

    this.allFrames.push(frame);

    this.#resetCurrentFrame(frame);
  }

  #resetCurrentFrame(frame) {
    if (frame.isComplete(this.allFrames.length)) {
      this.currentFrame = [];
    }
  }

  #maxNumberOfFrames() {
    if (this.allFrames.length === 10 && this.currentFrame.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Game;
