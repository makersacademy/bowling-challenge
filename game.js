const Frame = require("./frame");

class Game {
  constructor() {
    this.allFrames = [];
    this.currentFrame = [];
  }

  add(roll) {
    if (this.#maxNumberOfFrames() === false) {
      this.#addRollToFrame(roll);
    }
  }

  framesWithRolls() {
    let frames = [];

    this.allFrames.forEach(addFrames);

    function addFrames(frame) {
      frames.push(frame.scores());
    }
    return frames;
  }

  #addRollToFrame(roll) {
    this.currentFrame.push(roll);

    if (this.currentFrame.length > 1) {
      this.allFrames.pop();
    }

    const frame = new Frame(this.currentFrame);
    this.allFrames.push(frame);

    if (frame.isComplete(this.allFrames.length) === true) {
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
