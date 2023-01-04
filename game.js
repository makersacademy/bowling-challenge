const Frame = require("./frame");

class Game {
  constructor() {
    this.currentGame = [];
    this.currentFrame = [];
  }

  add(roll) {
    if (!this.#maxNumberOfFrames()) {
      this.#addRollToGame(roll);
    }
  }

  displayFrames() {
    let frames = [];

    this.currentGame.forEach((frame) => {
      frames.push(frame.getRolls());
    });

    return frames;
  }

  getFrames() {
    return this.currentGame;
  }

  #addRollToGame(roll) {
    this.#removeIncompleteFrame();
    this.#addFrameToGame(roll);
  }

  #removeIncompleteFrame() {
    if (this.currentFrame.length > 0) {
      this.currentGame.pop();
    }
  }

  #addFrameToGame(roll) {
    this.currentFrame.push(roll);
    const frame = new Frame(this.currentFrame);

    this.currentGame.push(frame);

    this.#resetCurrentFrame(frame);
  }

  #resetCurrentFrame(frame) {
    if (frame.isComplete(this.currentGame.length)) {
      this.currentFrame = [];
    }
  }

  #maxNumberOfFrames() {
    if (this.currentGame.length === 10 && this.currentFrame.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Game;
